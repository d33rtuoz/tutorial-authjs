import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { castingTimes, spellLevels, spellSchools } from "@/db/schema";

export default function CreateSpellPage() {
  return (
    <form className="flex gap-4 flex-col">
      <Input type="text" placeholder="Spell name" />
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Spell level" />
        </SelectTrigger>
        <SelectContent>
          {spellLevels.map((spellLevel) => (
            <SelectItem key={spellLevel} value={spellLevel}>
              {spellLevel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Spell school" />
        </SelectTrigger>
        <SelectContent>
          {spellSchools.map((spellSchool) => (
            <SelectItem key={spellSchool} value={spellSchool}>
              {spellSchool}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Casting time" />
        </SelectTrigger>
        <SelectContent>
          {castingTimes.map((castingTime) => (
            <SelectItem key={castingTime} value={castingTime}>
              {castingTime}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Checkbox />
    </form>
  );
}
