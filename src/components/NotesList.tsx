"use client";

import { db } from "~/util/firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, collection } from "firebase/firestore";
import { type EntryType } from "~/util/EntrySchema";

function NotesList() {
  const q = query(collection(db, "entries"));
  const [values, snapshot, loading, error] = useCollectionData<EntryType>(q);
  return (
    <>
      {values?.map((note) => (
        <div key={crypto.randomUUID()}>
          {note.text} {note.type}
        </div>
      ))}
    </>
  );
}

export default NotesList;
