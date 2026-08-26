# Travel Unbounded

A full-stack travel company website built for the Travel Unbounded Phase 1 assignment.

## Stack
- Next.js App Router
- React
- Tailwind CSS
- MongoDB Atlas
- Mongoose
- Vercel-ready API Route Handler

## Setup
1. Install Node.js.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your MongoDB Atlas connection string to `MONGODB_URI`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Environment variables
`MONGODB_URI` — MongoDB Atlas connection string.

## Pages
- `/` Home
- `/about` About
- `/contact` Enquiry form
- `POST /api/enquiry` saves enquiries to MongoDB

## Notes
Destination and pricing information is static dummy data. Images use Unsplash URLs. The form validates on both client and server. The project uses the Next.js App Router.
