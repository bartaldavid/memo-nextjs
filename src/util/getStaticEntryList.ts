import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { db } from "~/firebase/config";
import { ENTRIES_COLLECTION } from "~/firebase/firebaseContentManagement";
import { type Entry } from "./EntrySchema";

// TODO error handling

export async function getEntries() {
  const q = query(collection(db, ENTRIES_COLLECTION), orderBy("createdAt"));
  const snapshot = await getDocs(q);
  const entries: Entry[] = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Entry;
  });
  return entries;
}

export function transformServerEntries(serverEntries: Entry[]): Entry[] {
  return serverEntries.map((entry) => {
    const dateString = entry.createdAt?.toDate().toDateString();
    delete entry.createdAt;
    return { ...entry, createdAtDateString: dateString };
  });
}
