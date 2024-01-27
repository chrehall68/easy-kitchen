import { Content } from "@/components/Content";
import { getData } from "./api/status/kitchen";

export default async function Home() {
    const data = await getData();

    return <Content home>
        <p>Welcome to EasyKitchen, the best way to simplify your kitchen needs.</p>
        <div>
            <p>
                Current kitchen status:
            </p>
            <li>Joe West Kitchen: {data.jw ? "in use" : "open"}</li>
            <li>CV2 Kitchen: {data.cv2 ? "in use" : "open"}</li>
        </div>
    </Content>

}
