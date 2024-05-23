import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
const LoginAndSerBar = () => {
  const [SearchBar,setSearchBar] = useState(false);

  const handleSearchClick = () =>{
    setSearchBar(!SearchBar)
  }
  return(
    <div className="flex items-center justify-center gap-4 text-xl">
      <div className="flex gap-2 justify-center items-center">
        {SearchBar && (
        <div className="relative">
          <input type="text" placeholder="Search..." 
          className="px-1 py-[3px] rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-200"
          />
        </div>
        )}
        <div className="hover:scale-[.9] text-2xl cursor-pointer" onClick={handleSearchClick} >
          <LuSearch/>
        </div>
      </div>

      <div className="hover:scale-[.9] text-2xl cursor-pointer">
        <VscAccount/>
      </div>
      <div className="hover:scale-[.9] text-2xl cursor-pointer">
        <BsCart4/>
      </div>
      
    </div>
  )
}
export default LoginAndSerBar;
