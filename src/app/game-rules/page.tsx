import Link from "next/link";

const links = [
  {
    label: "Classes",
    href: "/game-rules/classes",
  },
  {
    label: "Backgrounds",
    href: "/game-rules/backgrounds",
  },
  {
    label: "Species",
    href: "/game-rules/species",
  },
  {
    label: "Feats",
    href: "/game-rules/feats",
  },
  {
    label: "Spells",
    href: "/game-rules/spells",
  },
  {
    label: "Equipment",
    href: "/game-rules/equipment",
  },
  {
    label: "Magic items",
    href: "/game-rules/magic-items",
  },
  {
    label: "Monsters",
    href: "/game-rules/monsters",
  },
];

export default function Listings() {
  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
