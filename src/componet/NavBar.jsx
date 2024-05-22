import { NavLink } from "react-router-dom"
import Logo from "./Logo";
import LoginAndSerBar from "./LoginAndSerBar";

const NavBar = () =>{
  return (
    <div className="flex justify-between items-center bg-slate-400 h-14 w-full px-14 fixed">
      <div>
        <Logo/>
      </div>
      <div className="flex gap-3 text-xl font-bold">
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"popular"} >Populars</NavLink>
        <NavLink to={"page"} >Pages</NavLink>
        <NavLink to={"about"} >About</NavLink>
      </div>
      <div>
        <LoginAndSerBar/>
      </div>
    </div>
  )
}
export default NavBar;