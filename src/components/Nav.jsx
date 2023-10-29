import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="flex justify-between max-sm:pl-5 pl-10  xl:pt-10 pt-5">
      <a href="/" className=" w-2/3">
        <img src={headerLogo} alt="logo" width="150px" height="100px" />
      </a>
      <ul className="flex w-3/4 justify-around max-sm:hidden">
        {navLinks.map((item) => {
          return (
            <li
              key={item.href}
              className="text-zinc-400 hover:text-zinc-800 font-momo font-bold"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>
      <img
        className=" max-sm:block hidden max-sm:mr-5 mr-10"
        src={hamburger}
        alt="menu"
        width="22px"
        height="10px"
      />
    </header>
  );
};

export default Nav;
