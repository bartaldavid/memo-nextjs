"use client";

import { useState } from "react";
import determineEntryType from "~/util/determineEntryType";
import { saveNewEntryToFirebase } from "~/firebase/firebaseContentManagement";

async function saveEntry(text: string) {
  const { newText, type } = determineEntryType(text);

  await saveNewEntryToFirebase(newText, type);
}

function Input() {
  const [inputText, setInputText] = useState("");

  return (
    <form
      className="flex justify-center p-5"
      onSubmit={(event) => {
        event.preventDefault();
        void saveEntry(inputText).then(() => setInputText(""));
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.currentTarget.value)}
        className="w-72 border-none bg-slate-50 active:border-none"
      />
      <button className="bg-slate-200 p-2">Send!</button>
    </form>
  );
}

export default Input;
