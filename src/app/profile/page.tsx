"use server";

import { auth } from "@/auth";
import ThemeToggle from "@/components/theme-toggle";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const { email, id, image, name } = session.user;

  return (
    <>
      {image ? (
        <img src={image} alt="User's avatar." height={100} width={100} />
      ) : (
        <div className="p-8 border rounded-md">name[0]</div>
      )}
      <p>{name}</p>
      <p>{email}</p>
      <p>{id}</p>
      <ThemeToggle />
    </>
  );
}
