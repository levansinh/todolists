import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faCalendarWeek,
  faCalculator,
  faCircleLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const { pathname } = useLocation();
  const sideBarRef = useRef();

  const [open, setOpen] = useState(true);

  const sideBar = [
    {
      display: "Dự án",
      path: "/project",
      icon: faInbox,
      color: "blue",
    },
    {
      display: "Ngày của tôi",
      path: "/",
      icon: faCalendarWeek,
      color: "red",
    },
    {
      display: "Quan trọng",
      path: "/important",
      icon: faStar,
      color: "slate",
    },
    {
      display: "Đã lập kế hoạch",
      path: "/planned",
      icon: faCalculator,
      color: "",
    },
  ];
  const activeNavbar = sideBar.findIndex((e) => e.path === pathname);

  useEffect(() => window.scroll(0, 0), [pathname]);

  return (
    <aside
      className={` ${
        open ? "w-[305px]" : "w-20 "
      } bg-[#fafafa] relative  h-screen p-5 pt-8  duration-300`}
      ref={sideBarRef}
    >
      <div
        className={`absolute cursor-pointer -right-2 top-9 text-xl text-red-500 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <ul className="px-[10px] mt-5">
        {sideBar.map((item, index) => (
          <li
            key={index}
            className={`${
              index === activeNavbar
                ? `bg-[#eeeeee] p-[5px] rounded-sm group`
                : "p-[5px] "
            } `}
          >
            <Link to={item.path} className={`flex items-center gap-x-3  `}>
            <span className="w-1.5 h-8 rounder-r-full left-0 scale-y-0 bg-indigo-600 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0"></span>
              <FontAwesomeIcon
                className={`text-xl text-${item.color}-500`}
                icon={item.icon}
              />
              {open ? <span>{item.display}</span> : ""}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
