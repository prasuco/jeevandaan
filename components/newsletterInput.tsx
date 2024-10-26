"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

export default function NewsLetterInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();

    const emailExists = await supabase
      .from("email_subs")
      .select("*")
      .eq("email", values.email);

    if (emailExists.error) {
      toast.error("something went wrong");
      return;
    }

    if (emailExists.data?.length > 0) {
      toast.error("Email already exists");
      return;
    }

    const { data, error } = await supabase
      .from("email_subs")
      .insert({ email: values.email })
      .select("*");

    if (error) {
      toast.error("something went wrong");
    } else {
      const sendEmail = await fetch(`/api/send-email?email=${values.email}`);

      toast.success("Subscribed successfully");

      form.control["_reset"]({ email: "" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-lg flex-1">
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          Subscribe
          {isSubmitting && <Loader className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
