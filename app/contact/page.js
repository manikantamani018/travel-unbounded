import BookingForm from "@/components/BookingForm";
export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description: "Send a travel enquiry to Travel Unbounded.",
};
export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Start planning
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Plan Your Journey
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Share a few details and our travel expert will contact you within 24
            hours.
          </p>
        </div>
        <BookingForm />
      </div>
    </main>
  );
}
