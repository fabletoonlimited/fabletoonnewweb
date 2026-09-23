import Quote from "@/app/api/models/quoteModel";
import { NextResponse } from "next/server";

export async function createQuoteController(req) {
  try {
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

    // Check if this IP submitted within the last 24 hours
    const twentyFourHoursAgo = new Date(
      Date.now() - 24 * 60 * 60 * 1000
    );

    const existingQuote = await Quote.findOne({
      ipAddress,
      createdAt: {
        $gte: twentyFourHoursAgo,
      },
    });

    if (existingQuote) {
      const nextSubmissionTime = new Date(
        existingQuote.createdAt.getTime() + 24 * 60 * 60 * 1000
      );

      const retryAfter = Math.ceil(
        (nextSubmissionTime.getTime() - Date.now()) / 1000
      );

      return NextResponse.json(
        {
          message:
            "You have already submitted a quote request. Please submit new request again after 24 hours.",
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

    // Create quote
    const newQuote = await Quote.create({
      fullName: fullName.trim(),
      email: trimmedEmail,
      phone: phone.trim(),
      comment: comment.trim(),
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
    console.error("Quote error:", error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export const getQuote = async (data) => {
  try {
    const { _id } = data;

    const quote = await Quote.findById(_id).populate("Quote");

    if (!quote) {
      return {
        status: 400,
        message: "Quote not found",
      };
    }

    return {
      status: 200,
      success: true,
      quote,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || "Server error",
    };
  }
};

export const getAllQuote = async () => {
  try {
    const allQuote = await Quote.find().populate("Quote");

    return {
      status: 200,
      success: true,
      quotes: allQuote,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || "Server error",
    };
  }
};

export const deleteQuote = async (data) => {
  try {
    const { _id } = data;

    if (!_id) {
      return NextResponse.json(
        { error: "Quote ID is required" },
        { status: 400 }
      );
    }

    const deletedQuote = await Quote.findByIdAndDelete(_id);

    if (!deletedQuote) {
      return NextResponse.json(
        { error: "Quote not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Quote deleted successfully",
        quote: deletedQuote,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);

    return NextResponse.json(
      { error: "Cannot delete Quote" },
      { status: 500 }
    );
  }
};
