import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Timeline } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Experience() {
  const dataExperience = [
    {
      title: "PT Systema Precision",
      time: "December 2020 - May 2021",
      position: "Operator CNC",
      description: [
        {
          id: 1,
          label:
            "Create a new feature, maintenance and fixing bug using agile system, with jira software",
        },
        { id: 2, label: "Create a script for unit tests using cypress.io" },
        { id: 3, label: "Make new improvements for new features" },
      ],
    },

    {
      title: "AssetData.io",
      time: "September 2021 - present",
      position: "Frontend Developer",
      description: [
        { id: 1, label: "Create a new product, and maintenance machine" },
        { id: 2, label: "Settings all machine for line CNC" },
        { id: 3, label: "Revert and fix product if any issue" },
      ],
    },
  ];

  return (
    <div className="section-exprience">
      <div className="container-experience">
        <div className="container-header">
          <span>
            <Link to="/" className="text-blue-500 underline">
              home
            </Link>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="mx-1"
              style={{ opacity: ".5", fontSize: "12px" }}
            />
            experience
          </span>
          <header>Experience</header>
        </div>
        {Array.isArray(dataExperience) &&
          dataExperience?.map(({ title, time, position, description }) => {
            return (
              <div className="experience-timeline">
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>{title}</Timeline.Title>
                      <div>{position}</div>
                      <Timeline.Time>Working on {time}</Timeline.Time>
                      <Timeline.Body>
                        <ol>
                          {description.map(({ id, label }) => {
                            return <li key={id}>{label}</li>;
                          })}
                        </ol>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </div>
            );
          })}
      </div>
    </div>
  );
}
