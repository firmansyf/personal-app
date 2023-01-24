import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Timeline } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Experience() {
  const dataExperience = [
    {
      title: "AssetData.io  ",
      time: "September 2021 - present",
      position: "Frontend Developer",
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
      title: "PT Systema Precission",
      time: "December 2020 - May 2021",
      position: "Operator CNC",
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
                {/* <Timeline>
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
                 */}
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                      {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        Latest
                      </span> */}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Working on {time}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      <ol>
                        {description.map(({ id, label }) => {
                          return <li key={id}>{label}</li>;
                        })}
                      </ol>
                    </p>
                  </li>
                </ol>
              </div>
            );
          })}
      </div>
    </div>
  );
}
