import { Link } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    // const [darkMode, setDarkMode] = useState(false)
    const navLinks = <>
        <li><Link to="/" className="text-[#12F7D6] text-xl font-normal">Home</Link></li>
        <li><Link to="/" className="text-[#12F7D6] text-xl font-normal">Projects</Link></li>
        <li><Link to="/" className="text-[#12F7D6] text-base font-normal">LinkenIn</Link></li>
        <li><Link to="/" className="text-[#12F7D6] text-base font-normal">Github</Link></li>
        
        </>
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <IoMdMenu /> */}

              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="font-medium text-3xl">Sumaiya Sinja</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    );
};

export default Navbar;