import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { HiX, HiMenu } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const [search , setSearch] = useState(false)
  const handleSearch = () => setSearch(!search)

  return (
    <>
      <nav>
        <h3 className="desktop-logo">THAREEKATHUL MUFLIHEEN</h3>
        <h3 className="mobile-logo">MUFLIHEEN</h3>

        <div>
          <ul className={open ? "navItem active" : "navItem"}>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.youtube.com">
                Blog
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Founder
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Library
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Profile
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Contact US
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="www.google.com">
                Tamil
              </a>
            </li>
          </ul>
          <div className={ search ? "search-box-container" : "search-box-container close"}>
            <div className="search-box">
              <FaSearch/>
              <input
                type="text"
                placeholder="Search songs or books"
              />
            </div>
          </div>

        </div>
        <div className="search-icon" onClick={handleSearch}>
            {search ? <HiX/> : <FaSearch className="FaSearch"/>}
          </div>

        <div onClick={handleClick} className="mobile-menu">
          {open ? <HiX /> : <HiMenu />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
