import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCharacter } from "@/lib/queries/characters";

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const species = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Goliath",
  "Halfling",
  "Human",
  "Orc",
  "Tiefling",
];

export default function CreateCharacterFromSkretchPage() {
  return (
    <form action={createCharacter} className="flex flex-col gap-4">
      <Label htmlFor="name">Character name</Label>
      <Input type="text" name="name" required />

      <Label htmlFor="class">Class</Label>
      <Select name="class">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Class" />
        </SelectTrigger>
        <SelectContent>
          {classes.map((item) => (
            <SelectItem key={item} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label htmlFor="species">Choose origin: Species</Label>
      <Select name="species">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Species" />
        </SelectTrigger>
        <SelectContent>
          {species.map((item) => (
            <SelectItem key={item} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit">Create Character</Button>
    </form>
  );
}
