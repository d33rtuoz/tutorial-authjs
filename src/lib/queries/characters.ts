import { auth } from "@/auth";
import { db } from "@/db";
import { characters } from "@/db/schema";
import { eq } from "drizzle-orm";

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
