"use client";

import { FieldValue, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { type EntryType } from "~/util/EntrySchema";
import { saveEntryToFirebase } from "~/util/firebaseContentManagement";

const defaultNoteSetup: EntryType = {
  text: "",
  type: "NOTE",
};

async function saveEntry(text: string) {
  // TODO refractor this to make it cleaner
  if (text.trim().startsWith(".")) {
    await saveEntryToFirebase({ type: "TASK", text: text.replace(".", "") });
  } else {
    await saveEntryToFirebase({
      type: "NOTE",
      text: text,
      createdAt: Timestamp.now(),
    });
  }
}

function Input() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
      <button onClick={() => saveEntry(inputText)}>Send!</button>
    </div>
  );
}

export default Input;
