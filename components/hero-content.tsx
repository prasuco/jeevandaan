import Link from "next/link";


import heroImage from "@/images/hero.png";
import impactImage from "@/images/impact.png";
import { Badge } from "./ui/badge";
import NewsLetter from "./newsletter";




// this component works as whole page
export default function MainContent() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-[url('/hero-bg.svg')] bg-cover bg-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none">
                  Donate Blood, Save Lives
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join JeevanDaan, the platform that connects blood donors with
                  those in need. Together, we can make a difference and save
                  countless lives.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-transform transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Events
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Become a Donor
                </Link>
              </div>
            </div>
            <img
              src={heroImage.src}
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="animate-bounce inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <Badge>Why Donate Blood?</Badge>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
                Make a Lasting Impact
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Blood donation is a simple yet powerful way to save lives. By
                donating, you can help replenish the blood supply and ensure
                that those in need receive the vital care they require.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src={impactImage.src}
              width="550"
              height="310"
              alt="Impact"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Immediate Impact</h3>
                    <p className="text-muted-foreground">
                      Your donation can be used to help patients in need within
                      just a few days.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Regular blood donations ensure a consistent supply for
                      hospitals and clinics.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Community Involvement</h3>
                    <p className="text-muted-foreground">
                      Be a part of a community of caring individuals who make a
                      difference.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl/tight">
              Become a Lifesaver
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join our community of dedicated blood donors and help save lives.
              Sign up today to get started.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-transform transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Become a Donor
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
