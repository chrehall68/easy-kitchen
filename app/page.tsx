import { EKNav } from "@/components/navbar";
import { getData } from "./api/status/route";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const data = await getData()
  return (
    <main className="min-h-screen">
      <EKNav home />
      <div className="flex flex-col items-center p-48">
        <p>Welcome to the Kitchen Simplifying thingy</p>
        <div>
          <p>
            Statuses:
          </p>
          <li>Joe West Kitchen: {data.jw ? "open" : "in use"}</li>
          <li>CV2 Kitchen: {data.cv2 ? "open" : "in use"}</li>
        </div>
        <Button>Click Me</Button>
        <p className="pb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Convallis a cras semper auctor. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Velit aliquet sagittis id consectetur purus ut faucibus. Enim ut sem viverra aliquet eget sit amet tellus cras. Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet consectetur adipiscing elit ut aliquam. Non quam lacus suspendisse faucibus interdum posuere lorem. Aliquam ultrices sagittis orci a scelerisque purus semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Scelerisque purus semper eget duis. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Tempus imperdiet nulla malesuada pellentesque elit eget. Mauris augue neque gravida in fermentum et. Ante in nibh mauris cursus mattis molestie a iaculis at.
        </p><p className="pb-24">
          Venenatis urna cursus eget nunc scelerisque viverra. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Augue lacus viverra vitae congue. Odio euismod lacinia at quis risus sed. Posuere sollicitudin aliquam ultrices sagittis orci. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Egestas sed tempus urna et pharetra pharetra massa. Ut morbi tincidunt augue interdum velit euismod. Auctor urna nunc id cursus metus aliquam. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Ante metus dictum at tempor. Tincidunt tortor aliquam nulla facilisi.
        </p><p className="pb-24">
          Justo donec enim diam vulputate ut. Convallis a cras semper auctor neque vitae tempus. Amet facilisis magna etiam tempor orci eu. Convallis aenean et tortor at. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tempor commodo ullamcorper a lacus. Purus faucibus ornare suspendisse sed nisi lacus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ipsum suspendisse ultrices gravida dictum fusce ut. Consectetur adipiscing elit pellentesque habitant. Ut pharetra sit amet aliquam id. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Quam adipiscing vitae proin sagittis nisl. Congue quisque egestas diam in arcu cursus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Imperdiet nulla malesuada pellentesque elit eget gravida.
        </p><p className="pb-24">
          Sed arcu non odio euismod lacinia at quis risus sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Aenean et tortor at risus viverra adipiscing. Volutpat blandit aliquam etiam erat velit scelerisque in. Amet luctus venenatis lectus magna fringilla. In arcu cursus euismod quis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Enim lobortis scelerisque fermentum dui faucibus. Nisl nunc mi ipsum faucibus vitae aliquet nec. Sit amet venenatis urna cursus eget nunc scelerisque viverra.
        </p><p className="pb-24">
          Mauris nunc congue nisi vitae suscipit. Senectus et netus et malesuada. Commodo elit at imperdiet dui accumsan sit amet nulla. Tempor orci dapibus ultrices in iaculis nunc sed augue. Sit amet massa vitae tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Aliquet eget sit amet tellus cras adipiscing enim eu. Augue interdum velit euismod in. Ultricies mi quis hendrerit dolor magna. Purus in mollis nunc sed. Massa sapien faucibus et molestie. Id aliquet risus feugiat in ante metus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Facilisi morbi tempus iaculis urna id. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Dictum sit amet justo donec enim diam.
        </p>
      </div>

    </main >
  );
}
