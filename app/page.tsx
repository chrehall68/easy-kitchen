import { getData } from "./api/status/route";

export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <p>Welcome to the Kitchen Simplifying thingy</p>
      <div>
        <p>
          Statuses:
        </p>
        <li>Joe West Kitchen: {data.jw ? "open" : "in use"}</li>
        <li>CV2 Kitchen: {data.cv2 ? "open" : "in use"}</li>
      </div>
    </main>
  );
}
