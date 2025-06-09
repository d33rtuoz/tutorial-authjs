"use server";

import { auth } from "@/auth";
import BottomNavigationLinks from "./bottom-navigation-links";

export default async function BottomNavigation() {
  const session = await auth();

  return (
    <nav className="fixed bottom-0 left-0 p-4 w-full">
      <BottomNavigationLinks username={session?.user?.name || ""} />
    </nav>
  );
}
