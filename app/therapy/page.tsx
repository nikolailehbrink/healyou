import Unauthorized from "@/components/Unauthorized";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import TherapyChat from "./TherapyChat";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function TherapyPage({ searchParams }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Unauthorized />;
  }
  return <TherapyChat searchParams={searchParams} />;
}
