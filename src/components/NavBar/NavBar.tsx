import React from "react";
import { Link } from "react-router-dom";

interface Ilink {
  page: string;
  path: string;
  component: React.ComponentType<any>;
}

interface NavBarProps {
  links: Ilink[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className="fixed w-full h-20 bg-gray-800 p-4 flex justify-between items-center">
      <div>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="font-thin md:text-2xl text-white mr-4 hover:text-emerald-400 hover:border-b-8 duration-200 ease-in"
          >
            {link.page}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
