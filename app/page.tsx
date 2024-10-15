import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
