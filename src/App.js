import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Appointments from "./components/appointments/appointments";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/doctors" element={<Appointments />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
