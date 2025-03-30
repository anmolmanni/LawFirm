function Navbar() {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PolarBear
          </span>
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-grey-900 bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
