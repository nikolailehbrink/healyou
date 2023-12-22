import { getUser } from "@/utils/supabase/server";
import {
  FingerprintSimple,
  SignOut,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "@/app/auth/actions";

export default async function AuthInfo() {
  const user = await getUser();

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserCircle size={36} weight="duotone" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action={signOut} className="w-full">
            <button className="flex w-full items-center justify-between gap-1">
              Sign out
              <SignOut size={20} weight="duotone" />
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button asChild>
      <Link href="/login">
        <FingerprintSimple size={24} weight="duotone" />
        Login
      </Link>
    </Button>
  );
}
