import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=85"
        alt="Travel destination"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Travel Unbounded
          </p>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            India's Most Trusted Experiential Travel Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            We don't just sell holidays. We create meaningful journeys built
            around your interests, your pace, and the stories you want to tell.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white hover:bg-emerald-700"
            >
              Plan Your Trip
            </Link>
            <Link
              href="#destinations"
              className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-gray-900"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
