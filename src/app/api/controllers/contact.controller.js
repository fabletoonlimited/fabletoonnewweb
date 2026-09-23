import Contact from "@/app/api/models/contactModel";
import { NextResponse } from "next/server";

export async function createContactController(req) {
  try {
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

    // Check if this IP submitted within the last 24 hours
    const twentyFourHoursAgo = new Date(
      Date.now() - 24 * 60 * 60 * 1000
    );

    const existingContact = await Contact.findOne({
      ipAddress,
      createdAt: {
        $gte: twentyFourHoursAgo,
      },
    });

    if (existingContact) {
      const nextSubmissionTime = new Date(
        existingContact.createdAt.getTime() + 24 * 60 * 60 * 1000
      );

      const retryAfter = Math.ceil(
        (nextSubmissionTime.getTime() - Date.now()) / 1000
      );

      return NextResponse.json(
        {
          message:
            "You have already submitted a contact request. Please try again after 24 hours.",
          nextSubmissionTime,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    // Normalize email
    const trimmedEmail = email.trim().toLowerCase();

    // Create contact
    const newContact = await Contact.create({
      fullName: fullName.trim(),
      email: trimmedEmail,
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
    console.error("Create contact error:", error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export const getContact = async (data) => {
  try {
    const { _id } = data;

    const contact = await Contact.findById(_id).populate("Quote");

    if (!contact) {
      return {
        status: 400,
        message: "Contact not found",
      };
    }

    return {
      status: 200,
      success: true,
      contact,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || "Server error",
    };
  }
};

export const getAllContact = async () => {
  try {
    const allContact = await Contact.find().populate("Quote");

    return {
      status: 200,
      success: true,
      contacts: allContact,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || "Server error",
    };
  }
};

export const deleteContact = async (data) => {
  try {
    const { _id } = data;

    if (!_id) {
      return NextResponse.json(
        { error: "Contact ID is required" },
        { status: 400 }
      );
    }

    const deletedContact = await Contact.findByIdAndDelete(_id);

    if (!deletedContact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Contact deleted successfully",
        contact: deletedContact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);

    return NextResponse.json(
      { error: "Cannot delete Contact" },
      { status: 500 }
    );
  }
};
