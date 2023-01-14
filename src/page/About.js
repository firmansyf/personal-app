import React from "react";
import { Link } from "react-router-dom";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/img/yf-profile.png";

export default function About() {
  return (
    <div className="section-about">
      <div className="container-about flex flex-col">
        <div className="link-nav-about">
          <span>
            <Link to="/" className="text-blue-500 underline">
              home
            </Link>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="mx-1"
              style={{ opacity: ".5", fontSize: "12px" }}
            />
            about
          </span>
        </div>
        <div className="container-description mt-4">
          <h1 className="mb-1">About Me</h1>
          <span className="mt-2">
            <img
              src={profile}
              alt="profile"
              className="float-left img-profile"
            />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>

          <div className="qoutes font-light">~yusuf.firmansyah_</div>
        </div>
      </div>
    </div>
  );
}
