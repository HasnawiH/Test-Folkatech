import React from 'react'
import IconDropdown from "../../assets/images/dropdown.png"

const SubNavbar = () => {
    return (
        <div className="h-[60px] bg-[#F5F5F5] px-10">
            <div className="uppercase bg-[#EB3F36] text-white h-full w-[212px] flex justify-center items-center">BELANJA <img className="pl-2" src={IconDropdown} alt="" /></div>
        </div>
    )
}

export default SubNavbar