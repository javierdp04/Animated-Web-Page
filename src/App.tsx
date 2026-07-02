import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import LaCadena from "./views/LaCadena"
import NavBar from "./components/navBar"
import "./app.css"

function App() {

  return (
    <div id="container">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/la-cadena" element= { <LaCadena /> }></Route>
      </Routes>
    </div>
  )
} 

export default App;
