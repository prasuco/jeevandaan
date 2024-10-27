import { Card, CardHeader,CardTitle, CardContent,CardDescription } from "@/components/ui/card";
import { Database } from "@/supabase.types";
import { Clock, MapPin } from "lucide-react";

interface ICampaignCardProps{

    campaign : Database["public"]["Tables"]["campaigns"]["Row"];
    
}
const CampaignCard = ({campaign}: ICampaignCardProps) => {
  return (<Card key={campaign.id} className="bg-white">
    <CardHeader>
      <CardTitle className="text-xl text-red-600">
        {campaign.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{campaign.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <MapPin className="mr-2 h-4 w-4 " />
        <a href={''} className="hover:underline">
          {campaign.location}
        </a>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="mr-2 h-4 w-4 text-primary" />
        {campaign.time}
      </div>
    </CardContent>
  </Card>)
};

export default CampaignCard;