import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealYou - Revolutionizing Self-Care with the Help of AI",
  description:
    "HealYou is a revolutionary new app that helps you take care of yourself with the help of AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          "scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-primary bg-background text-foreground",
        )}
      >
        <main className="mx-auto my-4 min-h-screen max-w-screen-2xl rounded-[3rem] pb-8 dark:bg-neutral-900">
          <div className="container min-h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
