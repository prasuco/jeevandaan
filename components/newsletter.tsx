"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import { useState } from "react";
import { validEmail } from "@/lib/utils";
import { Loader } from "lucide-react";

const NewsLetter = () => {
  const supabase = createClient();

  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!validEmail(email!)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("email_subs")
      .insert({ email: email! })
      .select("*");

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Subscribed successfully");
    }
    // settign email null and loading to false
    setLoading(false);
    setEmail(null);
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl/tight">
            Upcoming Blood Donation Events
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out our upcoming blood donation events and sign up to make a
            difference.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input
              value={email!}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter Email"
              className="max-w-lg flex-1"
            />
            <Button
              disabled={loading}
              onClick={async (e) => {
                e.preventDefault();
                if (!email) return;

                await handleSubmit();
              }}
              type="submit"
            >
              Subscribe
              {loading && <Loader className="animate-spin" />}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By signing up, you'll receive updates on new events and campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
