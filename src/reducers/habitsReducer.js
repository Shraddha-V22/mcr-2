import { HABITS } from "../reducerTypes";
import { v4 as uuid } from "uuid";

export const habitsReducer = (state, { type, payload }) => {
  switch (type) {
    case HABITS.ADD_HABIT:
      return {
        ...state,
        habits: [{ id: uuid(), archived: false, ...payload }, ...state.habits],
      };
    case HABITS.DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== payload),
      };
    case HABITS.ARCHIVE_HABIT:
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === payload ? { ...habit, archived: !habit.archived } : habit
        ),
      };
    default:
      return state;
  }
};
