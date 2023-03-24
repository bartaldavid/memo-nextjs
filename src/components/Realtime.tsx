import { getEntries } from "~/firebase/firebaseContentManagement";
import EntryList from "./EntryList";

export const revalidate = 0;

async function RealtimeServerPosts() {
  const entries = await getEntries();
  return <EntryList serverEntries={entries} />;
}

export default RealtimeServerPosts;
