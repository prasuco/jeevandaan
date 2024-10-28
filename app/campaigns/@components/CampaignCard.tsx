import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database } from "@/supabase.types";
import { ChevronRight, Clock, MapPin, MoveRight } from "lucide-react";

interface ICampaignCardProps {
  campaign: Database["public"]["Tables"]["campaigns"]["Row"];
}
const CampaignCard = ({ campaign }: ICampaignCardProps) => {
  return (
    <Card key={campaign.id} className="bg-white relative">
      <CardHeader>
        <CardTitle className="text-xl text-red-600">{campaign.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{campaign.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="mr-2 h-4 w-4 " />
          <a href={""} className="hover:underline">
            {campaign.location}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="mr-2 h-4 w-4 text-primary" />
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(campaign.time!))}
        </div>
        <a
          href="#"
          className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-2 flex items-center rounded-full text-sm shadow-md transition"
        >
          <MoveRight className=" m-1  h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
