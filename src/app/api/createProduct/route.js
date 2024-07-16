import { NextResponse } from "next/server";
import pool from "@/app/lib/connection";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const title = data.get("title");
    const description = data.get("description");
    const category = data.get("category");
    const brand = data.get("brand");
    const type = data.get("type");
    const condition = data.get("condition");
    const color = data.get("color");
    const stock = data.get("stock");
    const price = data.get("price");

    if (!file || !title || !description || !category || !brand || !type || !condition || !color || !stock || !price) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const query = `
      INSERT INTO clothes (title, description, image, category, brand, type, conditio, color, stock, price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      title,
      description,
      buffer,
      category,
      brand,
      type,
      condition,
      color,
      stock,
      price,
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
