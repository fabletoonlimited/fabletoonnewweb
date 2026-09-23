export const runtime = "nodejs";

import dbConnect from "@/app/lib/mongoose";
import { NextResponse } from "next/server";
import Quote from "../models/quoteModel.js"
import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Get form data
    const body = await req.json();

    const { fullName, email, phone, selectService, comment, budget } = body;

    // Validate fields
    if (!fullName || !email || !phone || !selectService || !comment || !budget) {
      return NextResponse.json(
        { message: "Please fill all fields." },
        { status: 400 }
      );
    }

    // Get user's IP address
    const forwardedFor = req.headers.get("x-forwarded-for");

    const ipAddress = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "unknown";

    console.log("Quote IP:", ipAddress);

    // Check if this IP has already submitted
    const existingQuote = await Quote.findOne({
      ipAddress,
    });

    if (existingQuote) {
      return NextResponse.json(
        {
          message:
            "You have already submitted a quoute request. We will get back to you soon. or Wait 24hrs to resend",
        },
        { status: 429 }
      );
    }

    // Create quote
    const newQuote = await Quote.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      selectService: selectService.trim(),
      comment: comment.trim(),
      budget: budget.trim(),
      ipAddress,
    });

    return NextResponse.json(
      {
        message: "Quote request submitted successfully.",
        quote: newQuote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote creation error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while submitting your quote request.",
      },
      { status: 500 }
    );
  }
}

// GET QUOTE(S)
export async function GET(request) {
  await dbConnect();

  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const quote = await quote.findById(decoded.id);

    if (!quote) {
      return NextResponse.json(
        { message: "Quote not found" }, 
        { status: 404 });
    }

    return NextResponse.json(quote, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// DELETE quote
export async function DELETE(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");


    if (!id) {
      return NextResponse.json(
        { message: "Quote ID is required" },
        { status: 400 }
      );
    }

    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return NextResponse.json(
        { message: "Quote not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Quote deleted successfully" }, 
      { status: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}
