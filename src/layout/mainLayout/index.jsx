import { Outlet } from "react-router-dom"
import Footer from "../../components/Common/Footer/Footer"
import NavBar from "../../components/Common/Navbar/NavBar"

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />

    </>
  )
}

export default MainLayout
