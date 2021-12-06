import logo from "../logo-new.png";

const Navbar = () => {
  return (
    <nav className="justify-center">
        <div className="text-center pb-4 md:pb-16">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
            <img
                className="inline-block rounded-full"
                src={logo}
                width="180"
                height="150"
            />  GRIMM{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-200">
            {" "}
            AUTOFINANCE
          </span>
            
            
        </h1>

      </div>
    </nav>
  );
};

export default Navbar;
