import defaultSettings from "./defaultSettings";
import { type EntryType } from "./EntrySchema";

// TODO replace defaultsettings with settings stored in Firestore
// FIXME clean code: functions should only do one thing

function determineEntryType(text: string): {
  newText: string;
  type: EntryType;
} {
  const trimmedText = text.trim();

  const firstChar = trimmedText[0];
  if (!firstChar) throw new Error("Empty string");

  const typeFound = defaultSettings.types.find(
    (type) => type.selector === firstChar
  );

  if (!typeFound)
    return { newText: trimmedText, type: defaultSettings.defaultEntryType };

  return { newText: trimmedText.replace(firstChar, ""), type: typeFound.name };
}
export default determineEntryType;
