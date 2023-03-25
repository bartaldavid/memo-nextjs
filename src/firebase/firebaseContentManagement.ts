import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { type EntryType, type Entry } from "../util/EntrySchema";
import { db } from "./config";

const ENTRIES_COLLECTION = "entries";

export async function saveNewEntryToFirebase(text: string, type: EntryType) {
  const docRef = await addDoc(collection(db, ENTRIES_COLLECTION), {
    text,
    type,
    createdAt: Timestamp.now(),
  });
  console.log("Document written with id: ", docRef.id);
}

// TODO error handling
export async function getEntries() {
  const q = query(collection(db, ENTRIES_COLLECTION), orderBy("createdAt"));
  const snapshot = await getDocs(q);
  const entries: Entry[] = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as Entry;
  });
  return entries;
}

export async function toggleTaskCompletion(entry: Entry) {
  if (entry.type !== "TASK") throw new Error("Not a task entry");

  const taskRef = doc(db, ENTRIES_COLLECTION, entry.id);
  await updateDoc(taskRef, { completed: !entry.completed });
}

export async function deleteEntry(entry: Entry) {
  await deleteDoc(doc(db, ENTRIES_COLLECTION, entry.id));
}
