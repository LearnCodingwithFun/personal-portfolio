// components/HamburgerMenu.js
import { Links } from '@/constant';
import Link from 'next/link';
import { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative sm:hidden">
            <div
                className="fixed top-4 right-4 z-50 cursor-pointer"
                onClick={toggleMenu}
            >
                <div className="bg-primary/80 p-2 rounded-lg">
                    <span className="block w-6 h-1 mb-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 mb-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-14 rounded-md w-32 right-3   bg-primary/100 border  border-slate-800 p-5 bg-opacity-30 z-40">
                    <div className="flex flex-col transition-all  gap-y-3 text-white  ">
                        {Links.map((link) => (
                            <Link
                                onClick={toggleMenu}
                                key={link.name}
                                href={`${link.link}`}
                                className="hover:text-blue-300 transition font-medium  text-[10px]  sm:text-xl"
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div >
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
