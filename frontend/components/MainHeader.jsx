import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';

const MainHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={`w-full h-[50px] md:h-[50px] bg-gray-100 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper classname="h-[60px] flex justify-between items-center">
                <img src='/air-jordan-logo.png' className='w-[30px] md:w-[30px]' />
                <div className='flex items-center text-black'>
                    <Link href="">
                        <div className='w-4 md:w-20 h-8 md:h-12 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            Stores
                        </div>
                    </Link> |
                    <Link href="">
                        <div className='w-4 md:w-20 h-8 md:h-12 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            Help
                        </div>
                    </Link> |
                    <Link href="">
                        <div className='w-4 md:w-20 h-8 md:h-12 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            Join Us
                        </div>
                    </Link> |
                    <Link href="">
                        <div className='w-4 md:w-20 h-8 md:h-12 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            Sign In
                        </div>
                    </Link>
                </div>
            </Wrapper>
        </div>
    )
}

export default MainHeader;