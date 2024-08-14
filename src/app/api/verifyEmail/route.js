import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  try {
    const query = "SELECT * FROM users WHERE verificationToken = ?";
    const [user] = await pool.query(query, [token]);

    if (user.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const updateQuery =
      "UPDATE users SET isVerified = 1, verificationToken = NULL WHERE id = ?";
    await pool.query(updateQuery, [user[0].id]);

    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/signIn`;

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
