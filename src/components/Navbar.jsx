'use client'
import Link from 'next/link';
import MyLink from './MyLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
  const { 
        data: session
    } = authClient.useSession()

   const user = session?.user;
   console.log(user);
  
    const links = <>
    <li><MyLink href="/">Home</MyLink></li>
    <li><MyLink href="/ideas">Ideas</MyLink></li>
    {user && <div className='flex items-center'> <li><MyLink href="/add-idea">Add Idea</MyLink></li>
    <li><MyLink href="/my-ideas">My Ideas</MyLink></li>
    <li><MyLink href="/my-interactions">My Interactions</MyLink></li>
    </div>}
    </>
    return (
        <div className='sticky z-10 top-0 shadow-sm bg-base-100'>
            <div className="navbar max-w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <h2 className="text-2xl font-bold text-[#448c74]">IdeaVault</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-500">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {!user && <Link href="/login">
        <button className="bg-[#448c74] text-white rounded-full py-2 px-4">LogIn</button>
    </Link>}
    { user && <div className="dropdown dropdown-end">
        <span className='text-sm'>{user?.name}</span>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-1">
          <li><Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} sizes='sm'/>
        <Avatar.Fallback>{user?.name.charAt[0]}</Avatar.Fallback>
      </Avatar></li>   
      </div>
      <Button onClick={async() => await authClient.signOut()} variant='danger' size='sm'>Log Out</Button>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link href="/profile" className="justify-between">
            Profile Management
          </Link>
        </li>
      </ul>
    </div>}
  </div>
</div>
        </div>
    );
};

export default Navbar;