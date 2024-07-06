'use client'
import { Toaster, toast } from "sonner"
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { toastMessages } from "@/app/utils/toastMessages";
export default function Page() {
  const { data: session } = useSession()
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    toast.success(toastMessages.login.success)
    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push("/dashboard/profile");
  };

  return (
    <div>
      <Toaster position="bottom-center" />
      <form className="flex mx-auto gap-2 flex-col bg-red-200 max-w-lg" onSubmit={onSubmit}>
        <h1 className="text-4xl font-black mx-auto">Login page</h1>
        <input className="border border-stone-500" name="username" type="text" />
        <input className="border border-stone-500" name="password" type="password" />
        <input type="submit" />
        {
          session ? <p>Session: {JSON.stringify(session)}</p> : <p>No session </p>
        }
      </form>
    </div>
  )
}