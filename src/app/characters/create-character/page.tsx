import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ChooseClass from "./choose-class";

export default function CreateCharacterPage() {
  return (
    <div>
      {/* TODO: Dynamic breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/characters">Characters</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/characters/create-character">Create Character</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1>Quich Build</h1>
      <p>
        To create a level 1 character with recommended starting options, choose
        a class and species below. You can provide a character name or leave it
        blank to randomize one.
      </p>
      <form action="create-character">
        <ChooseClass />
      </form>
    </div>
  );
}
