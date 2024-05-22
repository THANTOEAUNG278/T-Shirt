import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";

const Layout = () =>{
  return(
    <div>
      <NavBar/>
      <div className="py-16">
        <Outlet/>
      </div>
      
    </div>
  )
}
export default Layout;