import { useMemo } from "react";
import { useHabits } from "../contexts/HabitsProvider";
import HabitCard from "../components/HabitCard";

export default function Archive() {
  const {
    habitsData: { habits },
  } = useHabits();

  const archived = useMemo(() => {
    return habits.filter(({ archived }) => archived);
  }, [habits]);

  return (
    <section>
      {archived?.length ? (
        archived?.map((habit) => <HabitCard key={key.id} habit={habit} />)
      ) : (
        <p>No archived habits!</p>
      )}
    </section>
  );
}
