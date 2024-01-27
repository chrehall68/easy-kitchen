import { NextRequest, NextResponse } from "next/server";

// TODO - have stats tracking how often jw has been updated, etc
class KitchenState {
    // jw = Joe West
    private _jw: boolean;
    public get jw(): boolean {
        return this._jw;
    }
    public set jw(v: boolean) {
        this._jw = v;
    }

    // cv2 = CV2
    private _cv2: boolean;
    public get cv2(): boolean {
        return this._cv2;
    }
    public set cv2(v: boolean) {
        this._cv2 = v;
    }

    constructor() {
        this._jw = false;  // joe west
        this._cv2 = false;  // cv2
    }
}
const kitchenState = new KitchenState();

export async function getData() {
    return {
        jw: kitchenState.jw,
        cv2: kitchenState.cv2
    };
}

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
