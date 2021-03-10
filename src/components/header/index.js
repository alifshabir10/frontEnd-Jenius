import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Navbar({ fixed }) {

  const [isLogin, setisLogin] = useState(false)
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  const [value, setValue] = useState();
  const refresh = () => {
    // re-renders the component
    setValue({});
  }



  useEffect(() => {
    // console.log(isLogin)
    if (localStorage.token == null || localStorage.token == undefined) {
      setisLogin(false);
      setValue({});

    }
    else {

      setisLogin(true);
      setValue({});
    }
    setValue({});
  }, [localStorage.token])

  const klikLogout = () => {
    localStorage.clear()

    alert("Anda Berhasil Logout!");
    setValue({});
    <Redirect to="/home" />
  }








  return (

    <nav className="fixed z-50 w-full bg-background top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
            <span className="text-xl font-bold">E-Commerce CODE.ID</span>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="relative flex w-full md:w-7/12 px-4 flex-wrap items-stretch lg:ml-auto">
          <div className="flex">
            <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-600 rounded-full text-sm bg-gray-100 items-center rounded-r-none pl-2 py-1 text-gray-800 border-r-0 placeholder-background">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="px-2 py-1 h-8 border border-solid  border-black rounded-full text-sm leading-snug text-gray-700 bg-gray-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-300"
            placeholder="Search Product"
          />
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >



          {isLogin ? (

            <>




              




              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                <div class="dropdown inline-block relative">
                <button>
                  <span class="mr-1 font-semibold">{localStorage.getItem('dataUserName')}
                  {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                </span>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Profil</a></li>
                  <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Account</a></li>
                  <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={klikLogout}>Sign Out</a></li>
                </ul>
              </div>
                </li>
              </ul>






              {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    href="">
                    <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                    <span className="ml-2" onClick={klikLogout}>{localStorage.getItem('dataUserEmail')}</span>
                  </a>
                </li>
              </ul> */}





            </>



          ) : (



              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    href="/daftar"
                  >
                    <i className="fas fa-user-plus text-lg leading-lg  opacity-75"></i>

                    <span className="ml-2">Sign Up</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    href="/login"
                  >
                    <i className="fas fa-sign-in-alt text-lg leading-lg  opacity-75"></i>
                    <span className="ml-2">Sign In</span>
                  </a>
                </li>
              </ul>
            )}
        </div>
      </div>
    </nav>
  );
}
