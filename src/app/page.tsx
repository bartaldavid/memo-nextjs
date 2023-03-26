import EntryList from "~/components/EntryList";
import Input from "~/components/Input";
import { getEntries, transformServerEntries } from "~/util/getStaticEntryList";

export const revalidate = 0;

async function Home() {
  const entries = await getEntries();
  const serverEntries = transformServerEntries(entries);

  return (
    <div>
      <Input />
      <EntryList serverEntries={serverEntries} />
    </div>
  );
}

export default Home;
