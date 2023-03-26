import { getEntries, transformServerEntries } from "~/util/getStaticEntryList";
import EntryList from "./EntryList";

export const revalidate = 0,
  dynamic = "force-dynamic";

async function ServerSideEntryList() {
  const entries = await getEntries();
  const serverEntries = transformServerEntries(entries);
  // FIXME only plain objects can be passed down, not even dates are ok
  return <EntryList serverEntries={serverEntries} />;
}

export default ServerSideEntryList;
