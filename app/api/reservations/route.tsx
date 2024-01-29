import { NextRequest, NextResponse } from "next/server";
import { addReservation, getReservations } from "./reservation";

export async function GET(_: NextRequest) {
    return NextResponse.json({ reservations: await getReservations() }, { status: 200 });
}
// example client-side post request: 
// await fetch("/api/reservations", {method:"post", body: JSON.stringify({owner:"user", startTime: new Date().setSeconds(new Date().getSeconds()+20), endTime: new Date().setSeconds(new Date().getSeconds() + 40) }) })
export async function POST(r: NextRequest) {
    addReservation(await r.json());
    return NextResponse.json(null, { status: 200 });
}