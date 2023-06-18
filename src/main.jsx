import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AddHabitProvider from "./contexts/AddHabitProvider.jsx";
import HabitsProvider from "./contexts/HabitsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitsProvider>
        <AddHabitProvider>
          <App />
        </AddHabitProvider>
      </HabitsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
