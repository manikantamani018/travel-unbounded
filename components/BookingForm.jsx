"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    dateOfTravel: "",
    numberOfPeople: 1,
    hotelCategory: "",
    numberOfChildren: 0,
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function submit(e) {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // Full name validation
    if (!form.fullName.trim()) {
      return setStatus({
        type: "error",
        message: "Please enter your full name.",
      });
    }

    // Phone validation
    const cleanPhone = form.phone.replace(/\D/g, "");

    if (!cleanPhone || cleanPhone.length < 6) {
      return setStatus({
        type: "error",
        message: "Please enter a valid phone number.",
      });
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
    }

    // Travel date validation
    if (!form.dateOfTravel || new Date(form.dateOfTravel) <= new Date()) {
      return setStatus({
        type: "error",
        message: "Please select a future travel date.",
      });
    }

    // Number of people validation
    if (Number(form.numberOfPeople) < 1) {
      return setStatus({
        type: "error",
        message: "Number of people must be at least 1.",
      });
    }

    // Hotel validation
    if (!form.hotelCategory) {
      return setStatus({
        type: "error",
        message: "Please select a hotel category.",
      });
    }

    // Children validation
    if (Number(form.numberOfChildren) < 0) {
      return setStatus({
        type: "error",
        message: "Number of children cannot be negative.",
      });
    }

    setLoading(true);

    try {
      // Combine country code and phone number
      const phoneNumber = `${form.countryCode}${cleanPhone}`;

      const requestData = {
        ...form,
        phone: phoneNumber,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unable to submit your enquiry.");
      }

      // Success message
      setStatus({
        type: "success",
        message:
          "Thank you! Our travel expert will contact you within 24 hours.",
      });

      // Reset form
      setForm({
        fullName: "",
        countryCode: "+91",
        phone: "",
        email: "",
        dateOfTravel: "",
        numberOfPeople: 1,
        hotelCategory: "",
        numberOfChildren: 0,
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.message || "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  // Today's date for date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl bg-white p-6 shadow-lg md:p-10"
    >
      {/* Status Message */}
      {status.message && (
        <div
          className={`mb-6 rounded-xl p-4 ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <Field label="Full Name">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={update}
            className="input"
            placeholder="Your full name"
            required
          />
        </Field>

        {/* Contact Number */}
        <Field label="Contact Number">
          <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
            {/* Country / STD Code */}
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={update}
              className="w-[105px] shrink-0 border-0 border-r border-gray-300 bg-transparent px-3 py-3 text-sm font-medium text-gray-700 outline-none focus:border-gray-300 focus:outline-none focus:ring-0"
              aria-label="Country code"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+65">🇸🇬 +65</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+33">🇫🇷 +33</option>
            </select>

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={update}
              className="min-w-0 flex-1 border-0 px-4 py-3 text-gray-800 outline-none placeholder:text-gray-400 focus:outline-none focus:ring-0"
              placeholder="9876543210"
              inputMode="numeric"
              required
            />
          </div>
        </Field>

        {/* Email */}
        <Field label="Email">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            className="input"
            placeholder="you@example.com"
            required
          />
        </Field>

        {/* Date of Travel */}
        <Field label="Date of Travel">
          <input
            type="date"
            name="dateOfTravel"
            value={form.dateOfTravel}
            onChange={update}
            min={today}
            className="input"
            required
          />
        </Field>

        {/* Number of People */}
        <Field label="Number of People">
          <input
            type="number"
            min="1"
            name="numberOfPeople"
            value={form.numberOfPeople}
            onChange={update}
            className="input"
            required
          />
        </Field>

        {/* Hotel Category */}
        <Field label="Hotel Category">
          <select
            name="hotelCategory"
            value={form.hotelCategory}
            onChange={update}
            className="input"
            required
          >
            <option value="">Select category</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Luxury">Luxury</option>
          </select>
        </Field>

        {/* Number of Children */}
        <Field label="Number of Children (optional)">
          <input
            type="number"
            min="0"
            name="numberOfChildren"
            value={form.numberOfChildren}
            onChange={update}
            className="input"
          />
        </Field>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-full bg-emerald-700 px-6 py-4 font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </span>

      {children}
    </label>
  );
}
