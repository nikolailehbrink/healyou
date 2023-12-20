import Unauthorized from "@/components/Unauthorized";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import DiagnoseChat from "./DiagnoseChat";

export default async function DiagnosePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Unauthorized />;
  }
  return <DiagnoseChat />;
}
