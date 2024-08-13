import cookie from "cookie";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = NextResponse.json({ success: true, status: 200 });

    response.headers.set(
      "Set-Cookie",
      cookie.serialize("token", "", {
        maxAge: -1,
        path: "/",
      })
    );

    return response;
  } catch (error) {
    console.error("Error handling logout:", error);
    return NextResponse.json({
      success: false,
      status: 500,
      error: "Internal Server Error",
    });
  }
}
