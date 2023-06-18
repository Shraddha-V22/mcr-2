import { useAddModal } from "../contexts/AddHabitProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { useHabits } from "../contexts/HabitsProvider";
import { HABITS } from "../reducerTypes";
import { useState } from "react";
import AddHabitModal from "./AddHabitModal";

export default function HabitCard({ newHabit, habit }) {
  const { habitsDispatch } = useHabits();
  const [openModal, setOpenModal] = useState("close");

  const actionHandler = (e, func) => {
    e.stopPropagation();
    func;
  };

  return (
    <section
      onClick={() => (newHabit ? setOpenModal("add") : setOpenModal("edit"))}
      className="flex h-[100px] w-[200px] flex-col justify-between rounded-md border border-black p-4"
    >
      <h3 className="capitalize">
        {newHabit ? "Add a new Habit" : habit?.name}
      </h3>
      {!newHabit && (
        <div className="flex gap-4 self-end">
          <button onClick={(e) => actionHandler(e, openEditModal())}>
            <FontAwesomeIcon icon={faPen} title="Edit" />
          </button>
          <button
            onClick={(e) =>
              actionHandler(
                e,
                habitsDispatch({
                  type: HABITS.ARCHIVE_HABIT,
                  payload: habit?.id,
                })
              )
            }
          >
            <FontAwesomeIcon icon={faInbox} title="Archive" />
          </button>
          <button
            onClick={(e) =>
              actionHandler(
                e,
                habitsDispatch({
                  type: HABITS.DELETE_HABIT,
                  payload: habit?.id,
                })
              )
            }
          >
            <FontAwesomeIcon icon={faTrash} title="Delete" />
          </button>
        </div>
      )}
      {openModal === "add" ? (
        <AddHabitModal />
      ) : openModal === "edit" ? (
        <AddHabitModal edit habit={habit} setOpenModal={setOpenModal} />
      ) : null}
    </section>
  );
}
