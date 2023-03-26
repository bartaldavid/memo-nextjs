import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { db } from "~/firebase/config";
import { ENTRIES_COLLECTION } from "~/firebase/firebaseContentManagement";
import { type Entry } from "~/util/EntrySchema";
import EntryList from "./EntryList";

export const revalidate = 0,
  dynamic = "force-dynamic";

async function RealtimeServerPosts() {
  // FIXME createdAt shouldn't be a string
  const q = query(collection(db, ENTRIES_COLLECTION), orderBy("createdAt"));
  const snapshot = await getDocs(q);
  const entries: Entry[] = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Entry;
  });
  console.log(entries);
  // FIXME only plain objects can be passed down, not even dates are ok
  return <EntryList serverEntries={entries} />;
}

export default RealtimeServerPosts;
