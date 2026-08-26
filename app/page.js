import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { destinations } from "@/data/destinations";

export default function Home() {
  const india = destinations.filter((d) => d.category === "india");
  const international = destinations.filter(
    (d) => d.category === "international",
  );
  return (
    <main>
      <Hero />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Travel differently
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Journeys built around the people taking them.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Travel Unbounded was born from a simple belief — that the best
            journeys aren't sold from a catalogue. They're built around the
            people taking them.
          </p>
        </div>
      </section>
      <div id="destinations">
        <div className="bg-gray-50">
          <DestinationSection
            subtitle="Explore India"
            title="Discover Incredible India"
            destinations={india}
          />
        </div>
        <DestinationSection
          subtitle="Go Beyond Borders"
          title="International Adventures"
          destinations={international}
        />
      </div>
      <WhyChooseUs />
      <section className="bg-emerald-700 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-5xl">
          Your next story starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-50">
          Tell us where you want to go, and we'll help you turn the idea into an
          unforgettable journey.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-emerald-700 hover:bg-gray-100"
        >
          Plan Your Journey
        </a>
      </section>
    </main>
  );
}
