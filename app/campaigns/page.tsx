import { createClient } from "@/utils/supabase/server";
import CampaignCard from "./@components/CampaignCard";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function BloodCampaignList() {
  const supabase = createClient();
  const { data, error } = await supabase.from("campaigns").select("*");

  if (error) {
    return notFound();
  }

  return (
    <div className="bg-[#FFF1F1] min-h-screen">
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Latest Blood Campaigns</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </main>
    </div>
  );
}
