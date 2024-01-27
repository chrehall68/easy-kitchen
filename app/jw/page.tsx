"use client";
import { Content } from "@/components/Content";
import { Button } from "@nextui-org/react";

export default function JoeWest() {
    return <Content jw>

        <p>
            Currently using the Joe West Kitchen? Be courteous! Let other people know:
        </p>
        <div>
            <Button color="primary" onPress={() => fetch("/api/status", { method: "POST", body: JSON.stringify({ jw: true }) })}>
                Use Kitchen
            </Button>

            <Button color="primary" onPress={() => fetch("/api/status", { method: "POST", body: JSON.stringify({ jw: false }) })}>
                Stop Using Kitchen
            </Button>
        </div>

    </Content>
}