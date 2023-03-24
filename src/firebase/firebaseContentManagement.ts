import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { type EntryType, type Entry } from "../util/EntrySchema";
import { db } from "./config";

export async function saveNewEntryToFirebase(text: string, type: EntryType) {
  const docRef = await addDoc(collection(db, "entries"), {
    text,
    type,
    createdAt: Timestamp.now(),
  });
  console.log("Document written with id: ", docRef.id);
}

// TODO error handling
export async function getEntries() {
  const q = query(collection(db, "entries"), orderBy("createdAt"));
  const snapshot = await getDocs(q);
  const entries: Entry[] = [];
  snapshot.forEach((doc) => {
    entries.push({ ...doc.data(), id: doc.id } as Entry);
  });
  return entries;
}
