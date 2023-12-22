"use client";

import RequiredAsterisk from "@/components/RequiredAsterisk";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ChatRequestOptions, CreateMessage, Message } from "ai";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined,
  ) => Promise<string | null | undefined>;
  formSend: boolean;
};

export default function DiagnoseForm({ append, formSend }: Props) {
  const form = useForm<z.infer<typeof InjuryScreeningSchema>>({
    resolver: zodResolver(InjuryScreeningSchema),
    disabled: formSend,
    defaultValues: {
      symptomDescription: {
        painDescription: "Stechender Schmerz",
        painLocation: "Leiste",
        symptomOnset: "Seit 2 Wochen",
        painSeverity: 5,
      },
      natureOfInjury: {
        incidentDescription: "Fußballspiel",
        pastSimilarSymptoms: false,
        factorsAffectingSymptoms: "Pause machen hilft",
      },
      medicalHistory: {
        preExistingConditions: "Keine",
        currentMedications: "Keine",
        recentSurgeriesHospitalizations: "",
      },
      lifestyleFactors: {
        occupation: "Webentwickler",
        physicalActivity: "Fußball",
        lifestyleFactors: "",
      },
      recentChanges: {
        changesInActivityOrLifestyle: "Keine",
        newMedicationsTreatments: "Keine",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof InjuryScreeningSchema>) {
    await append({
      content: JSON.stringify(values),
      role: "user",
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Tabs className="flex  flex-col gap-2" defaultValue="symptoms">
          <TabsList className="h-full flex-wrap self-center">
            <TabsTrigger value="symptoms">1. Symptoms</TabsTrigger>
            <TabsTrigger value="nature">2. Nature</TabsTrigger>
            <TabsTrigger value="history">3. History</TabsTrigger>
            <TabsTrigger value="lifestyle">4. Lifestyle</TabsTrigger>
            <TabsTrigger value="changes">5. Changes</TabsTrigger>
          </TabsList>
          <TabsContent value="symptoms">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="symptomDescription.painDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Describe the Pain or Discomfort <RequiredAsterisk />
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="Aching, sharp, throbbing, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please describe the nature of your pain or discomfort.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptomDescription.painLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Location of Pain <RequiredAsterisk />
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="Lower back, shoulder, knee, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {" "}
                      Specify the area where you feel pain.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptomDescription.symptomOnset"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Onset of Symptoms <RequiredAsterisk />
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="2 days ago, this morning, last week, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {" "}
                      Indicate when you first noticed these symptoms.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptomDescription.painSeverity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Severity of Pain (1-10) <RequiredAsterisk />
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        min={1}
                        max={10}
                        type="number"
                        placeholder="5"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Rate your pain on a scale from 1 (least severe) to 10
                      (most severe).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
          <TabsContent value="nature">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="natureOfInjury.incidentDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cause of Pain or Injury</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="During exercise, accidental fall, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please describe the nature of your pain or discomfort.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="natureOfInjury.factorsAffectingSymptoms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Factors Worsening or Improving Symptoms
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Rest improves pain, walking worsens, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Mention anything that affects your symptoms.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="natureOfInjury.pastSimilarSymptoms"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-0.5">
                      <FormLabel>
                        History of Similar Symptoms <RequiredAsterisk />
                      </FormLabel>
                      <FormDescription>
                        Have you experienced similar pain or symptoms in the
                        past?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        required
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="medicalHistory.preExistingConditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pre-Existing Medical Conditions</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Diabetes, hypertension, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      List any known medical conditions you have.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="medicalHistory.currentMedications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Medications</FormLabel>
                    <FormControl>
                      <Input placeholder="Aspirin, insulin, etc." {...field} />
                    </FormControl>
                    <FormDescription>
                      Mention any medications you are currently taking.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="medicalHistory.recentSurgeriesHospitalizations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recent Surgeries or Hospitalizations</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Appendectomy in March, hospital visit last month, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide details of any recent surgeries or hospital stays.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
          <TabsContent value="lifestyle">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="lifestyleFactors.occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Software developer, teacher, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your profession or job role.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lifestyleFactors.physicalActivity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical Activity Level</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Regular exercise, sedentary lifestyle, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Indicate your usual level of physical activity.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lifestyleFactors.lifestyleFactors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Relevant Lifestyle Factors (e.g., smoking, alcohol)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Smoking, occasional alcohol, vegan diet, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Mention any lifestyle habits that might be relevant.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
          <TabsContent value="changes">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="recentChanges.changesInActivityOrLifestyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Recent Changes in Activity or Lifestyle
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Started a new workout regime, changed diet, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe any recent lifestyle or activity changes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="recentChanges.newMedicationsTreatments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Medications or Treatments</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="New allergy medication, physiotherapy, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      List any new medications or treatments you&apos;ve started
                      recently.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
        </Tabs>

        {!formSend && (
          <>
            <p className="text-sm">
              <RequiredAsterisk /> This field is required
            </p>
            <Button className="self-start" type="submit">
              Get diagnosis
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}

const InjuryScreeningSchema = z.object({
  symptomDescription: z.object({
    painDescription: z.string(),
    painLocation: z.string(),
    symptomOnset: z.string(),
    painSeverity: z.coerce.number().min(1).max(10),
  }),
  natureOfInjury: z.object({
    incidentDescription: z.string().optional(),
    pastSimilarSymptoms: z.boolean(),
    factorsAffectingSymptoms: z.string().optional(),
  }),
  medicalHistory: z.object({
    preExistingConditions: z.string().optional(),
    currentMedications: z.string().optional(),
    recentSurgeriesHospitalizations: z.string().optional(),
  }),
  lifestyleFactors: z.object({
    occupation: z.string().optional(),
    physicalActivity: z.string().optional(),
    lifestyleFactors: z.string().optional(),
  }),
  recentChanges: z.object({
    changesInActivityOrLifestyle: z.string().optional(),
    newMedicationsTreatments: z.string().optional(),
  }),
});
