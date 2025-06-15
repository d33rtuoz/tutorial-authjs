import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { H1 } from "@/components/ui/typography";
import { getCharacters } from "@/lib/queries/characters";
import Form from "next/form";
import Link from "next/link";
import CharacterCard from "./character-card";

const devData = [
  {
    id: "1",
    name: "Vathek",
    level: "1",
    species: "Goliath",
    class: "Barbarian",
    picture: "/barbarian.png",
  },
  {
    id: "2",
    name: "Aetmos",
    level: "1",
    species: "Tiefling",
    class: "Bard",
    picture: "/bard.png",
  },
  {
    id: "3",
    name: "Aura",
    level: "1",
    species: "Gnome",
    class: "Cleric",
    picture: "/cleric.png",
  },
  {
    id: "4",
    name: "Rassura",
    level: "1",
    species: "Elf",
    class: "Druid",
    picture: "/druid.png",
  },
];

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
