import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";

    const [results] = await pool.query(
      "SELECT id, title, description, image FROM clothes WHERE title LIKE ?",
      [`%${query}%`]
    );

    // Convert buffer to base64
    const formattedResults = results.map((item) => ({
      ...item,
      image: item.image ? item.image.toString("base64") : null,
    }));

    return NextResponse.json(formattedResults, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
