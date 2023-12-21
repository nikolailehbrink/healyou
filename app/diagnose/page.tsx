import Unauthorized from "@/components/Unauthorized";
import DiagnoseChat from "./DiagnoseChat";
import { getUser } from "@/utils/supabase/server";

export default async function DiagnosePage() {
  if (!(await getUser())) {
    return <Unauthorized />;
  }
  return <DiagnoseChat />;
}
