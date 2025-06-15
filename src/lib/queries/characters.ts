"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { characters } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getCharacters() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const user_id = session.user.id;

  const result = await db.query.characters.findMany({
    where: eq(characters.autorId, user_id),
  });

  return result;
}

export async function createCharacter(formData: FormData) {
  const session = await auth();

  if (session?.user?.id) {
    const rawFormData = {
      name: formData.get("name")?.toString(),
      class: formData.get("class")?.toString(),
      species: formData.get("species")?.toString(),
      autorId: session.user.id,
      level: 1,
    };

    await db.insert(characters).values(rawFormData);

    revalidatePath("/characters");
    redirect("/characters");
  }
}
