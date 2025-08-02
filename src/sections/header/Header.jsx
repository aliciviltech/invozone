import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Camera, ChevronDown } from 'lucide-react'
import Hamburger from 'hamburger-react'


const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`z-100 flex justify-between items-center px-4 md:px-10 py-6 fixed z-10 w-full ${isScrolled ? 'bg-white text-black' : 'text-white'}  `}>
            {/* ==============logo============ */}
            <div>
                <img src={`/${isScrolled ? 'logo-blue.png' : 'logo.png'}`} alt="logo" />
            </div>


            {/* =============Navigation========== */}
            <div className={`absolute top-[100px] ${showMenu ? 'left-0' : 'left-[100%]'} transition-all flex flex-col justify-evenly items-start pl-10 w-screen h-[calc(100vh-100px)] text-black bg-white
            xl:static ${isScrolled ? 'xl:text-black' : 'text-white'} xl:bg-transparent xl:flex xl:flex-row xl:gap-5 xl:h-fit xl:w-fit xl:justify-center xl:pl-none xl:items-center
            `}>
                <Link className='flex group relative' to={'/'}>
                    What We Do
                    <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' />
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className='flex  group relative' to={'/'}> Who We Serve <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' /> 
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className='flex  group relative' to={'/'}>How We Engage <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' /> 
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className='flex  group relative' to={'/'}> Hire Dev <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' /> 
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className='flex  group relative' to={'/'}> Company <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' /> 
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className='flex  group relative' to={'/'}> Careers <ChevronDown size={20} strokeWidth={1} className='relative top-[4px]' /> 
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-acolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* ============= button========== */}
                <div className='flex xl:hidden'>
                    <PrimaryButton text={'Contact us'} />
                </div>
            </div>


            {/* =============button========== */}
            <div className='hidden xl:flex'>
                <PrimaryButton text={'Contact us'} />
            </div>

            {/* =============hamburg========== */}
            <div className='xl:hidden' onClick={() => setShowMenu(!showMenu)}>
                <Hamburger direction='right' size={26} />
            </div>

        </div>
    )
}

export default Header