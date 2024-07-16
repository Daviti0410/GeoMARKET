import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      day,
      month,
      year,
      firstName,
      lastName,
      password,
      phoneNumber,
      email,
      street,
      city,
      region,
      postal,
      country,
    } = data;

    if (!day || !month || !year || !firstName || !lastName || !password || !phoneNumber || !email || !street || !city || !region || !postal || !country) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailCheckQuery = "SELECT * FROM users WHERE email = ?";
    const [existingUser] = await pool.query(emailCheckQuery, [email]);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { success: false, message: "Email is already in use" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const query = `
    INSERT INTO users (firstName, lastName, email, city, region, street, month, day, year, postal, phoneNumber, password, country)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      firstName,
      lastName,
      email,
      city,
      region,
      street,
      month,
      day,
      year,
      postal,
      phoneNumber,
      hashedPassword,
      country,
    ];
    const [result] = await pool.query(query, values);

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
