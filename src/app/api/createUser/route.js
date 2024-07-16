import pool from "@/app/lib/connection";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();
    const day = data.get("day");
    const month = data.get("month");
    const year = data.get("year");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const password = data.get("password");
    const phoneNumber = data.get("phoneNumber");
    const email = data.get("email");
    const street = data.get("street");
    const city = data.get("city");
    const region = data.get("region");
    const postal = data.get("postal");

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
