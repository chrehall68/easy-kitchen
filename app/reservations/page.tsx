"use client";

import { Content } from "@/components/Content";
import { useEffect, useRef, useState } from "react";
import { Reservation } from "../api/reservations/reservation";
import { Button, Card, Select, SelectItem } from "@nextui-org/react";

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
    const times = useRef<number[]>([0, 0]);
    const options = [
        "0 seconds from now",
        "15 seconds from now",
        "30 seconds from now",
        "45 seconds from now",
        "60 seconds from now",
    ]

    const f = () => fetch("/api/reservations", { cache: "no-cache" }).then(resp => resp.json()).then(val => setData(val.reservations));
    useEffect(
        () => {
            // run function initially, then set it to run every 5 seconds
            f();
            const id = setInterval(f, 5000);

            // cleanup 
            return () => clearInterval(id);
        },
        [setData]
    )

    const set = (key: any, index: number) => {
        const idx = Number.parseInt(key.currentKey);
        times.current[index] = Number.parseInt(options[idx].split(" ")[0]);
    }
    const submit = () => {
        const now = new Date();
        fetch("/api/reservations", {
            method: "post", body: JSON.stringify({
                owner: "anonymous",
                startTime: new Date().setSeconds(now.getSeconds() + times.current[0]),
                endTime: new Date().setSeconds(now.getSeconds() + times.current[1])
            })
        }).then(resp => { resp.status == 200 ? f() : window.alert("Invalid reservation") });  // refresh once it's done
    }

    return <Content>
        <div className="w-full flex-wrap items-center justify-center text-center pb-8">
            <p className="pb-2">Make a reservation.</p>
            <div className="flex flex-row w-full justify-center items-center">
                <Select label="start time" className="max-w-xs pr-4" onSelectionChange={key => set(key, 0)}>
                    {options.map((val, idx) => <SelectItem key={idx}>{val}</SelectItem>)}
                </Select>
                <Select label="end time" className="max-w-xs  pr-4" onSelectionChange={key => set(key, 1)}>
                    {options.map((val, idx) => <SelectItem key={idx}>{val}</SelectItem>)}
                </Select>
                <Button onClick={submit} color="primary">Submit</Button>
            </div>
        </div>
        <div>
            <p>Current reservations:</p>
            {data.map((element, idx) => reservationDisplay(element, idx))}
        </div>
    </Content>
}