import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Aursoft() {
  const tasks = [
    {
      text: "Worked on the front-end development  using React , Tailwind CSS,Bootstrap,Javascript,Laravel,Codeignitor,PostgresSQL,MySQL,Ext-Sencha",
      keywords: ["Tailwind", "React", "Ext-Sencha", "Laravel", "PostgresSQL"],
    },
    {
      text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Web Developer <span className="text-AAsecondary">@ PHP</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2018 - May 2021</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.aursoft.com/", "_blank")}
          >
            Aursoft
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
