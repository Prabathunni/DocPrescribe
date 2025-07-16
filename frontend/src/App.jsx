import { Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import PickUp from "./Pages/PickUp"
import Prescriptions from "./Pages/Prescriptions"
import ViewPrescription from "./Components/ViewPrescription"
import InputAquire from "./Pages/InputAquire"
import Login from "./Pages/login"

function App() {

  return (
    <div id="mail-scroll-wrapper">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pickup" element={<PickUp />} />
        <Route path="/input" element={<InputAquire />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/view/prescription/:id" element={<ViewPrescription />} />
      </Routes>

    </div>
  )
}

export default App
