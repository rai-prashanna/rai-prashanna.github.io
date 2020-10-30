import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import list from "./list";

const ExperienceTimeline = () => {
  return (
    <div style={{ background: "#d8d8d8", borderRadius: "5px" }}>
      <VerticalTimeline>
        {list.map((experience) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={experience.date}
              iconStyle={{ background: "white" }}
              icon={experience.icon}
            >
              <a
                href={experience.website}
                target="_blank"
                style={{ color: "white" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h4>
              </a>
              <p>{<experience.description />}</p>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};
export default ExperienceTimeline;
