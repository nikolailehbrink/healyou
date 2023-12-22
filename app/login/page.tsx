import { getUser } from "@/utils/supabase/server";
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
import {
  signInWithEmailAndPassword,
  signInWithSocialProvider,
  signUpWithEmailAndPassword,
} from "./actions";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string; type: string };
}) {
  if (await getUser()) {
    return redirect("/");
  }

  const signInWithGoogle = signInWithSocialProvider.bind(null, "google", {
    access_type: "offline",
    prompt: "consent",
  });
  const signInWithLinkedIn = signInWithSocialProvider.bind(
    null,
    "linkedin_oidc",
  );
  const signInWithGitHub = signInWithSocialProvider.bind(null, "github");

  return (
    <div className="flex flex-grow flex-col justify-center gap-4 self-center duration-500 animate-in fade-in">
      <form className="flex items-stretch gap-2">
        <SocialLoginButton
          formAction={signInWithGoogle}
          icon={<GoogleLogo size={40} weight="duotone" />}
        />
        <SocialLoginButton
          formAction={signInWithLinkedIn}
          icon={<LinkedinLogo size={40} weight="duotone" />}
        />
        <SocialLoginButton
          formAction={signInWithGitHub}
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
