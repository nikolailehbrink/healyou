import { Button } from "@/components/ui/button";
import { getUser } from "@/utils/supabase/server";
import { CheckCircle, Stethoscope } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  if (await getUser()) {
    redirect("diagnose");
  }

  return (
    <>
      <div className="mx-auto mt-12 flex-col space-y-12">
        <div className="relative flex max-w-4xl flex-col items-center justify-center gap-10">
          <div className="absolute -inset-8 -bottom-20 top-16 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl"></div>
          <h1 className="relative bg-gradient-to-b from-foreground to-border bg-clip-text text-center font-inria text-7xl font-bold leading-[1.15] text-transparent duration-1000 animate-in fade-in">
            Revolutionizing Self-Care with the Help of AI
          </h1>
          <p className="max-w-2xl text-balance text-center text-muted-foreground duration-1000 animate-in slide-in-from-bottom-4">
            HealYou is your gateway to advanced self-care, powered by AI.
            Navigate your health with two key features: our &apos;Diagnosis
            Page&apos; for AI-driven self-assessment and our &apos;Therapy
            Page&apos; for personalized therapeutic guidance.
          </p>
          <Button
            asChild
            className="relative border-2 border-primary-foreground duration-1000 animate-in fade-in"
          >
            <Link href="/login">
              <Stethoscope size={24} weight="duotone" />
              Try it!
            </Link>
          </Button>
          <Image
            className="relative mt-2 h-96 duration-1000 animate-in slide-in-from-bottom-8"
            src={"/header-image.svg"}
            alt="Header"
            width={318.63}
            height={752.69}
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6">
        <div className="group relative flex space-y-2 self-start overflow-hidden rounded-2xl bg-muted p-12 transition-all duration-1000 animate-in slide-in-from-top-10">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-inria text-2xl font-bold">Diagnose</h2>
              <p className="max-w-[250px] text-pretty text-sm text-muted-foreground">
                Simply answer a series of targeted questions, and our advanced
                algorithms will provide you with a preliminary analysis of your
                health condition. Begin your journey to better health with
                confidence and clarity.{" "}
              </p>
            </div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Accurate AI Health Assessment
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Efficient Symptom Evaluation
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Personalized Health Insights
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Confidential and Secure
              </li>
            </ul>
          </div>
          <div className="absolute inset-0 flex items-end justify-end">
            <Image
              className="aspect-square w-80 rounded-ss-2xl object-cover object-left transition-transform duration-500 group-hover:scale-110"
              src={"/diagnose.png"}
              alt="Header"
              width={542}
              height={494}
            />
          </div>
        </div>
        <div className="group relative mt-20 flex space-y-2 overflow-hidden rounded-2xl bg-muted p-12 transition-all duration-1000 animate-in slide-in-from-top-20">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-inria text-2xl font-bold">Therapy</h2>
              <p className="max-w-[250px] text-pretty text-sm text-muted-foreground">
                Explore tailored healing paths on our Therapy Page. Receive
                personalized therapy plans, practical recovery guidance, and
                comprehensive wellness strategies, all supported by
                easy-to-follow exercise routines.
              </p>
            </div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Customized Therapeutic Plans
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Step-by-Step Recovery Guidance
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Holistic Wellness Approaches
              </li>
              <li className="flex items-center gap-1">
                <CheckCircle size={24} weight="duotone" />
                Easy-to-Follow Exercise Routines
              </li>
            </ul>
          </div>
          <div className="absolute inset-0 flex items-end justify-end">
            <Image
              className="aspect-square w-80 rounded-ss-2xl object-cover object-left transition-transform duration-500 group-hover:scale-110"
              src={"/therapy.png"}
              alt="Header"
              width={507}
              height={483}
            />
          </div>
        </div>
      </div>
    </>
  );
}
