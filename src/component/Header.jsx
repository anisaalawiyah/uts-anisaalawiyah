// import { House,  CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" fixed bg-cyan-800 shadow-lg text-white top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Daftar Film</h1>
          </div>
          <nav className="flex flex-grow justify-end">
            <ul className="flex space-x-4">
              <li className="flex items-center">
                {/* <House className="text-white mr-1" /> */}
                <Link
                  to="/"
                  className="hover:text-yellow-200 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              
              <li className="flex items-center">
                {/* <CircleUserRound className="text-white mr-1" /> */}
                <Link
                  to="/contact"
                  className="hover:text-yellow-200 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                {/* <CircleUserRound className="text-white mr-1" /> */}
                <Link
                  to="/film"
                  className="hover:text-yellow-200 transition-colors duration-300"
                >
                 Film
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}