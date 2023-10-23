import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="flex justify-between max-sm:pl-5 pl-10  xl:pt-10 pt-5">
      <a href="/" className=" w-1/3">
        <img
          className="  "
          src={headerLogo}
          alt="logo"
          width="150px"
          height="100px"
        />
      </a>
      <ul className="flex w-2/3 pr-5 justify-around max-sm:hidden">
        {navLinks.map((item) => {
          return (
            <li key={item.href}>
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
