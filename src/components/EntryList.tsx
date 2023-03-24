"use client";
import EntryComponent from "./Entry";
import { useEffect, useState } from "react";
import { type Entry } from "~/util/EntrySchema";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "~/firebase/config";

// this should be a server component fetching and rendering entries
// TODO hydrate this with onsnapshot to listen to realtime updates
function EntryList({ serverEntries }: { serverEntries: Entry[] }) {
  const [entries, setEntries] = useState<Entry[]>(serverEntries);

  useEffect(() => setEntries(serverEntries), [serverEntries]);

  useEffect(() => {
    const q = query(collection(db, "entries"), orderBy("createdAt"));
    const result: Entry[] = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // const entries = [];
      const result: Entry[] = querySnapshot.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id } as Entry;
      });
      setEntries(result);
    });
    console.log("setting state with", result);

    return unsubscribe;
  }, []);

  // TODO error handling
  // if (error) return <div>Error occured during fetching, {error}</div>
  return (
    <div className="flex max-w-lg flex-col justify-center gap-2">
      {entries?.map((entry) => (
        // TODO use id of the note instead
        <EntryComponent key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
