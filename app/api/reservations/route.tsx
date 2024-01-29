import { NextRequest, NextResponse } from "next/server";
import { addReservation, getReservations } from "./reservation";

export async function GET(_: NextRequest) {
    return NextResponse.json({ reservations: await getReservations() }, { status: 200 });
}
export async function POST(r: NextRequest) {
    addReservation(await r.json());
    return NextResponse.json(null, { status: 200 });
}