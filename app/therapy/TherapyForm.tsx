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
import { zodResolver } from "@hookform/resolvers/zod";
import type { ChatRequestOptions, CreateMessage, Message } from "ai";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  condition: string | string[];
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined,
  ) => Promise<string | null | undefined>;
  formSend: boolean;
};

const formSchema = z.object({
  healthCondition: z.string().min(1).max(100),
});

export default function TherapyForm({ condition, append, formSend }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    disabled: formSend,
    resolver: zodResolver(formSchema),
    defaultValues: {
      healthCondition: Array.isArray(condition)
        ? condition.join(" ")
        : condition,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await append({ content: values.healthCondition, role: "user" });
  }
  return (
    <Form {...form}>
      <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="healthCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Health condition <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Input required placeholder="groin stain" {...field} />
              </FormControl>
              <FormDescription>
                What is your diagnosed medical condition?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {!formSend && (
          <Button type="submit">Get therapeutic measurements</Button>
        )}
      </form>
    </Form>
  );
}
