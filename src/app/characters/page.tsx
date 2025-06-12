import { Button } from "@/components/ui/button";
import { getCharacters } from "@/lib/queries/characters";
import Link from "next/link";

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <>
      <p>character's</p>
      {/* TODO: show when user signed in */}
      <Button>
        <Link href="/characters/create-character">Create Character</Link>
      </Button>
      <ul>
        {characters &&
          characters.map((character) => (
            <p key={character.id}>{character.name + ": " + character.class}</p>
          ))}
      </ul>
    </>
  );
}

// TODO: Create multi-step form for creating character.
// TODO: Step 1: Choose a class.
