import HabitCard from "../components/HabitCard";
import { useHabits } from "../contexts/HabitsProvider";

export default function Home() {
  const {
    habitsData: { habits },
  } = useHabits();
  return (
    <section className="mx-auto my-8 grid w-[432px] grid-cols-2 gap-8">
      <HabitCard habitName="Add a new Habit" newHabit />
      {habits?.map((habit) => (
        <HabitCard key={habit.id} edit habit={habit} />
      ))}
    </section>
  );
}
