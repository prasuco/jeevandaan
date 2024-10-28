"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database } from "@/supabase.types";

import impact from "@/images/impact.png";
interface ICampaignProps {
  campaign: Database["public"]["Tables"]["campaigns"]["Row"];
  donators: Database["public"]["Tables"]["donators"]["Row"][];
}
export default function BloodCampaignDetails({
  campaign,
  donators,
}: ICampaignProps) {
  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-red-500 ">{campaign.title}</h1>
          <p className="text-muted-foreground">{campaign.description}</p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: campaign.description_html as string,
            }}
          ></div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
          <Image
            src={impact}
            alt="Blood donation event"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-2xl font-semibold">Registered Donors</h2>
        <div className="flex -space-x-4">
          {donators.map((donor) => (
            <Avatar key={donor.id} className="border-2 border-background">
              <AvatarImage
                src={`https://jpgfetlaolflfbczntck.supabase.co/storage/v1/object/public/${donor.profile}`}
              />
              <AvatarFallback>{donor.name}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">Date & Time</dt>
                <dd>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }).format(new Date(campaign.time!))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Location</dt>
                <dd>{campaign.location}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video overflow-hidden rounded-md">
              <iframe
                src={
                  campaign.location_url
                    ? campaign.location_url
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.226449910908!2d87.2784746655049!3d26.44842859394727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744969ab93ff%3A0xcdfeaa99bb5e0ce7!2sHimalaya%20Darshan%20College!5e0!3m2!1sen!2snp!4v1730056138078!5m2!1sen!2snp"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
