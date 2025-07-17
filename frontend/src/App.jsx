import { Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import PickUp from "./Pages/PickUp"
import Prescriptions from "./Pages/Prescriptions"
import InputAquire from "./Pages/InputAquire"
import Login from "./Pages/Login"
import PrivateRoute from "./routes/PrivateRoute"

function App() {

  return (
    <div >

      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/register" element={<Register />} />

        <Route path="/pickup" element={
           <PrivateRoute>  <PickUp />  </PrivateRoute> } />

        <Route path="/input" element={ 
          <PrivateRoute>  <InputAquire />  </PrivateRoute> } />

        <Route path="/prescriptions" element={
           <PrivateRoute>  <Prescriptions />  </PrivateRoute> } />

      </Routes>

    </div>
  )
}

export default App
