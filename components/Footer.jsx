export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-white">Travel Unbounded</h2>
          <p className="mt-4 leading-7">
            Experiential journeys built around people, places, culture, and
            unforgettable stories.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Our Offices</h3>
          <p className="mt-4 text-sm leading-7">
            Bengaluru — Headquarters
            <br />
            541, 7th Main Rd, HAL 2nd Stage
            <br />
            Indiranagar, Bengaluru – 560008
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">International Offices</h3>
          <p className="mt-4 text-sm leading-7">
            Kochi — Kerala Office
            <br />
            LR Towers, S Janatha Road
            <br />
            Palavivatton, Kochi – 682025
            <br />
            <br />
            Nairobi — Kenya Office
            <br />
            Westpark Towers, Muthithi Road
            <br />
            Nairobi, Kenya
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm">
        © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
      </div>
    </footer>
  );
}
