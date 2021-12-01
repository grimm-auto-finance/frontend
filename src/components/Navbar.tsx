const Navbar = () => {
  return (
    <nav className="flex mx-auto bg-white px-20 pt-10 pb-10 dark-gray-700">
      <div className="text-5xl text-gray-600 font-semibold py-1">
        🚘 GRIMM AUTO-FINANCE
      </div>
        <div className="mt-8">
            <label for="toggle" className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input id="toggle" type="checkbox" className="toggle-checkbox absolute block w-4 h-4 mt-1 mx-1 rounded-full bg-white border-none appearance-none cursor-pointer outline-none focus:outline-none transition-all" x-model="darkMode" value="1"/>
                <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-900 bg-opacity-20 cursor-pointer focus:outline-none transition-all"></span>
            </label>
        </div>
    </nav>
  );
};

export default Navbar;
