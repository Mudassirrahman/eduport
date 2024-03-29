import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import { FiGrid } from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  return (
    <>
    
      <header className="fixed-top bg-white mb-3">
      
      <nav className="navbar navbar-expand-xl px-5 ">
      <div className="navbar-brand">
              <a href=""
                
                className=" mb-2 mb-lg-0 text-dark text-decoration-none"
              >
                <img
                  src="https://eduport.webestica.com/assets/images/logo.svg"
                  height="36px"
                ></img>
              </a>
            </div>
            <button className="navbar-toggler mediaCustm-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <GiHamburgerMenu />
            </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container d-flex align-items-center justify-content-between  media-set">
          <div className="d-flex align-items-center ">
          
            <div className="px-4  bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 show  logoAndCat">
              
              <a href="" className="text-decoration-none link-primary h6 dropdown-toggle active" id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"><span className="px-2 fs-3"><FiGrid  /> </span> Category</a>
              <ul
                className="dropdown-menu  text-small drowp-down-custm"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a href="" className="dropdown-item" >
                    New project...
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">
              <li>
                <a href=""  className="nav-link px-2 h6 fs-5 link-secondary navResp-custm dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Demos
                </a>
                <ul
                className="dropdown-menu text-small drowp-down-custm"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a href="" className="dropdown-item" >
                    New project...
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Sign out
                  </a>
                </li>
              </ul>
              </li>
              <li>
                <a href=""  className="nav-link px-2 h6 fs-5 link-secondary navResp-custm dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Pages
                </a>
                <ul
                className="dropdown-menu text-small drowp-down-custm"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a href="" className="dropdown-item" >
                    New project...
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Sign out
                  </a>
                </li>
              </ul>
              </li>
              <li>
                <a href=""  className="nav-link px-2 h6 fs-5 link-secondary navResp-custm  dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Accounts
                </a>
                <ul
                className="dropdown-menu text-small drowp-down-custm"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a  className="dropdown-item" >
                    instRuctOr
                  </a>
                </li>
                <li>
                  <a  className="dropdown-item" >
                    Students
                  </a>
                </li>
                <li>
                  {/* <a  className="dropdown-item" >
                    Admin
                  </a> */}
                  <Link to="/AdminPortal" className="dropdown-item" 
                    
                  > Admin</Link>
                </li>
                <li>
                  <a  className="dropdown-item" >
                    
                  </a>
                </li>
              </ul>
              </li>
              <li>
                <a href=""  className="nav-link px-2 h6 fs-5 link-secondary navResp-custm dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Products
                </a>
                <ul
                className="dropdown-menu text-small drowp-down-custm"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a href="" className="dropdown-item" >
                    New project...
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Sign out
                  </a>
                </li>
              </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
               />
              {/* <AiOutlineSearch /> */}
              
            </form>

          
          </div>
        </div>
        
        <div className="dropdown log-port">
              
                <img
                  src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                  alt="mdo"
                  width="40"
                  height="40"
                  className="rounded-circle  dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                />
              <ul
                className="dropdown-menu dropdown-menu-end text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a href="" className="dropdown-item" >
                    New project...
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a href="" className="dropdown-item" >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            </div>
            </nav>
      </header>
    </>
  );
};
export default Navbar;
