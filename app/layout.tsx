import type { Metadata } from "next";
import { Inter, Inria_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-sans",
});

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
          inter.variable,
          inriaSans.variable,
          "bg-background font-sans text-foreground scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-primary",
        )}
      >
        <main className="mx-auto my-4 min-h-screen max-w-screen-2xl rounded-[3rem] pb-8 dark:bg-neutral-900">
          <div className="container min-h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
