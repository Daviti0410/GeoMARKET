"use client";

import { useRef, useState, useEffect } from "react";
import LogOut from "./logOut";
const Profile = () => {
  const Menus = ["Profile", "Your Products", <LogOut />];
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        imgRef.current &&
        e.target !== menuRef.current &&
        e.target !== imgRef.current
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex mr-20 ml-28">
        <img
          ref={imgRef}
          onClick={() => setOpen((prev) => !prev)}
          src=""
          alt="user"
          className="h-10 w-10 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
        />
        {open && (
          <div className="bg-zinc-500 z-50 p-4 w-44 shadow-lg rounded-lg absolute left-10 top-16">
            <ul>
              {Menus.map((menu) => (
                <li
                  ref={menuRef}
                  onClick={() => setOpen(false)}
                  className="p-1 text-lg cursor-pointer rounded hover:bg-blue-100 relative z-50"
                  key={menu}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
