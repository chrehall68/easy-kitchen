import { NextRequest, NextResponse } from "next/server";
import { getData, setData } from "./kitchen";

export async function GET(_: NextRequest) {
    return NextResponse.json(await getData(), { status: 200 });
}
export async function POST(req: NextRequest) {
    // update kitchen state
    await setData(await req.json());

    // acknowledge request
    return NextResponse.json(null, { status: 200 });
}
