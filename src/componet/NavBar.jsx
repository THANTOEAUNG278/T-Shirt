import { NavLink } from "react-router-dom"

const NavBar = () =>{
  return (
    <div>
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"page"} >Pages</NavLink>
      <NavLink to={"popular"} >Populars</NavLink>
      <NavLink to={"about"} >About</NavLink>

    </div>
  )
}
export default NavBar;