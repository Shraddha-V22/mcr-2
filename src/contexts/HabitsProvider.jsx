import { useReducer } from "react";
import { createContext } from "react";
import { habitsReducer } from "../reducers/habitsReducer";
import { habits } from "../data/habits";
import { useContext } from "react";

const HabitsContext = createContext();

const initialHabits = {
  habits: [...habits],
};

export default function HabitsProvider({ children }) {
  const [habitsData, habitsDispatch] = useReducer(habitsReducer, initialHabits);
  return (
    <HabitsContext.Provider value={{ habitsData, habitsDispatch }}>
      {children}
    </HabitsContext.Provider>
  );
}

export const useHabits = () => useContext(HabitsContext);
