import { addDoc, collection } from "firebase/firestore";
import { type EntryType } from "./EntrySchema";
import { db } from "./firebaseSetup";

export async function saveEntryToFirebase(entry: EntryType) {
  const docRef = await addDoc(collection(db, "entries"), entry);
  console.log("Document written with id: ", docRef.id);
}
