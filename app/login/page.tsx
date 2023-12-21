import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FingerprintSimple,
  GithubLogo,
  GoogleLogo,
  LinkedinLogo,
  Signature,
} from "@phosphor-icons/react/dist/ssr";
import SocialLoginButton from "@/components/SocialLoginButton";
import ToastNotification from "@/components/ToastNotification";
import type { Provider } from "@supabase/supabase-js";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string; type: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  const signInWithEmailAndPassword = async (formData: FormData) => {
    "use server";

    const email = formData.get("email-login") as string;
    const password = formData.get("password-login") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    console.log(email, password);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return redirect(`/login?type=error&message=${error.message}`);
    }

    return redirect("/");
  };

  const signUpWithEmailAndPassword = async (formData: FormData) => {
    "use server";

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

    console.log(error?.message);

    if (error) {
      return redirect(`/login?type=error&message=${error.message}`);
    }

    return redirect(
      "/login?type=success&message=Check email to continue sign in process",
    );
  };

  const signInWithSocialProvider = async (
    provider: Provider,
    queryParams?: { [key: string]: string } | undefined,
  ) => {
    "use server";

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

    console.log(data);

    if (error) {
      return redirect(`/login?type=error&message=${error.message}`);
    }

    return redirect(data.url);
  };

  return (
    <div className="flex flex-grow flex-col justify-center gap-4 self-center">
      <form className="flex items-stretch gap-2 text-primary">
        <SocialLoginButton
          formAction={async () => {
            "use server";
            return signInWithSocialProvider("google", {
              access_type: "offline",
              prompt: "consent",
            });
          }}
          icon={<GoogleLogo size={40} weight="duotone" />}
        />
        <SocialLoginButton
          formAction={async () => {
            "use server";
            return signInWithSocialProvider("linkedin_oidc");
          }}
          icon={<LinkedinLogo size={40} weight="duotone" />}
        />
        <SocialLoginButton
          formAction={async () => {
            "use server";
            return signInWithSocialProvider("github");
          }}
          icon={<GithubLogo size={40} weight="duotone" />}
        />
      </form>
      <div className="flex items-center gap-2">
        <hr className="flex-grow border-muted-foreground/50" />
        <span className="text-sm text-muted-foreground">
          Or with email and password
        </span>
        <hr className="flex-grow border-muted-foreground/50" />
      </div>

      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form action={signInWithEmailAndPassword}>
            <Card>
              <CardHeader>
                <CardDescription>
                  Login with your email and password. <br /> Thank you for using
                  the service!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    name="email-login"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password-login">Password</Label>
                  <Input
                    type="password"
                    name="password-login"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  {" "}
                  <FingerprintSimple size={24} weight="duotone" />
                  Login{" "}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <form action={signUpWithEmailAndPassword}>
            <Card>
              <CardHeader>
                <CardDescription>
                  Sign up with your email and password. <br /> Thank you for
                  using the service!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email-signup">Email</Label>
                  <Input
                    name="email-signup"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email-confirm-signup">Confirm email</Label>
                  <Input
                    name="email-confirm-signup"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password-signup">Password</Label>
                  <Input
                    type="password"
                    name="password-signup"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  {" "}
                  <Signature size={24} weight="duotone" /> Sign Up
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
      {searchParams?.message && (
        <ToastNotification
          message={searchParams.message}
          type={searchParams.type}
        />
      )}
    </div>
  );
}
