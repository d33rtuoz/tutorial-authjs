"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInButton from "./sign-in-button";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Game Rules",
    href: "/game-rules",
  },
  {
    label: "Characters",
    href: "/characters",
  },
];

export default function BottomNavigationLinks({
  username,
}: {
  username: string;
}) {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-row justify-around">
      {links.map((link) => (
        <li
          key={link.href}
          className={clsx(
            isActivePath(link.href) && "underline underline-offset-4",
          )}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
      <li>
        {username ? (
          <Link
            href="profile"
            className={clsx(
              "/profile" === pathname && "underline underline-offset-4",
            )}
          >
            {username}
          </Link>
        ) : (
          <SignInButton />
        )}
      </li>
    </ul>
  );
}
