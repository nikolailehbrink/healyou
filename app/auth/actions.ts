"use server";

import { createClient } from "@/utils/supabase/server";
import type { Provider } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signOut();
  console.error(error);
  redirect("/");
}

export const signInWithEmailAndPassword = async (formData: FormData) => {
  const email = formData.get("email-login") as string;
  const password = formData.get("password-login") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`/login?type=error&message=${error.message}`);
  }

  return redirect("/");
};

export const signUpWithEmailAndPassword = async (formData: FormData) => {
  const origin = headers().get("origin");
  const email = formData.get("email-signup") as string;
  const confirmEmail = formData.get("email-confirm-signup") as string;
  const password = formData.get("password-signup") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  if (email !== confirmEmail) {
    return redirect("/login?type=error&message=Emails not identical");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect(`/login?type=error&message=${error.message}`);
  }

  return redirect(
    "/login?type=success&message=Check email to continue sign in process",
  );
};

export const signInWithSocialProvider = async (
  provider: Provider,
  queryParams?: { [key: string]: string } | undefined,
) => {
  const origin = headers().get("origin");
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams,
    },
  });

  if (error) {
    return redirect(`/login?type=error&message=${error.message}`);
  }

  return redirect(data.url);
};
