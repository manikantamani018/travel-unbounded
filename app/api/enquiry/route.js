import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      dateOfTravel,
      numberOfPeople,
      hotelCategory,
      numberOfChildren,
    } = body;
    if (
      !fullName?.trim() ||
      !phone ||
      !email ||
      !dateOfTravel ||
      !numberOfPeople ||
      !hotelCategory
    )
      return NextResponse.json(
        { message: "All required fields must be provided." },
        { status: 400 },
      );
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 },
      );
    if (new Date(dateOfTravel) <= new Date())
      return NextResponse.json(
        { message: "Travel date must be in the future." },
        { status: 400 },
      );
    if (Number(numberOfPeople) < 1 || Number(numberOfChildren || 0) < 0)
      return NextResponse.json(
        { message: "Invalid traveller count." },
        { status: 400 },
      );
    await connectDB();
    const enquiry = await Enquiry.create({
      fullName: fullName.trim(),
      phone,
      email: email.toLowerCase().trim(),
      dateOfTravel,
      numberOfPeople: Number(numberOfPeople),
      hotelCategory,
      numberOfChildren: Number(numberOfChildren || 0),
    });
    return NextResponse.json(
      { success: true, id: enquiry._id },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to save your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
