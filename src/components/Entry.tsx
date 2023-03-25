import { deleteEntry } from "~/firebase/firebaseContentManagement";
import { Entry } from "~/util/EntrySchema";
import TaskCheckBox from "./TaskCheckbox";

function Entry({ entry }: { entry: Entry }) {
  return (
    <div className="flex gap-2 bg-slate-50">
      {entry.type === "TASK" && <TaskCheckBox entry={entry} />}
      <span>{entry.type}</span>
      <span className="flex-1 hover:bg-slate-200">{entry.text}</span>
      <span>{entry.createdAt?.toDate?.().toDateString() ?? "No date"}</span>
      <button className="text-red-500" onClick={() => void deleteEntry(entry)}>
        Delete
      </button>
    </div>
  );
}

export default Entry;
