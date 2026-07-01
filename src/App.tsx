import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import LaCadena from "./views/LaCadena"

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <Home />}></Route>
        <Route path="/la-cadena" element= { <LaCadena />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
