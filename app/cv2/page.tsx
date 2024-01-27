"use client";
import { Content } from "@/components/Content";
import { Button } from "@nextui-org/react";

export default function CV2() {
    return <Content cv2>
        <p>
            Currently using the CV2 Kitchen? Be courteous! Let other people know:
        </p>
        <div>
            <Button color="primary" onPress={() => fetch("/api/status", { method: "POST", body: JSON.stringify({ cv2: true }) })}>
                Use Kitchen
            </Button>

            <Button color="primary" onPress={() => fetch("/api/status", { method: "POST", body: JSON.stringify({ cv2: false }) })}>
                Stop Using Kitchen
            </Button>
        </div>
    </Content>
}