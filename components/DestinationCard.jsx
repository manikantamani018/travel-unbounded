import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">
            {destination.country}
          </p>
          <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-5 min-h-[72px] text-gray-600">
          {destination.description}
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-emerald-700">
              ₹{destination.price.toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href={`/contact?destination=${encodeURIComponent(destination.name)}`}
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
