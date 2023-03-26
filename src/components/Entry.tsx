import { deleteEntry } from "~/firebase/firebaseContentManagement";
import { Entry } from "~/util/EntrySchema";
import EntryTextField from "./EntryTextField";
import TaskCheckBox from "./TaskCheckbox";

function Entry({ entry }: { entry: Entry }) {
  return (
    <div className="flex gap-2  rounded bg-slate-50 p-2 hover:bg-slate-100">
      {entry.type === "TASK" && <TaskCheckBox entry={entry} />}

      <span>{entry.type}</span>

      {entry?.parentId && <span>CHILD</span>}
      <EntryTextField text={entry.text} id={entry.id} />

      <span className="text-slate-300">
        {entry.createdAtDateString ?? "No date"}
      </span>

      <button className="text-red-500" onClick={() => void deleteEntry(entry)}>
        Delete
      </button>
    </div>
  );
}

export default Entry;
