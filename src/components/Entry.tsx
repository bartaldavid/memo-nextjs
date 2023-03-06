import { Entry } from "~/util/EntrySchema";

function Entry({ entry }: { entry: Entry }) {
  return (
    <div className="flex gap-2 bg-slate-50">
      {entry.type === "TASK" && <input type="checkbox" name="" id="" />}
      <span>{entry.type}</span>
      <span contentEditable className="flex-1 hover:bg-slate-200">
        {entry.text}
      </span>
      <span>{entry.createdAt?.toDate().toDateString() ?? "No date"}</span>
      <button className="text-red-500">Delete</button>
    </div>
  );
}

export default Entry;
