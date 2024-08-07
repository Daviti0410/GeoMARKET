"use client";

import { useRef, useState, useEffect } from "react";

const Profile = () => {
  const Menus = ["Profile", "Your Products", "Logout"];
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
      <div className="flex">
        <img
          ref={imgRef}
          onClick={() => setOpen((prev) => !prev)}
          src=""
          alt="user"
          className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
        />
        {open && (
          <div className="bg-black p-4 w-52 shadow-lg absolute -left-14 top-24">
            <ul>
              {Menus.map((menu) => (
                <li
                  ref={menuRef}
                  onClick={() => setOpen(false)}
                  className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100 absolute z-50"
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
