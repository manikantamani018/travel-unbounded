import DestinationCard from "./DestinationCard";
export default function DestinationSection({ title, subtitle, destinations }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
          {subtitle}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}
