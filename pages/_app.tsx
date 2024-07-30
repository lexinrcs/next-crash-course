// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import "../styles/global.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

// Define the App component
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div  className='flex flex-col mx-6'>
      <div className='mt-8 flex justify-between items-center mb-8'>
        <h1 className='text-5xl font-poppins font-bold bg-yellow-400 p-4 rounded-full'>OurSite</h1>
        
        <nav className='font-poppins'>
            <ul className='hidden md:flex space-x-4'>
                <li>
                    <Link className={router.pathname === '/' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/'}>Home</Link>
                </li>

                <li>
                    <Link  className={router.pathname === '/about' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/about'}>About</Link>
                </li>

                <li>
                    <Link  className={router.pathname === '/blog' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/blog'}>Blog</Link>
                </li>

                <li>
                    <Link  className={router.pathname === '/contact' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/'}>Contact Us</Link>
                </li>

                <li>
                    <Link  className={router.pathname === '/meet' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/'}>Meet the Team</Link>
                </li>
            </ul>
        </nav>
        <GiHamburgerMenu className='text-yellow-400 md:hidden text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
        
      </div>
      <div className="md:hidden font-poppins">
            <div id="menu"  className={`absolute ${isOpen ? 'flex' : 'hidden'} max-w-fit px-6 py-8
              flex-col items-center space-y-8 rounded-xl font-bold bg-white sm:w-auto sm:self-center right-6 drop-shadow-lg`}>
               <ul className='space-y-4'>
                    <li className=''>
                        <Link className={router.pathname === '/' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-500'} href={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link  className={router.pathname === '/about' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link  className={router.pathname === '/blog' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/blog'}>Blog</Link>
                    </li>

                    <li>
                        <Link  className={router.pathname === '/contact' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/'}>Contact Us</Link>
                    </li>

                    <li>
                        <Link  className={router.pathname === '/meet' ? 'text-yellow-800 underline font-bold' : 'text-black hover:text-yellow-700'} href={'/'}>Meet the Team</Link>
                    </li>
                </ul>
            </div>
        </div>
            
      <Component {...pageProps} className="component" />
      <footer className='bg-yellow-400 mt-8'>
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            Footer
        </div>
      </footer>
    </div>
  );
};

export default MyApp;