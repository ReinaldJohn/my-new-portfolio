import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="container mx-auto flex justify-center drop-shadow-xl border-b border-white">
          <div className="w-full flex flex-wrap justify-between items-center p-4">
            <div className="text-lg font-semibold">Reinald John Vibar</div>
            <div className="hidden lg:block">
              <ul className="flex flex-row gap-8 hover:underline-offset-4">
                <li>
                  <a href="/" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="block lg:hidden" onClick={toggleMenu}>
              <img
                src="./images/hamburger.png"
                width="24"
                height="24"
                alt=""
                id="hamburger-icon"
              />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          id="sidebar"
          ref={sidebarRef}
          className={`fixed left-0 top-0 h-full w-[50%]  bg-white dark:bg-[#6d28d9] dark:text-white dark:border-r-black z-50 transition-opacity transition-transform duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center py-6">
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed left-0 top-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
