import Input from "~/components/Input";
import NotesList from "~/components/EntryList";

function Home() {
  return (
    <div>
      <Input />
      {/* @ts-expect-error Async Server Component */}
      <NotesList />
    </div>
  );
}

export default Home;
