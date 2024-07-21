import React from 'react'
import IconUp from "../../assets/images/up.png"

const ListMenu = () => {
    const listMenus = [
        {
            category: "Origin",
            child: [
                {
                    name: "Aceh",
                    value: 8
                },
                {
                    name: "Semarang",
                    value: 3
                },
                {
                    name: "Bandung",
                    value: 10
                },
                {
                    name: "Jawa",
                    value: 1
                },
                {
                    name: "Amerika ",
                    value: 6
                },
                {
                    name: "Lain - Lain",
                    value: 8
                },
            ]
        },
        {
            category: "Species",
            child: [
                {
                    name: "Arabika",
                    value: 4
                },
                {
                    name: "Robusta",
                    value: 3
                },
                {
                    name: "Blend",
                    value: 5
                },
            ]
        },
        {
            category: "Roast Level",
            child: [
                {
                    name: "Light Roast",
                    value: 4
                },
                {
                    name: "Medium Roast",
                    value: 3
                },
                {
                    name: "Dark Roast",
                    value: 5
                },
                {
                    name: "Light to Medium Roast",
                    value: 5
                },
            ]
        },
        {
            category: "Tasted",
            child: [
                {
                    name: "Sweet",
                    value: 4
                },
                {
                    name: "Floral",
                    value: 3
                },
                {
                    name: "Fruity",
                    value: 5
                },
                {
                    name: "Nutty",
                    value: 5
                },
                {
                    name: "Cocoa",
                    value: 5
                },
                {
                    name: "Spices",
                    value: 5
                },
            ]
        },
        {
            category: "Processing",
            child: [
                {
                    name: "Honey White",
                    value: 4
                },
                {
                    name: "Natural",
                    value: 3
                },
                {
                    name: "Honey Gold",
                    value: 5
                },
                {
                    name: "Honey Yellow",
                    value: 5
                },
            ]
        }
    ]
    return (
        <div className="w-full mt-4">
            {listMenus.map((menu, index) => {
                return (
                    <div key={index} className="mb-8">
                        <div className="bg-[#F5F5F5] p-3 shadow-md flex justify-between items-center cursor-pointer">
                            <div>{menu.category}</div>
                            <img src={IconUp} alt="" />
                        </div>

                        {menu.child.map((item, ind) => {
                            return (
                                <div key={ind} className="flex justify-between items-center px-3 mt-3">
                                    <div className="flex items-center gap-2"> <input className="cursor-pointer" type="checkbox" /> {item.name}</div>
                                    <div>({item.value})</div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ListMenu