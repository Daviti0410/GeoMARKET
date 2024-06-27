import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/connection";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const title = data.get("title");
    const description = data.get("description");

    if (!file || !title || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const query = `
      INSERT INTO clothes (title, description, image)
      VALUES (?, ?, ?)
    `;
    const values = [title, description, buffer];

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
