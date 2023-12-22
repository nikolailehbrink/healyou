import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FingerprintSimple, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { funFacts } from "@/data/FunFacts";

export default async function NotFound() {
  return (
    <div className="mx-auto flex max-w-prose grow flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-inria text-4xl font-bold">
        Unfortunately, there is nothing here
      </h2>
      <p className="text-muted-foreground">
        {funFacts[Math.floor(Math.random() * funFacts.length)]}
      </p>
      <div className="space-x-2">
        <Button asChild>
          <Link href={"/"}>
            <HouseLine size={24} weight="duotone" />
            Go home
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/login"}>
            <FingerprintSimple size={24} weight="duotone" />
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
}
