import { addDoc, collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { type Entry } from "../util/EntrySchema";
import { db } from "./config";

export async function saveEntryToFirebase(entry: Entry) {
  const docRef = await addDoc(collection(db, "entries"), entry);
  console.log("Document written with id: ", docRef.id);
}
// this is client side
export function listenToEntries() {
  const q = query(collection(db, "entries"), orderBy("createdAt"))

  const result: Entry[] = [];
  let error = null;

  try {
    // FIXME sometime we have to call unsubscribe
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // const entries = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        result.push({...doc.data(), id: doc.id } as Entry);
      })
    })
  } catch (error) {
    error = error;
  }

  return {result, error}
}

// this is server-side
// TODO error handling
export async function getEntries() {
  const q = query(collection(db, "entries"), orderBy("createdAt"));
  const snapshot = await getDocs(q);
  const entries: Entry[] = [];
  snapshot.forEach(doc => {
    entries.push(doc.data() as Entry);
  })
  return entries;
}