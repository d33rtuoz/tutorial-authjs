import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { H1 } from "@/components/ui/typography";
import { getCharacters } from "@/lib/queries/characters";
import Form from "next/form";
import Link from "next/link";
import CharacterCard from "./character-card";

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <>
      <H1>My Characters</H1>

      {/* TODO: Implement search + search by level, class, species or campain */}
      <Form action="/characters" className="flex flex-col gap-4 pb-4">
        <Label htmlFor="character-name">Search by name:</Label>
        <Input type="search" name="character-name" id="character-name" />
      </Form>

      <ul className="flex flex-col gap-4 mb-14">
        {characters &&
          characters.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
      </ul>

      <Link href="/characters/create-character" className="block">
        <Button className="fixed bottom-16 left-4 right-4 w-auto">
          Create Character
        </Button>
      </Link>
    </>
  );
}

// TODO: Create multi-step form for creating character.
// TODO: Step 1: Choose a class.
