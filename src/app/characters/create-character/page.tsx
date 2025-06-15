import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

export default function CreateCharacterPage() {
  return (
    <div>
      <H2>Create your own character from skretch.</H2>
      <P>
        To create a level 1 character with recommended starting options, choose
        a class and species below. You can provide a character name or leave it
        blank to randomize one.
      </P>

      <Link href="/characters/create-character/from-skretch">
        <Button className="w-full mb-4">Create</Button>
      </Link>
    </div>
  );
}
