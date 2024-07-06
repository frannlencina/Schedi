import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {

    const { username, email, password, terms_and_conditions } = await request.json();

    if(!terms_and_conditions){
      return NextResponse.json(
        { message: "Los terminos y condiciones deben de ser aceptados para registrarse." },
        { status: 400 })
    }

    if (password.length < 6)
      return NextResponse.json(
        { message: "La contraseña no puede ser menor a 6 caracteres" },
        { status: 400 }
      );

    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "Email ya registrado.",
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      terms_and_conditions: terms_and_conditions
    });

    const savedUser = await user.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        username,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}