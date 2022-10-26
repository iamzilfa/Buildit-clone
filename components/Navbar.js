const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-32">
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center items-center p-2 w-12 h-12 gap-2.5 rounded-full bg-[#4397A4]"></div>
        <p className="not-italic font-bold text-2xl text-[#486A6F]">Buildit</p>
      </div>
      <div>
        <ul className="flex items-center space-x-10">
          <a className="not-italic font-medium text-base leading-8 text-gray-600">About</a>
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
