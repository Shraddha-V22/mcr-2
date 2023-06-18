import React from "react";
import { useAddModal } from "../contexts/AddHabitProvider";
import { useState } from "react";
import { useHabits } from "../contexts/HabitsProvider";
import { HABITS } from "../reducerTypes";
import { formatDate } from "../utils/formatDate";
import { useEffect } from "react";

export default function AddHabitModal({ edit, habit }) {
  const { closeModal } = useAddModal();
  const { habitsDispatch } = useHabits();
  const [habitInput, setHabitInput] = useState({
    name: "",
    repeat: "daily",
    goal: "1",
    timeOfDay: "any",
    startDay: formatDate(),
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setHabitInput((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   edit && setHabitInput(habit);
  // }, [edit]);

  return (
    <section className="fixed left-0 right-0 top-0 z-10 grid h-[100vh] w-[100vw] place-items-center bg-black/20">
      <section className="w-[500px] border border-black bg-white p-4">
        <h2>new habit</h2>
        <form className="flex flex-col gap-4">
          <section className="flex flex-col gap-4">
            <LabelInput label="Name" id="habit-name">
              <input
                type="text"
                id="habit-name"
                name="name"
                className="border outline-none"
                onChange={inputChangeHandler}
                value={habitInput.name}
              />
            </LabelInput>
            <section className="grid grid-cols-2 grid-rows-2 gap-4">
              <LabelInput label="repeat" id="repeat">
                <select
                  onChange={inputChangeHandler}
                  className="border p-1 outline-none"
                  name="repeat"
                  id="repeat"
                  value={habitInput.repeat}
                >
                  <option value="daily">daily</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                </select>
              </LabelInput>
              <LabelInput label="goal" id="goal">
                <select
                  onChange={inputChangeHandler}
                  className="border p-1 outline-none"
                  name="goal"
                  id="goal"
                  value={habitInput.goal}
                >
                  <option value="1">1 times {habitInput.repeat}</option>
                  <option value="2">2 times {habitInput.repeat}</option>
                  <option value="3">3 times {habitInput.repeat}</option>
                </select>
              </LabelInput>
              <LabelInput label="time of day" id="timeOfDay">
                <select
                  onChange={inputChangeHandler}
                  className="border p-1 outline-none"
                  name="timeOfDay"
                  id="timeOfDay"
                  value={habitInput.timeOfDay}
                >
                  <option value="any">any time</option>
                  <option value="morning">morning</option>
                  <option value="afternoon">afternoon</option>
                  <option value="evening">evening</option>
                  <option value="night">night</option>
                </select>
              </LabelInput>
              <LabelInput label="start date" id="startDay">
                <input
                  onChange={inputChangeHandler}
                  type="date"
                  name="startDay"
                  id="startDay"
                  className="border outline-none"
                  value={habitInput.startDay}
                />
              </LabelInput>
            </section>
          </section>
          <div className="flex gap-4 self-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                habitsDispatch({
                  type: HABITS.ADD_HABIT,
                  payload: habitInput,
                });
                closeModal();
              }}
              className="rounded-md border px-2 py-1"
            >
              Save
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="rounded-md border px-2 py-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

function LabelInput({ children, label, id }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
