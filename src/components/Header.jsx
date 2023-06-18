import { Link } from "react-router-dom";
import { useAddModal } from "../contexts/AddHabitProvider";

export default function Header() {
  const { openModal } = useAddModal();
  return (
    <header className="flex justify-between border-b p-4">
      <h1>HabitFlow</h1>
      <section className="flex gap-4">
        <button onClick={openModal}>Add new Habit</button>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/archive">Archive</Link>
        </nav>
      </section>
    </header>
  );
}
