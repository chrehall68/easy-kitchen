export interface Reservation {
    owner: string,
    startTime: number;  // timestamp; ms since epoch
    endTime: number;  // timestamp; ms since epoch
}

class ReservationManager {
    // functions as a sorted array, sorted by start time
    // assumes that there are no overlap conflicts
    private _reservations: Reservation[]

    public get reservations() {
        this.filterReservations();
        return this._reservations;
    }

    private filterReservations() {
        // filters out reservations that are past their time
        var lastValid = 0;
        while (lastValid < this._reservations.length && Date.now() > this._reservations[lastValid].endTime) {
            ++lastValid;
        }
        this._reservations = this._reservations.slice(lastValid);
    }

    public addReservation(r: Reservation): boolean {
        this.filterReservations();
        var idx = 0;

        // advance idx until this._reservations[idx].startTime >= r.startTime
        while (idx < this._reservations.length && this._reservations[idx].startTime < r.startTime) {
            // r is ahead in time, so keep going
            ++idx;
        }

        // make sure it doesn't overlap and that it's a valid reservation
        if ((idx > 0 && this._reservations[idx - 1].endTime >= r.startTime)  // doesn't overlap w/ prev
            || (idx < this._reservations.length && this._reservations[idx].startTime <= r.endTime)  // doesn't overlap w/ next
            || (r.startTime >= r.endTime) // is valid
        ) {
            // it overlaps, so return false bc we cannot add this
            return false;
        }

        // if it doesn't overlap, then just insert r in the sorted order
        this._reservations = [...this._reservations.slice(0, idx), r, ...this._reservations.slice(idx)];
        return true;
    }

    constructor() {
        this._reservations = [];
    }
}

// singleton on the server side
const reservationManager = new ReservationManager();

// exported async functions
export async function addReservation(r: Reservation): Promise<boolean> {
    return reservationManager.addReservation(r);
}
export async function getReservations() {
    return reservationManager.reservations;
}