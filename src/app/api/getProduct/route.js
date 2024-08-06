import { NextResponse } from "next/server";
import pool from "@/app/lib/connection";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";
  const subCategory = searchParams.get("subCategory") || "";

  try {
    let sql = `SELECT id, title, description, image, price FROM clothes WHERE title LIKE ?`;
    let values = [`%${query}%`];

    if (category) {
      sql += ` AND category = ?`;
      values.push(category);
    }

    const [results] = await pool.query(sql, values);

    const products = results.map((result) => ({
      ...result,
      image: result.image.toString("base64"),
    }));

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
