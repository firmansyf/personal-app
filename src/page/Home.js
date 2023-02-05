import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
// import { getDataWeather } from "./../api/service";
import Logo from "../assets/img/welcome-mate.png";
import Me from "../assets/img/me.png";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CardProject from "./components/cardProject";

function Home() {
  const navigate = useNavigate();
  // const [lat, setLat] = useState();
  // const [lang, setLang] = useState();
  // const [detail, setDetail] = useState({});
  // const [isWeather, setWeather] = useState([]);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position?.coords?.latitude || 0);
  //       setLang(position?.coords?.longitude || 0);
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   getDataWeather(lat, lang)
  //     .then(({ data: res }) => {
  //       setWeather(res?.weather);
  //       setDetail(res);
  //     })
  //     .catch(() => "");
  // }, [lat, lang]);

  return (
    <>
      <Navbar />
      <div className="section h-auto mt-4 mb-9">
        <div className="container-satu h-screen flex items-center justify-center flex-col">
          <section className="mb-10 w-1/2 h-2/3 flex justify-center">
            <img src={Logo} alt="logo-satu" className="mb-4" />
            <div className="mt-10 text-lg welcome-mate flex items-center justify-center">
              <span className="rubik-font">WELCOME MATE!</span>
            </div>
          </section>
        </div>

        <div className="container-duabg-black flex items-center justify-center flex-col">
          <div className="w-6/12 flex justify-start flex-col">
            <img src={Me} alt="this-is-me" className="w-36" />
            <span className="mt-7 text-lg quicksan font-semibold">
              Hey! My name’s Yusuf Firmansyah, I’m a Frontend Developer based in
              Indonesian.{" "}
            </span>
          </div>
          <div className="w-6/12 mt-10 flex flex-col ">
            <span className="quicksan text-lg mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>

            <span className="mt-4 text-lg quicksan mb-9">
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>

            <div className="">
              <Button
                style={{ cursor: "pointer" }}
                outline={true}
                gradientDuoTone="purpleToBlue"
                onClick={() => navigate("/this-me")}
              >
                <span className="flex quicksan items-center">
                  Keep Reading
                  <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                </span>
              </Button>
            </div>
            <div className="bg-slate-400 h-1 mt-20"></div>
          </div>
        </div>

        <div className="container-tiga flex items-center flex-col justify-center mt-16">
          <div className="w-6/12 text-3xl font-semibold rubik-font">
            Featured Project.
          </div>
          <div className="flex justify-center items-center  flex-wrap w-9/12">
            <CardProject />
          </div>
          <div className="w-6/12 mt-4">
            <Button
              style={{ cursor: "pointer" }}
              size="md"
              outline={true}
              gradientDuoTone="purpleToBlue"
              className="quicksan"
            >
              <span>
                View all project
                <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
