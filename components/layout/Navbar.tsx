import { NavItems } from "@/data/Navbar";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import AuthInfo from "../AuthInfo";
import { getUser } from "@/utils/supabase/server";

export default async function Navbar() {
  const user = await getUser();
  return (
    <nav className="sticky top-0 z-50 flex items-center py-4">
      <div className="absolute inset-0 -bottom-4 bg-gradient-to-b from-neutral-900 to-transparent"></div>

      <div className="relative flex flex-1">
        <Link href={"/"}>
          <Image width={114} height={36} alt="logo" src={"/healyou.svg"} />
        </Link>
      </div>

      {user && (
        <menu className="relative flex gap-x-2">
          {NavItems.map(({ href, name, icon }) => (
            <li key={href}>
              <Button
                className="font-inria text-base"
                variant={"outline"}
                asChild
              >
                <Link href={href}>
                  {icon}
                  {name}
                </Link>
              </Button>
            </li>
          ))}
        </menu>
      )}
      <div className="relative flex flex-1 justify-end">
        <AuthInfo />
      </div>
    </nav>
  );
}
