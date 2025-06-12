import BottomNavigation from "@/components/bottom-navigation";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="ru" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="p-4 pb-16">{children}</main>
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
