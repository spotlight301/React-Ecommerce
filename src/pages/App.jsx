import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-primary w-full max-w-[1440px]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;