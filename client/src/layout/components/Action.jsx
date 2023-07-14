import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  signInWithGoogle,
  handleSignOut,
} from "../../firebaseConfig/firebaseConfigs";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {
  faStar,
  faCircleInfo,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Action() {
  // const user = useSelector((state) => state.auth.currentUser);
  const user = localStorage.getItem("name");
  console.log(user);
  return (
    <div className="flex flex-row items-center gap-x-10">
      <Button small>
        <FontAwesomeIcon className="text-yellow-400 mr-2" icon={faStar} />
        <span className="text-white">Nâng cấp</span>
      </Button>
      <Tippy content="Trợ giúp & Thông tin">
        <div className="text-white text-xl ">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </Tippy>
      <Tippy content="Thông báo">
        <div className="text-white text-xl ">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </Tippy>
      {user ? (
        <div className="">
          <Tippy
            interactive={true}
            render={(attrs) => (
              <ul
                className="box bg-black text-white p-5 "
                tabIndex="-1"
                {...attrs}
              >
                <li
                  className="cursor-pointer hover:bg-zinc-200 p-3"
                  onClick={handleSignOut}
                >
                  Đăng xuất
                </li>
              </ul>
            )}
          >
            <div className="">
              <img
                className="w-9 h-9 rounded-full cursor-pointer"
                src={localStorage.getItem("profilePic")}
                alt={localStorage.getItem("name")}
              />
            </div>
          </Tippy>
        </div>
      ) : (
        <div onClick={signInWithGoogle} className="text-white text-xl ">
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}
    </div>
  );
}

export default Action;
