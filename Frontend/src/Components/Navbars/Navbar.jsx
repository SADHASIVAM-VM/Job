import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [isOpended, setIsOpended] = useState(false);
  const [isActive, setActive] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const navbarData = [
    {
      name: "Home",
      id: 1,
      link: "home",
    },
    {
      name: "About",
      id: 2,
      link: "about",
    },
    {
      name: "Jobs",
      id: 3,
      link: "jobs",
    },
    {
      name: "Fav",
      id: 4,
      link: "wishlist",
    },
  ];
  return (
    <div className="relative flex justify-center ">
      <div
        className={`container flex  justify-between px-5  fixed z-50  items-center md:px-52 ${
          scroll
            ? " transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : ""
        } ${isOpended ? "bg-white transition-all" : ""}`}
      >
        <div className="logo">
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="menu">
          <div className="vertical md:hidden">
            {isOpended ? (
              <ul className="mt-10 flex flex-col gap-1">
                {navbarData.map((itm) => (
                  <li
                    key={itm.id}
                    className="cursor-pointer hover:text-blue-400"
                  >
                    <Link
                      className={`${
                        isActive === `${itm.name}` ? "active" : ""
                      } font-bold transition-all`}
                      onClick={() => {
                        if (itm.link === "home") {
                          navi("/");
                        } else if (itm.link === "jobs") {
                          navi("/");
                          // Scroll to the jobs section on the same page using the item's ID
                          const jobsSection = document.getElementById(itm.link);
                          if (jobsSection) {
                            jobsSection.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          navi(`/${itm.link}`);
                        }
                      }}
                    >
                      {itm.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              " "
            )}
          </div>
          <div className="horizontal hidden md:block">
            <ul className="flex gap-5 ">
              {navbarData.map((itm) => (
                <li
                  key={itm.id}
                  className="cursor-pointer hover:bg-red-400 hover:text-white hover:rounded-md "
                >
                  <Link to={itm.link}
                    className={`${
                      isActive === `${itm.name}` ? "active" : ""
                    } font-bold transition-all`}
                    onClick={() => {
                      if (itm.link === "home") {
                        navi("/");
                      } else if (itm.link === "jobs") {
                        navi("/");
                        const jobsSection = document.getElementById(itm.link);
                        if (jobsSection) {
                          jobsSection.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        navi(`/${itm.link}`);
                      }
                    }}
                  >
                    {itm.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="icon flex flex-col md:hidden cursor-pointer "
          onClick={() => {
            setIsOpended(!isOpended);
          }}
        >
          {isOpended ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              key="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
