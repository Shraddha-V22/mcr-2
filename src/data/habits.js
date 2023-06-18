import { v4 as uuid } from "uuid";

export const habits = [
  {
    id: uuid(),
    name: "meditate",
    repeat: "daily",
    goal: "1 times daily",
    timeOfDay: "any",
    startDate: "today",
    archived: false,
  },
  {
    id: uuid(),
    name: "drink water",
    repeat: "daily",
    goal: "24 times daily",
    timeOfDay: "any",
    startDate: "today",
    archived: false,
  },
  {
    id: uuid(),
    name: "running",
    repeat: "daily",
    goal: "1 times daily",
    timeOfDay: "morning",
    startDate: "today",
    archived: false,
  },
];
