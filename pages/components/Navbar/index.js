import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-24 pt-16 absolute top-0 left-0 w-full">
      <Link href="/" className="flex items-center gap-4">
        <div className="flex flex-col justify-center items-center p-2 w-12 h-12 gap-2.5 rounded-full bg-[#4397A4]"></div>
        <div className="not-italic font-bold text-2xl text-[#486A6F]">Buildit</div>
      </Link>
      <div>
        <ul className="flex items-center space-x-10">
          <Link href="/about" className="not-italic font-medium text-base leading-8 text-gray-600">About</Link>
          <Link href="/service"  className="not-italic font-medium text-base leading-8 text-gray-600">Services </Link>
          <Link href="/project"  className="not-italic font-medium text-base leading-8 text-gray-600">Projects</Link>
          <Link href="/contact"  className="not-italic font-medium text-base leading-8 text-gray-600">Contact</Link>
        </ul>
      </div>
        <div>
          <button className="flex flex-row justify-center items-center py-2 px-6 w-40 h-10 gap-2.5 bg-[#4397A4] not-italic font-bold text-sm leading-5 text-gray-100 rounded">Need a project?</button>
        </div>
    </div>
  );
};

export default Navbar;
