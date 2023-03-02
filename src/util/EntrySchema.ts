import { type Timestamp } from "firebase/firestore";

export type EntryType = {
  id?: string;
  createdAt?: Timestamp;
  text: string;
  parentId?: string;
  // we'll see if we need the title type
  type: "NOTE" | "EVENT" | "TASK" | "TITLE";
  position?: number;
};
