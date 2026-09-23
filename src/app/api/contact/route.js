export const runtime = "nodejs";

import dbConnect from "@/app/lib/mongoose";
import { NextResponse } from "next/server";
import Contact from "../models/contactModel.js"
import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Get form data
    const body = await req.json();

    const { fullName, email, phone, comment } = body;

    // Validate fields
    if (!fullName || !email || !phone || !comment) {
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

    console.log("Contact IP:", ipAddress);

    // Check if this IP has already submitted
    const existingContact = await Contact.findOne({
      ipAddress,
    });

    if (existingContact) {
      return NextResponse.json(
        {
          message:
            "You have already submitted a contact request. We will get back to you soon.",
        },
        { status: 429 }
      );
    }

    // Create contact
    const newContact = await Contact.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      comment: comment.trim(),
      ipAddress,
    });

    return NextResponse.json(
      {
        message: "Contact request submitted successfully.",
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact creation error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while submitting your contact request.",
      },
      { status: 500 }
    );
  }
}

// GET CONTACT(S)
export async function GET(request) {
  await dbConnect();

  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const contact = await contact.findById(decoded.id);

    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" }, 
        { status: 404 });
    }

    return NextResponse.json(contact, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// DELETE Contact
export async function DELETE(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");


    if (!id) {
      return NextResponse.json(
        { message: "Contact ID is required" },
        { status: 400 }
      );
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Contact deleted successfully" }, 
      { status: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}
