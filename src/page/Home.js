import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

function Home() {
  const dataNav = [
    {
      label: "About",
      path: "/about-me",
      description: "Click about! you can see summary about me.",
    },
    {
      label: "Experience",
      path: "/experience-me",
      description: "This is my experience working as Frontend Developer.",
    },
    {
      label: "Skill",
      path: "/skill-me",
      description:
        "Are you curious?.. on this my skill working for a Frontend Developer.",
    },
    {
      label: "Contact",
      path: "/contact-me",
      description: "I’am always available if you contact me.",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="section-satu flex flex-col justify-center items-center">
        <header
          className="header-title flex flex-col justify-center items-start"
          // style={{ backgroundColor: "green" }}
        >
          <div className="text-6xl this-me">
            <span className="font-light">
              Hi i'm <strong className="text-name">Yusuf Firmansyah</strong>{" "}
              <span style={{ fontSize: "17px" }}>he/him</span>
            </span>
          </div>
          <span
            className="title-position text-2xl font-light mt-2 flex"
            // style={{ backgroundColor: "blue" }}
          >
            Frontend Web Developer
          </span>
          <div className="description-me w-9/12 text-lg font-light mt-2">
            Writing for elegant users interface on the client side, can be
            implemented in Reactjs javascript library, and can work remotely.
          </div>
        </header>
        <div className="menu-nav flex justify-center">
          <div className="section-link mt-7 flex items-center justify-center flex-wrap">
            {Array.isArray(dataNav) &&
              dataNav?.map(({ label, path, description }) => {
                return (
                  <>
                    <Link to={path}>
                      <div className="section-nav-link">
                        <div className="text-3xl label-title-menu">{label}</div>
                        <div className="text-sm mt-2 font-normal decription-menu">
                          {description}
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
