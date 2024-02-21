/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kjPCxxMno6B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Destinations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Itinerary
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Recommendations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Cost
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center px-4 text-center md:px-6 space-y-4 lg:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Plan Your Japan Trip
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the beauty of Japan. Select your destinations, create
                your itinerary, and get ready for an amazing journey.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose Your Destinations
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Select the cities you want to visit. We'll provide information
                about each destination and help you plan your activities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center space-x-4">
                  <Checkbox id="tokyo" />
                  <label className="text-lg font-medium" htmlFor="tokyo">
                    Tokyo
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="kyoto" />
                  <label className="text-lg font-medium" htmlFor="kyoto">
                    Kyoto
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="osaka" />
                  <label className="text-lg font-medium" htmlFor="osaka">
                    Osaka
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="hiroshima" />
                  <label className="text-lg font-medium" htmlFor="hiroshima">
                    Hiroshima
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create Your Itinerary
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the dates of your visit and the attractions you want to
                see. We'll suggest the best order and duration for each
                activity.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form>
                <div className="flex items-center space-x-2">
                  <label className="w-20 text-sm" htmlFor="dates">
                    Select Dates
                  </label>
                  <Input
                    className="flex-1"
                    id="dates"
                    placeholder="Select Dates"
                    type="text"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shibuya" />
                    <label className="text-base font-medium" htmlFor="shibuya">
                      Shibuya Crossing
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="asakusa" />
                    <label className="text-base font-medium" htmlFor="asakusa">
                      Asakusa Senso-ji Temple
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ueno" />
                    <label className="text-base font-medium" htmlFor="ueno">
                      Ueno Park & Zoo
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="akihabara" />
                    <label
                      className="text-base font-medium"
                      htmlFor="akihabara"
                    >
                      Akihabara Electric Town
                    </label>
                  </div>
                </div>
                <Button className="w-full">Save Itinerary</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Local Recommendations
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get insider tips from Japanese college students on hidden gems,
                local experiences, and off-the-beaten-path attractions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <img
                    alt="User"
                    className="rounded-full overflow-hidden aspect-square object-cover"
                    height="64"
                    src="/placeholder.svg"
                    width="64"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold">Yuki Tanaka</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Hi! If you're visiting Kyoto, I highly recommend taking a
                      stroll through the beautiful Arashiyama Bamboo Grove. It's
                      a magical experience, especially early in the morning when
                      the sunlight filters through the tall bamboo. Don't forget
                      to explore the charming Sagano...
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    alt="User"
                    className="rounded-full overflow-hidden aspect-square object-cover"
                    height="64"
                    src="/placeholder.svg"
                    width="64"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold">Sora Nakamura</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Konnichiwa! Are you a fan of traditional Japanese culture?
                      If so, you'll love exploring the historic streets of
                      Takayama. This charming town is known for its
                      well-preserved Edo-period architecture and...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Optimize Your Costs
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Save money on your trip with our cost-saving tips. Find
                budget-friendly accommodations, affordable dining options, and
                money-saving transportation alternatives.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Japan Trip Planner. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
