import logo from "../../static/logo.png";

const Navbar = () => {
  return (
    <nav className="justify-center">
      <div className="text-center text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter">
        <img
          className="inline-block rounded-full"
          src={logo}
          width="180"
          height="150"
        />{" "}
        GRIMM{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-200">
          {" "}
          AUTOFINANCE
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
