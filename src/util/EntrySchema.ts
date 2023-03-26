import { type Timestamp } from "firebase/firestore";

export type EntryType = "NOTE" | "EVENT" | "TASK" | "TITLE";

export type Entry = {
  id: string;
  // FIXME required?
  createdAt?: Timestamp;
  createdAtDate?: Date;
  createdAtDateString?: string;
  text: string;
  parentId?: string;
  // we'll see if we need the title type
  type: EntryType;
  position?: number;
  completed?: boolean;
};
