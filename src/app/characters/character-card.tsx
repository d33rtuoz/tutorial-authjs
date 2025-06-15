import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CharacterCard({
  character,
}: {
  character: {
    id: number;
    name: string;
    level: number;
    species: string;
    class: string;
  };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription className="flex flex-auto gap-2">
          <span>Level {character.level}</span>
          <span>{character.class}</span>
          <span>{character.species}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
