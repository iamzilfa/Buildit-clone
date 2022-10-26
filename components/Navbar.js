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