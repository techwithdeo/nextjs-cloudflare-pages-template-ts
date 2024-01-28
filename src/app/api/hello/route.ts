import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET() {
	const response = new NextResponse(`Hello, Next.js! process.env.MY_VAR: ${process.env.MY_VAR}`, {
		status: 200
	});

	return response;
}
