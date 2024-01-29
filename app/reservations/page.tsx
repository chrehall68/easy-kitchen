"use client";

import { Content } from "@/components/Content";
import { useEffect, useState } from "react";
import { Reservation } from "../api/reservations/reservation";
import { Card } from "@nextui-org/react";

function reservationDisplay(r: Reservation, idx: number) {
    return <Card key={idx} className="p-4 m-4">
        <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div className="flex flex-col">
                <p>{r.owner}</p>
                <p>From {new Date(r.startTime).toLocaleDateString()} {new Date(r.startTime).toLocaleTimeString()} to {new Date(r.endTime).toLocaleDateString()} {new Date(r.endTime).toLocaleTimeString()}</p>
            </div>
        </div>
    </Card>
}

export default function Page() {
    const [data, setData] = useState<Reservation[]>([]);

    useEffect(
        () => {
            fetch("/api/reservations", { cache: "no-cache" }).then(resp => resp.json()).then(val => setData(val.reservations));
        },
        [setData]
    )

    return <Content>
        <div>
            {data.map((element, idx) => reservationDisplay(element, idx))}
        </div>
    </Content>
}