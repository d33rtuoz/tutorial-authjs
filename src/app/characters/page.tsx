import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { H1, P } from "@/components/ui/typography";
import { getCharacters } from "@/lib/queries/characters";
import Form from "next/form";
import Link from "next/link";

const devData = [
  {
    id: "1",
    name: "Vathek",
    level: 2,
    species: "Tiefling",
    class: "Rogue",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7L1YJ4M2ClFEmRe2W_NYfo5WSHAxImtW2vw&s",
  },
  {
    id: "2",
    name: "Vi",
    level: 10,
    species: "Gnome",
    class: "Artificier",
    picture:
      "https://i0.wp.com/dungeonsanddragonsfan.com/wp-content/uploads/2024/09/new-gnome-dnd-2024-17.png?resize=800%2C450&ssl=1",
  },
  {
    id: "3",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "4",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "5",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "6",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "7",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "8",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
  },
  {
    id: "9",
    name: "Aura",
    level: 2,
    species: "Tiefling",
    class: "Ranger",
    picture: "https://i.redd.it/qlvdvg0af2671.jpg",
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

      {/* <ul>
        {characters &&
          characters.map((character) => (
            <p key={character.id}>{character.name + ": " + character.class}</p>
          ))}
      </ul> */}

      <ul className="flex flex-col gap-4 mb-14">
        {devData &&
          devData.map((character) => (
            <li>
              <Card>
                <CardHeader className="">
                  <CardTitle>{character.name}</CardTitle>
                  <CardDescription className="flex flex-auto gap-2">
                    <span>Level {character.level}</span>
                    <span>{character.class}</span>
                    <span>{character.species}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
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
