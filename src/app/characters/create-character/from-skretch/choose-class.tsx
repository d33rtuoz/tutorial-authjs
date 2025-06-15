"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

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

export default function ChooseClass() {
  const [filter, setFilter] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <input
        type="search"
        name="classFilter"
        id="classFilter"
        defaultValue={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {/* TODO: Create database table for classes, get them and render. */}
      {classes
        .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => (
          <Button key={item}>{item}</Button>
        ))}
    </div>
  );
}
