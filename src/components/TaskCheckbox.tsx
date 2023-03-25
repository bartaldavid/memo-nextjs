import { toggleTaskCompletion } from "~/firebase/firebaseContentManagement";
import { type Entry } from "~/util/EntrySchema";

function TaskCheckBox({ entry }: { entry: Entry }) {
  return (
    <input
      type="checkbox"
      checked={entry.completed}
      onChange={() => void toggleTaskCompletion(entry)}
      className="rounded"
    />
  );
}

export default TaskCheckBox;
