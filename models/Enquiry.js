import mongoose from "mongoose";
const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  dateOfTravel: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true, min: 1 },
  hotelCategory: {
    type: String,
    required: true,
    enum: ["Standard", "Deluxe", "Luxury"],
  },
  numberOfChildren: { type: Number, default: 0, min: 0 },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);
