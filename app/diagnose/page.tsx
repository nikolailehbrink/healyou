import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function DiagnosePage() {
  return (
    <>
      <div className="h-full flex-grow">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <div className="ml-12 flex self-end rounded-2xl bg-background px-5 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eum libero earum eos optio maxime quo totam recusandae
            iste perspiciatis, odio labore ab sit nihil suscipit vel repellendus
            nesciunt perferendis?
          </div>
          <div className="mr-12 flex items-start gap-2 rounded-2xl bg-primary px-5 py-3 text-background">
            <div className="flex shrink-0">
              <Image
                className="w-6"
                width={256}
                height={256}
                alt="Heal You Icon"
                src={"/symbol.svg"}
              />
            </div>
            {/* TODO: Create form */}
            Symptom Description: Can you describe the pain or discomfort
            you&apos;re feeling? Where exactly is the pain located? When did you
            first notice these symptoms? How severe is the pain on a scale of 1
            to 10? Nature of Injury or Pain: Was there a specific incident or
            activity that led to this pain or injury? Have you experienced
            similar symptoms in the past? Does anything in particular seem to
            worsen or improve the symptoms? Medical History: Do you have any
            pre-existing medical conditions? Are you currently taking any
            medication? Have you had any recent surgeries or hospitalizations?
            Lifestyle Factors: What is your occupation, and does it involve
            physical activity? Do you engage in regular exercise or sports? Are
            there any lifestyle factors (e.g., smoking, alcohol consumption)
            that might be relevant? Recent Changes: Have there been any recent
            changes in your physical activity or lifestyle? Have you started any
            new medications or treatments recently? Symptom Progression: Have
            the symptoms been getting worse, better, or staying the same? Have
            any new symptoms appeared since the onset of the initial ones?
          </div>
        </div>
      </div>
      <div className="sticky bottom-4 mb-4 flex justify-center">
        <div className="absolute inset-0 -bottom-4 -top-12 bg-gradient-to-b from-transparent to-neutral-900"></div>
        <div className="relative flex max-w-2xl flex-grow items-center gap-x-2 self-center">
          <Textarea rows={1} className="rounded-br- rounded-3xl px-4" />
          <Button
            className="flex-shrink-0 text-neutral-950"
            variant="default"
            size="icon"
          >
            <PaperPlaneTilt size={24} weight="duotone" />
          </Button>
        </div>
      </div>
    </>
  );
}
