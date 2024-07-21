import React from 'react'
import IconUser from "../../assets/images/user.png";
import IconBag from "../../assets/images/shopping-bag.png";
import IconWhitelist from "../../assets/images/whitelist.png";
import IconSearch from "../../assets/images/search.png"

const Navbar = () => {
  return (
    <nav className="px-10 h-[80px] flex justify-end items-center">
      <div className=" flex items-center gap-6">
        <div className="flex items-center w-[500px]">
          <input placeholder='Cari produk' className="p-3 w-full shadow-sm rounded-l-lg" />
          <div className="bg-[#EB3F36] text-white h-[50px] flex justify-center items-center p-4 cursor-pointer rounded-r-lg"> <img src={IconSearch} alt="" /> </div>
        </div>
        <img src={IconWhitelist} alt="" className="h-6" />
        <img src={IconBag} alt="" className="h-6" />
        <img src={IconUser} alt="" className="h-6" />
      </div>
    </nav>
  )
}

export default Navbar