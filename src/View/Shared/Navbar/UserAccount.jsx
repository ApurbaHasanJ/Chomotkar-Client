import { FaUserLarge } from "react-icons/fa6";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UserDropdown from "./UserDropdown";

const UserAccount = () => {
  const { user } = useContext(AuthContext);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleToggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <ul className="ml-auto z-50 flex items-center justify-center gap-3">
        <li className="relative">
          <div
            onClick={handleToggleDropDown}
            className=" z-50 items-center flex md:flex-row flex-col gap-2 duration-300 text-[#75934e] hover:text-[#47720f] rounded-full">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-8 h-8 rounded-full ring ring-[#47720f] dark:ring-gray-500"
                alt={user?.displayName}
              />
            ) : (
              <div className="">
                <FaUserLarge
                  className="text-[22px] "
                  title={user?.displayName}
                />
              </div>
            )}
            <div className="">{!user && <p>Login/Join</p>}</div>
          </div>
          {showDropDown && (
            <div className="absolute right-0 z-40 top-12">
              <UserDropdown handleToggleDropDown={handleToggleDropDown} />
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default UserAccount;
