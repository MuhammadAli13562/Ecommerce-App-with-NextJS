import { NextResponse } from "next/server";
import { connectToDB, querytoDB } from "utils/db/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("search params : ", searchParams);

  return NextResponse.json({ message: "Responded from GET" });
}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
