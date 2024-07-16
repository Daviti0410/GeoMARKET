import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";

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
    } = data;

    if (!day || !month || !year || !firstName || !lastName) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const query = `
    INSERT INTO users (firstName, lastName, email, city, region, street, month, day, year, postal, phoneNumber, password)
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
      password,
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
