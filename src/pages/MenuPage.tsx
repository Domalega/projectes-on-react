import React from "react";
import { Link } from "react-router-dom";

interface Ilink {
  page: string;
  path: string;
  component: React.ComponentType<any>;
}

interface MenuPageProps {
  links: Ilink[];
}

const MenuPage: React.FC<MenuPageProps> = ({ links }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link) => {
          if (link.page !== "Menu") {
            return (
              <Link
                key={link.page}
                to={link.path}
                className="text-xl md:text-4xl text-center border rounded-sm p-4 shadow-emerald-500 shadow-md hover:bg-gray-400 hover:translate-x-1 hover:translate-y-1 duration-300"
              >
                {link.page}
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MenuPage;
