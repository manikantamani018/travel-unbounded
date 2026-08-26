export const metadata = {
  title: "About | Travel Unbounded",
  description:
    "Learn about Travel Unbounded and our offices in Bengaluru, Kochi and Nairobi.",
};
export default function About() {
  return (
    <main className="pt-24">
      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Our Story
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            India's Most Trusted Experiential Travel Experts
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Travel Unbounded was born from a simple belief — that the best
            journeys aren't sold from a catalogue. They're built around the
            people taking them.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Headquartered in Bangalore with offices in Kerala and Nairobi, we
            design trips that blend comfort, culture, and raw nature. Every
            destination, resort, and activity we recommend has been personally
            experienced by our team.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            From spotting the Big Five at dawn in the Masai Mara to cruising Ha
            Long Bay at sunset — we go where real stories are written, and we
            bring you along.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Our Offices</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Bengaluru — Headquarters",
              "541, 7th Main Rd, HAL 2nd Stage",
              "Indiranagar, Bengaluru – 560008, India",
            ],
            [
              "Kochi — Kerala Office",
              "LR Towers, S Janatha Road",
              "Palavivatton, Kochi – 682025, India",
            ],
            [
              "Nairobi — Kenya Office",
              "Westpark Towers, Muthithi Road",
              "Nairobi, P.O. Box 6950, Postal Code 00100, Kenya",
            ],
          ].map((o) => (
            <div key={o[0]} className="rounded-2xl border p-7 shadow-sm">
              <h3 className="text-xl font-bold">{o[0]}</h3>
              <p className="mt-4 text-gray-600">
                {o[1]}
                <br />
                {o[2]}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-emerald-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Personally-vetted experiences",
              "Local guides",
              "Custom itineraries",
              "24x7 support",
            ].map((x) => (
              <div key={x} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="font-bold">{x}</h3>
                <p className="mt-3 text-gray-600">
                  Thoughtful travel planning with experienced people behind
                  every recommendation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
