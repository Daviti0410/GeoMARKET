import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const JWT_SECRET = process.env.JWT_SECRET;

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

    if (user.isVerified != 1) {
      return NextResponse.json({ error: "verify account first", status: 409 });
    }
    const payload = {
      userId: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    const response = NextResponse.json(
      { success: true, user },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 3600,
        path: "/",
      })
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
