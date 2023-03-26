import { useState } from "react";
import {
  saveNewEntryToFirebase,
  updateEntryText,
} from "~/firebase/firebaseContentManagement";

function EntryTextField({ text, id }: { text: string; id: string }) {
  const [currentText, setCurrentText] = useState(text);

  return (
    <input
      type="text"
      value={currentText}
      // timeout to save?
      onChange={(event) => setCurrentText(event.currentTarget.value)}
      onBlur={async () =>{
          await updateEntryText(id, currentText)
          console.log("Successfully updated!")
        } }
      className="flex-1 bg-transparent outline-none"
      onKeyDown={(event) => {
        if (event.key === "Enter")
          void saveNewEntryToFirebase("text", "NOTE", id);
      }}
    />
  );
}

export default EntryTextField;
