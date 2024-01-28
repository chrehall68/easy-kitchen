"use client";
import { Content } from "@/components/Content";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState({ jw: undefined, cv2: undefined });
    useEffect(
        () => {
            fetch("/api/status").then(resp => resp.json()).then(setData);
        },
        [data, setData]
    );

    return <Content home>
        <p>Welcome to EasyKitchen, the best way to simplify your kitchen needs.</p>
        <div>
            <p>
                Current kitchen status:
            </p>
            <div>
                <li>Joe West Kitchen: {data.jw !== undefined ? (data.jw ? "in use" : "open") : "..."}</li>
                <li>CV2 Kitchen: {data.cv2 !== undefined ? (data.cv2 ? "in use" : "open") : "..."}</li>
            </div>
        </div>
    </Content>

}
