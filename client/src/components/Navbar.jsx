import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer italic ${classProps} `}>{title}</li>
  );
};

const NavBar = () => {
  const logo =
    "https://raw.githubusercontent.com/adrianhajdin/project_web3.0/main/client/images/logo.png";
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3]">Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
