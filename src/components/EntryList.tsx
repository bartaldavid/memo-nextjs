"use client";

import { db } from "~/util/firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, collection, orderBy } from "firebase/firestore";
import { type Entry } from "~/util/EntrySchema";
import EntryComponent from "./Entry";

function NotesList() {
  const q = query(collection(db, "entries"), orderBy("createdAt"));
  const [values, snapshot, loading, error] = useCollectionData<Entry>(q);
  return (
    <div className="flex max-w-lg flex-col gap-2">
      {values?.map((note) => (
        // use id of the note instead
        <EntryComponent key={crypto.randomUUID()} entry={note} />
      ))}
    </div>
  );
}

export default NotesList;
