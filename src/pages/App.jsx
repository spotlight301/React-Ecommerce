import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="mt-[4rem] min-h-screen flex flex-col justify-between">
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App
