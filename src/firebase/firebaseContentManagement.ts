import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  // getDocs,
  // orderBy,
  // query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { type EntryType, type Entry } from "../util/EntrySchema";
import { db } from "./config";

export const ENTRIES_COLLECTION = "entries";

export async function saveNewEntryToFirebase(
  text: string,
  type: EntryType,
  parentId?: string
) {
  const entry = {
    text,
    type,
    ...(parentId && { parentId }),
    createdAt: Timestamp.now(),
  };
  const docRef = await addDoc(collection(db, ENTRIES_COLLECTION), entry);
  console.log("Document written with id: ", docRef.id);
}

export async function toggleTaskCompletion(entry: Entry) {
  if (entry.type !== "TASK") throw new Error("Not a task entry");

  const taskRef = doc(db, ENTRIES_COLLECTION, entry.id);
  await updateDoc(taskRef, { completed: !entry.completed });
}

export async function deleteEntry(entry: Entry) {
  await deleteDoc(doc(db, ENTRIES_COLLECTION, entry.id));
}

export async function updateEntryText(id: string, newText: string) {
  const taskRef = doc(db, ENTRIES_COLLECTION, id);
  await updateDoc(taskRef, { text: newText });
}
