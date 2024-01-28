class KitchenState {
    // jw = Joe West in use
    private _jw: boolean;
    public get jw(): boolean {
        return this._jw;
    }
    public set jw(v: boolean) {
        this._jw = v;
    }

    // cv2 = CV2 in use
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
export const kitchenState = new KitchenState();

export async function getData() {
    return {
        jw: kitchenState.jw,
        cv2: kitchenState.cv2
    };
}
