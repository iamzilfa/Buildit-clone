<<<<<<< HEAD
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-32">
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center items-center p-2 w-12 h-12 gap-2.5 rounded-full bg-[#4397A4]"></div>
        <p className="not-italic font-bold text-2xl text-[#486A6F]">Buildit</p>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="not-italic font-medium text-base leading-8 text-gray-600">About</li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">Services </li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">Projects</li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">Contact</li>
        </ul>
      </div>
        <div>
          <button className="flex flex-row justify-center items-center py-2 px-6 w-40 h-10 gap-2.5 bg-[#4397A4] not-italic font-bold text-sm leading-5 text-gray-100 rounded">Need a project?</button>
        </div>
    </div>
  );
};

export default Navbar;
=======
import Link from 'next/link'

const Navbar = () => {
  return ( 
    <div className='flex'>
      <div>
        <div className="flex flex-col justify-center items-center p-2 w-12 h-12 gap-2.5 bg-[#4397A4]"></div>
        <Link href="/"><a className='not-italic font-bold text-2xl flex items-center text-center text-gray-700'>Buildit</a></Link>
      </div>
      <div>   
      <Link href="/about"><a className='not-italic font-medium text-base leading-8 text-gray-600'>About</a></Link>
      <Link href=""><a className='not-italic font-medium text-base leading-8 text-gray-600'>Services </a></Link>
      <Link href=""><a className='not-italic font-medium text-base leading-8 text-gray-600'>Projects</a></Link>
      <Link href=""><a className='not-italic font-medium text-base leading-8 text-gray-600'>Contact</a></Link>
      </div>
      <button className="flex flex-row justify-center items-center w-40 h-10 py-2 px-6 not-italic font-bold text-base leading-5 text-gray-100 bg-[ #4397A4]">Need a project?</button>
    </div>
   );
}
 
export default Navbar;
>>>>>>> 2702b8c0e20e35cd7cd2823985680f9f2fe8feed
