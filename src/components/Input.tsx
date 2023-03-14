"use client";

import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import determineEntryType from "~/util/determineEntryType";
import { saveEntryToFirebase } from "~/firebase/firebaseContentManagement";

async function saveEntry(text: string) {
  const entry = determineEntryType(text);
  await saveEntryToFirebase({ ...entry, createdAt: Timestamp.now() });
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
      <button
        onClick={() => {
          void saveEntry(inputText).then(() => setInputText(""));
        }}
      >
        Send!
      </button>
    </div>
  );
}

export default Input;
