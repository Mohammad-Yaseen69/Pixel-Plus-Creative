import React, { useState } from 'react';
import Logo from "../assets/px-logoweb2.png"

const links = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Arts",
        link: "#arts"
    },
    {
        name: "Testimonials",
        link: "#testimonials"
    },
    {
        name: "Contact",
        link: "#contact"
    },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    return (
        <header className={`w-full sm:px-3   absolute top-0 left-0 z-10  text-white`}>
            <div className='w-full flex justify-between  items-center'>
                <div>
                    <img src={Logo} className='size-20 sm:size-28 object-cover flex-shrink-0 rounded-xl' alt="" />
                </div>
                <div className='flex gap-10 max-sm:hidden'>
                    {links.map((link, index) => (
                        <a key={index} href={link.link} className='before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 relative hover:before:w-full  cursor-pointer font-montserrat font-bold text-xl'>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className={`sm:hidden transition-all p-5  py-20 duration-200   flex flex-col w-[80%] bg-black items-start justify-start gap-11 h-screen absolute top-0 ${!isOpen ? "-right-[400px] " : "right-0"}`}>
                    {links.map((link, index) => (
                        <a key={index} href={link.link} className='before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 relative hover:before:w-full  cursor-pointer font-montserrat font-bold text-3xl'>
                            {link.name}
                        </a>
                    ))}
                </div>




                <div className='sm:hidden pr-3 z-40'>
                    <label  className="burger text-white" for="burger">
                        <input onClick={() => setIsOpen(!isOpen)} type="checkbox" id="burger" />
                            <span></span>
                            <span></span>
                            <span></span>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
