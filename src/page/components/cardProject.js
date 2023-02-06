import React from "react";
import todo from "../../assets/img/todo-app.png";
import movie from "../../assets/img/movie-search.png";
import sticky from "../../assets/img/sticky-app.png";
import weather from "../../assets/img/weather-app.png";
import { Link } from "react-router-dom";

function CardProject() {
  const data = [
    {
      name: "Todo List",
      title: "TODO List App",
      description: "Created Todo App with reactjs",
      img: todo,
      tgl: "Juli 18, 2021",
    },
    {
      name: "Movie",
      title: "Movie Search App",
      description: "Created Movie App with reactjs",
      img: movie,
      tgl: "August 8, 2022",
    },
    {
      name: "Sticky Notes",
      title: "Sticky Notes App",
      description: "Created Sticky notes App with reactjs",
      img: sticky,
      tgl: "December 12, 2021",
    },
    {
      name: "Weather",
      title: "Weather App",
      description: "Created Weather App with reactjs",
      img: weather,
      tgl: "September 18, 2022",
    },
  ];

  return (
    <>
      {Array.isArray(data) &&
        data?.map(({ name, title, description, img, tgl }) => {
          return (
            <>
              <div className="card-project card w-4/12 mt-10 mx-2">
                <Link to="/about-me">
                  <img src={img} className="img-project" alt={name} />
                  <div className="section-project-description p-2">
                    <span className="quicksan m-3 font-semibold">{title}</span>
                    <p className="opacity-40 mx-3 quicksan font-semibold">
                      {tgl}
                    </p>
                    <span className="description-data quicksan font-semibold">
                      {description}
                    </span>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
    </>
  );
}

export default CardProject;
