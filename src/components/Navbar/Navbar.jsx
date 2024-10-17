import {FaLeaf} from "react-icons/fa";
import React, {useState} from "react";
import {MdMenu, MdOutlineShoppingCart} from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const NavbarMenu = [
    {
        id:1,
        title:"Home",
        link:"/",
    },{
        id:2,
        title:"Products",
        link:"#",
    },{
        id:3,
        title:"About",
        link:"#",
    },{
        id:4,
        title:"Shop",
        link:"#",
    },{
        id:5,
        title:"Contacts",
        link:"#",
    },
]

const Navbar = ()=>{
    const [open,setOpen] = useState(false);
    return <>
        <nav>
            <div className="container flex justify-between items-center py-4 md:pt-4">
                { /* Logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <p className="text-primary">Fruits</p>  {/* Should be #de2c4d */}
                    <p className="text-secondary">Store</p>  {/* Should be #fb923c */}
                    <FaLeaf className="text-green-500"/>
                </div>
                {/* menu section */}
                <div className="hidden md:block">
                    <ul className=" flex items-center gap-6 text-gray-600">
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id}
                                className="inline-block py-1 px-3 text-xl hover:text-secondary transition duration-300 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">
                                <a href={menu.link}>{menu.title}</a>
                            </li>
                        ))}
                        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-290">
                            <MdOutlineShoppingCart/>
                        </button>
                    </ul>
                </div>
                {/* Mobile Hamburger Menu section */}
                <div className="md:hidden" onClick={()=>setOpen(!open)}>
                    <MdMenu className="text-4xl"/>
                </div>
            </div>
        </nav>
        {/*Mobile Menu Section*/}
        <ResponsiveMenu open={open} NavbarMenu = {NavbarMenu} />

    </>
};


export default Navbar;