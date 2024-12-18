import { useCallback, useState } from "react";
import { useLocation } from "react-router";
import { HashLink } from 'react-router-hash-link';

// const menus = [

//   { name: "Spa&Disposables", id: "contact-us" },
//   { name: "Contact Us", id: "contact-us" },
//   { name: "About", id: "about-us" },
//   { name: "Products", id: "products" },
//   { name: "Contact Us", id: "contact-us" },

// ];

export default function Navbar(props:{menus:Array<{name:string, id?:string, url?:string}>, logo:string}) {
  const {pathname}=useLocation()
  const {menus, logo}=props
  const [isOpen, setOpen] = useState(false);

  const onOpenClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-24" alt="logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            onClick={onOpenClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {menus.map((item) => (
              <li>
                <HashLink
                  to={item.url?item.url:`${pathname}/#${item.id}`}
                  key={item.url?item.url:item.id}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {item.name}
                </HashLink>
              
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
