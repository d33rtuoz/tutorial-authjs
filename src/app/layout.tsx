import BottomNavigation from "@/components/bottom-navigation";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D&D",
  description: "Лист персонажа",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        <main className="p-4 pb-16">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
