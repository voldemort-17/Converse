import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/mongdb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Try a simple command
    const result = await db.command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB is connected!",
      result,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Connection failed!", error: String(error) },
      { status: 500 }
    );
  }
}
