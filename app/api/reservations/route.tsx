import { NextRequest, NextResponse } from "next/server";
import { addReservation, getReservations } from "./reservation";

export async function GET(_: NextRequest) {
    return NextResponse.json({ reservations: await getReservations() }, { status: 200 });
}

// example client-side post request: 
// await fetch("/api/reservations", {method:"post", body: JSON.stringify({owner:"user", startTime: new Date().setSeconds(new Date().getSeconds()+20), endTime: new Date().setSeconds(new Date().getSeconds() + 40) }) })
export async function POST(r: NextRequest) {
    // 200 = ok
    // 409 = conflict when adding requested resource (unable to do so, most likely schedule conflict)
    const status = await addReservation(await r.json()) ? 200 : 409;
    return NextResponse.json(null, { status: status });
}