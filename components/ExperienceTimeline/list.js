import React from "react";
import ReactIcon from "@site/static/img/techs/react.svg";
import JSIcon from "@site/static/img/techs/js.svg";
import TsIcon from "@site/static/img/techs/typescript.svg";
import NodeIcon from "@site/static/img/techs/nodejs.svg";
import JavaIcon from "@site/static/img/techs/java.svg";
import EricssonIcon from "@site/static/images/ericsson-icon.svg";
import BrokerwayIcon from "@site/static/images/brokerway.svg";

export default [
  {
    date: "1 Jul 2023 - Present",
    role: "Full stack developer",
    location: "Sweden",
    website: "https://www.brokerway.com/",
    img: BrokerwayIcon,
    description: () => (
      <ul>
        <li>
        My responsibilities are developing a frontend view in angular application and creating REST API‑based Jakarta EE application for STX product that handles post‑trade processes like clearing settlement, and corporate actions. Since our team is small, my assignment also involved providing first-line support and collecting user requirements from stakeholders.
        </li>
        <li>My work involves with Jakarta EE, AngularJS, Tortoise SVN, Erwin.</li>
      </ul>
    ),
  },
  {
    date: "1 Feb 2023 - 31 July 2023",
    role: "Master Thesis ‑ Cloud Native Authorization",
    location: "Sweden",
    website: "https://www.ericsson.com/en",
    icon: <EricssonIcon />,
    description: () => (
      <ul>
        <li>
          The thesis investigates the benefit of OPA over a specialized policy engine to existing cloud‑native applications named EMC and OMC running
          in a private cloud
        </li>
        <li>
          It was observed that there was almost small difference in latency i.e 1.109 times slower in latency when service was integrated with OPA as
          SideCar. But in the case of fine‑grained authorization, as data grows, Wasm‑based system integration performs well i.e 1.30 times faster than
          the existing authorization system.
        </li>
        <li>The thesis project involves Kubernetes, Open Policy agent, and some Java Security and Python Security programming, threat modeling when
          integrating with OPA with existing service.</li>
          <li> 
          <a href="https://iamprashannarai.github.io/myPresentations/">link to my Presentation can be found</a> 
          </li>
      </ul>
    ),
  }
  // ,
  // {
  //   date: "Dec 2017 - Dec 2019",
  //   role: "JavaScript Developer -  Javra Software",
  //   location: "Kathmandu, Nepal",
  //   website: "http://www.javra.com",
  //   icon: <JSIcon />,
  //   description: () => (
  //     <ul>
  //       <li>
  //         Led the development and adoption of React to a dashboard web app.
  //       </li>
  //       <li>Write application using latest EcmaScript specification</li>
  //       <li>
  //         Build an interface to manipulate the image for e-commerce
  //         products.(Fabricjs)
  //       </li>
  //       <li>Create a plugin to be pluggable on any website.</li>
  //     </ul>
  //   ),
  // }
];
