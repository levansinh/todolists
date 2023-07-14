import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Action from "./Action";
import {
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {

  return (
    <header className="bg-[#db4c3f] fixed top-0  left-0 right-0 w-full h-[44px] flex flex-row justify-between items-center px-[16px]">
      <div className="flex gap-x-3">
        <div className="text-white text-xl hover:cursor-pointer">
            <Link to={'/'}>
          <FontAwesomeIcon icon={faHome} />
            </Link>
        </div>
        <div className="bg-[#ffffff33] flex items-center h-[29px] text-[#f3f3f3] px-2 hover:bg-white hover:text-[#333] ease-linear duration-300">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search..." className="bg-transparent py-[5px] pl-[20px] outline-0"/>

        </div>
      </div>
      <Action/>
    </header>
  );
}

export default Header;
