import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest): Promise<Response> {
	return NextResponse.json({
    text: await request.text()
  }, {
		status: 200
	});
}
