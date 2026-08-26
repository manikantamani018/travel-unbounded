const reasons = [
  [
    "01",
    "Personally-Vetted Experiences",
    "Every destination, resort, and experience is carefully selected and personally experienced by our team.",
  ],
  [
    "02",
    "Local Destination Experts",
    "Our local partners bring authentic knowledge and help you experience each destination beyond the tourist trail.",
  ],
  [
    "03",
    "Custom Itineraries",
    "Your journey is designed around your interests, travel style, budget, and preferred pace.",
  ],
  [
    "04",
    "24x7 Support",
    "From the moment you start planning until you return home, our team is available whenever you need us.",
  ],
];
export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Why Travel Unbounded
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Travel designed around you.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r[0]} className="border-t border-white/20 pt-6">
              <span className="text-sm font-bold text-emerald-400">{r[0]}</span>
              <h3 className="mt-4 text-xl font-bold">{r[1]}</h3>
              <p className="mt-3 leading-7 text-gray-400">{r[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
