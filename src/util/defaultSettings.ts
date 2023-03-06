import { type EntryType } from "./EntrySchema";

type Settings = {
  types: {
    name: EntryType;
    selector: string;
  }[];
  defaultEntryType: EntryType;
};

const defaultSettings: Settings = {
  types: [
    {
      name: "TASK",
      selector: ".",
    },
    {
      name: "NOTE",
      selector: "-",
    },
    {
      name: "EVENT",
      selector: ",",
    },
  ],
  defaultEntryType: "NOTE",
};

export default defaultSettings;
