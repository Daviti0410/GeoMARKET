import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, password } = data;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Missing Required Fields" },
        { status: 400 }
      );
    }

    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.query(query, [email]);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or Password" },
        { status: 401 }
      );
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { error: "Invalid login or Password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true, id: user.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
