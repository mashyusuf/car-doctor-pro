"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiShoppingBag2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {
  const session = useSession();
  console.log(session);

  const navItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Services',
      path: '/services'
    },
    {
      title: 'Blogs',
      path: '/blog'
    },
    {
      title: 'My Bookings',
      path: '/my-bookings'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ];

  return (
    <div className="bg-white text-black font-bold shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar flex justify-between items-center py-4">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="block px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href={'/'}>
              <Image src='/assets/logo.svg' height={60} width={90} alt="Company Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className='flex items-center space-x-8'>
              {navItems.map((item) => (
                <Link href={item.path} key={item.path} className="transition-colors hover:text-primary hover:font-bold">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-end">
            <div className='flex items-center space-x-4'>
              <RiShoppingBag2Fill className='text-2xl hover:text-primary transition-colors' />
              <GoSearch className='text-2xl hover:text-primary transition-colors' />
              <a className="btn btn-primary btn-outline px-8">Appointment</a>
              { session?.status === 'loading' &&
            <h6>Loading....</h6>
            }
          { session?.status === 'unauthenticated' &&
            <Link href="/login" className="btn btn-primary px-8">Login</Link>
            }
          { session?.status === 'authenticated' &&
            <button className="btn btn-outline btn-primary px-8" onClick={() => signOut()}>Logout</button>
            }
            </div>
          </div>
          <div className='ml-5'>
            {session?.data?.user?.image && (
              <Image
                alt={session?.data?.user?.name || 'User Profile'}
                src={session?.data?.user?.image}
                height={70}
                width={70}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
