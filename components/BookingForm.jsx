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
    const { name, value } = e.target;

    // Phone number: allow numbers only and maximum 10 digits
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "");

      if (numbersOnly.length <= 10) {
        setForm({
          ...form,
          phone: numbersOnly,
        });
      }

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  function validateForm() {
    // Full Name
    if (!form.fullName.trim()) {
      return "Please enter your full name.";
    }

    if (form.fullName.trim().length < 2) {
      return "Full name must contain at least 2 characters.";
    }

    // Country Code
    if (!form.countryCode) {
      return "Please select a country code.";
    }

    // Phone Number
    const phone = form.phone.trim();

    if (!phone) {
      return "Please enter your contact number.";
    }

    if (!/^\d+$/.test(phone)) {
      return "Phone number can contain numbers only.";
    }

    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must contain exactly 10 digits.";
    }

    // Email
    if (!form.email.trim()) {
      return "Please enter your email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    // Travel Date
    if (!form.dateOfTravel) {
      return "Please select your travel date.";
    }

    const selectedDate = new Date(`${form.dateOfTravel}T00:00:00`);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      return "Please select a future travel date.";
    }

    // Number of People
    const people = Number(form.numberOfPeople);

    if (!Number.isInteger(people) || people < 1) {
      return "Number of people must be at least 1.";
    }

    // Hotel Category
    if (!form.hotelCategory) {
      return "Please select a hotel category.";
    }

    // Number of Children
    const children = Number(form.numberOfChildren);

    if (!Number.isInteger(children) || children < 0) {
      return "Number of children cannot be negative.";
    }

    return null;
  }

  async function submit(e) {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // Validate before sending request
    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });

      return;
    }

    setLoading(true);

    try {
      // Combine country code + 10-digit phone number
      const phoneNumber = `${form.countryCode}${form.phone}`;

      const requestData = {
        fullName: form.fullName.trim(),
        phone: phoneNumber,
        email: form.email.trim().toLowerCase(),
        dateOfTravel: form.dateOfTravel,
        numberOfPeople: Number(form.numberOfPeople),
        hotelCategory: form.hotelCategory,
        numberOfChildren: Number(form.numberOfChildren),
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

      // Success
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
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  // Tomorrow as minimum travel date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl bg-white p-6 shadow-lg md:p-10"
    >
      {/* Status Message */}
      {status.message && (
        <div
          role="alert"
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
            minLength={2}
            required
          />
        </Field>

        {/* Contact Number */}
        <Field label="Contact Number">
          <div className="contact-phone">
            {/* Country Code */}
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={update}
              aria-label="Country code"
              required
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
              placeholder="9876543210"
              inputMode="numeric"
              minLength={10}
              maxLength={10}
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
            min={minDate}
            className="input"
            required
          />
        </Field>

        {/* Number of People */}
        <Field label="Number of People">
          <input
            type="number"
            min="1"
            step="1"
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
            step="1"
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
