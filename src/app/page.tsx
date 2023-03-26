import Input from "~/components/Input";
import ServerSideEntryList from "~/components/ServerSideEntryList";

function Home() {
  return (
    <div>
      <Input />
      {/* @ts-expect-error Async Server Component */}
      <ServerSideEntryList />
    </div>
  );
}

export default Home;
