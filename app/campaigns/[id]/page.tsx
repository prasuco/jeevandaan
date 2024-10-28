import { createClient } from "@/utils/supabase/server";
import BloodCampaignDetails from "../@components/CampaignPage";
import { notFound } from "next/navigation";

interface ICampaignProps {
  params: {
    id: string;
  };
}

export const runtime = "edge";

const CampaignDetails = async ({ params }: ICampaignProps) => {
  const supabase = createClient();

  let { data: campaigns_donators } = await supabase
    .from("campaigns_donators")
    .select(
      `*,
            donator (*)
        `
    )
    .eq("campaign", params.id)
    .filter("campaign", "eq", params.id);

  console.log(campaigns_donators);

  const extractedDonators = campaigns_donators?.map(
    (donator) => donator.donator
  );

  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data || error) {
    return notFound();
  }

  return (
    <div className="bg-background">
      <BloodCampaignDetails
        campaign={data}
        donators={extractedDonators as any}
      />
    </div>
  );
};

export default CampaignDetails;
