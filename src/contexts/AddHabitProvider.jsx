import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AddHabitContext = createContext(false);

export default function AddHabitProvider({ children }) {
  const [addHabit, setAddHabit] = useState(false);

  const closeModal = () => setAddHabit(false);
  const openModal = () => setAddHabit(true);

  return (
    <AddHabitContext.Provider value={{ addHabit, closeModal, openModal }}>
      {children}
    </AddHabitContext.Provider>
  );
}

export const useAddModal = () => useContext(AddHabitContext);
