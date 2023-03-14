import EntryComponent from "./Entry";
import { getEntries } from "~/firebase/firebaseContentManagement";


// this should be a server component fetching and rendering entries
// TODO hydrate this with onsnapshot to listen to realtime updates
async function NotesList() {
  const entries = await getEntries();
  // TODO error handling
  // if (error) return <div>Error occured during fetching, {error}</div>
  return (
    <div className="flex max-w-lg flex-col gap-2">
      {entries?.map((note) => (
        // use id of the note instead
        <EntryComponent key={crypto.randomUUID()} entry={note} />
      ))}
    </div>
  );
}

export default NotesList;
