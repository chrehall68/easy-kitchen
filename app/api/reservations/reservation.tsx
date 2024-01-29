interface Reservation {
    owner: string,
    startTime: number;  // timestamp; ms since epoch
    endTime: number;  // timestamp; ms since epoch
}

class ReservationManager {
    private _reservations: Reservation[] // functions as a queue
    public get reservations() {
        this.filterReservations();
        return this._reservations;
    }
    private filterReservations() {
        // filters out reservations that are past their time
        var lastValid = 0;
        while (Date.now() < this._reservations[lastValid].startTime) {
            lastValid += 1;
        }
        this._reservations = this._reservations.slice(lastValid);
    }
    public addReservation(r: Reservation) {
        this.filterReservations();
        this._reservations.push(r);
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