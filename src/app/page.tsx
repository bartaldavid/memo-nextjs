import Input from "~/components/Input";
import RealtimeServerPosts from "~/components/Realtime";

function Home() {
  return (
    <div>
      <Input />
      {/* @ts-expect-error Async Server Component */}
      <RealtimeServerPosts />
    </div>
  );
}

export default Home;
