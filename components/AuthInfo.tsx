import { createClient } from "@/utils/supabase/server";
import {
  FingerprintSimple,
  SignOut,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import { cookies } from "next/headers";
import { Button } from "./ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default async function AuthInfo() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signOut();
    console.log(error);
    redirect("/");
  }

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
        Sign in
      </Link>
    </Button>
  );
}
