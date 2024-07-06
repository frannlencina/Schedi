'use client'
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Toaster, toast } from 'sonner'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toastMessages } from "@/app/utils/toastMessages";
export default function Page() {

    const [error, setError] = useState();
    const router = useRouter();
    const [ termsCon, setTermsCon ] = useState(false);
  

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const formData = new FormData(event.currentTarget);
          const signupResponse = await axios.post("/api/auth/register", {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            terms_and_conditions: termsCon
          });
          toast.success(toastMessages.register.success);
          const res = await signIn("credentials", {
            username: signupResponse.data.username,
            password: formData.get("password"),
            redirect: false,
          });
          
          if (res?.ok) return router.push("/dashboard/profile");
        } catch (error) {
          console.log(error);
          toast.success(toastMessages.register.error);
          if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message;
            setError(errorMessage);
          }
        }
      };

    return (
        <div>
            <Toaster position="bottom-center" />
            <form className="flex mx-auto gap-2 flex-col bg-red-200 max-w-lg" onSubmit={onSubmit}>
                <h1 className="text-4xl font-black mx-auto">Register page</h1>
                <input className="border border-stone-500"  name="username" placeholder="username" />
                <input className="border border-stone-500" name="email"  placeholder="email"/>
                <input className="border border-stone-500" name="password" placeholder="contraseña" />
                
                <span className="flex flex-col items-center justify-center">
                <label htmlFor="terms_and_conditions">Acepto los terminos y condiciones</label>
                <input name="terms_and_conditions" type="checkbox" onChange={ ()=> { setTermsCon(!termsCon) }} />
                </span>
               
                <input type="submit" />
            </form>
        </div>
    )
}