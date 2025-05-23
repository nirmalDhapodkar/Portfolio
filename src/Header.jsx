const Header = () =>{
 return(
    <header>
    <div className='h-20 w-full px-3 py-5 flex relative font-mono outline-2 outline-gray-400 bg-gray-500 backdrop-opacity-30 backdrop-blur-30 justify-between mb-2 shadow-sm'>
        <h1 className="text-white font-extrabold text-3xl inline-block">Portfolio</h1>
        
        {/*Navigation Menu*/}
        <nav className="justify-self-end text-white mx-4">
        <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
    </div>
    </header>
 );
};

export default Header;