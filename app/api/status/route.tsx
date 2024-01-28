import { NextRequest, NextResponse } from "next/server";
import { getData, kitchenState } from "./kitchen";

export async function GET(_: NextRequest) {
    return NextResponse.json(await getData(), { status: 200 });
}
export async function POST(req: NextRequest) {
    // update kitchen state
    const { jw, cv2 } = await req.json();
    kitchenState.jw = (jw === undefined ? kitchenState.jw : jw);
    kitchenState.cv2 = (cv2 === undefined ? kitchenState.cv2 : cv2);

    // acknowledge request
    return new Response(null, { status: 200 });
}
