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

    public addReservation(r: Reservation) {
        this.filterReservations();
        var idx = 0;
        while (idx < this._reservations.length && this._reservations[idx].startTime < r.startTime) {
            // r is ahead in time, so keep going
            ++idx;
        }
        // insert r in the sorted order
        this._reservations = [...this._reservations.slice(0, idx), r, ...this._reservations.slice(idx)];
    }

    constructor() {
        this._reservations = [];
    }
}

// singleton on the server side
const reservationManager = new ReservationManager();

// exported async functions
export async function addReservation(r: Reservation) {
    reservationManager.addReservation(r);
}
export async function getReservations() {
    return reservationManager.reservations;
}