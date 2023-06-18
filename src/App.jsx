import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Header from "./components/Header";
import { useState } from "react";
import AddHabitModal from "./components/AddHabitModal";
import { useAddModal } from "./contexts/AddHabitProvider";

function App() {
  const { addHabit } = useAddModal();
  return (
    <div className="relative">
      <Header />
      {addHabit && <AddHabitModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
