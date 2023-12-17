import { NavItems } from "@/data/Navbar";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center py-4 dark:bg-neutral-900">
      <div className="flex flex-1">
        <Image width={114} height={36} alt="logo" src={"/healyou.svg"} />
      </div>

      <menu className="flex gap-x-2">
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
      <div className="flex flex-1 justify-end">
        <UserCircle size={36} weight="duotone" />
      </div>
    </nav>
  );
}
