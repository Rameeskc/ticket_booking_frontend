import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./router/User"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*"  element={<User/>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
