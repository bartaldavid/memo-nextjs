import { getEntries } from "~/firebase/firebaseContentManagement";
import EntryList from "./EntryList";

export const revalidate = 0, dynamic = 'force-dynamic';

async function RealtimeServerPosts() {
  const entries = await getEntries();
  // FIXME only plain objects can be passed down, not even dates are ok
  return <EntryList serverEntries={entries} />;
}

export default RealtimeServerPosts;
