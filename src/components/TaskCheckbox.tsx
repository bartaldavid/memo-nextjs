import { toggleTaskCompletion } from "~/firebase/firebaseContentManagement";
import { type Entry } from "~/util/EntrySchema";

function TaskCheckBox({ entry }: { entry: Entry }) {
  return (
    <input
      type="checkbox"
      defaultChecked={entry.completed}
      onChange={() => void toggleTaskCompletion(entry)}
    />
  );
}

export default TaskCheckBox;
