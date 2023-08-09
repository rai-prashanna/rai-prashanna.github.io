import React from "react";
import NodeIcon from "@site/static/img/techs/nodejs.svg";
import JavaIcon from "@site/static/img/techs/java.svg";
import SparkIcon from "@site/static/img/techs/spark.svg";
import PlaywrightIcon from "@site/static/img/techs/playwright.svg";

export default [
  {
    date: "1 Feb 2023 - 31 July 2023",
    role: "Master Thesis Cloud Native Authorization - Ericsson",
    location: "Kista, Sweden",
    website: "https://www.ericsson.com/en",
    icon: <JavaIcon />,
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
  ,
  {
    date: "Jan 2023 - Apr 2023",
    role: "Teaching assistant - Uppsala University",
    location: "Uppsala, Sweden",
    website: "https://www.uu.se/",
    icon: <SparkIcon />,
    description: () => (
      <ul>
        <li>
          participation in labs and tutorials/lessons of Hadoop, Spark, and Openstack, grading of assignments, answering student’s questions, and su‑
          pervision of student projects in the Data Engineering course.
        </li>
      </ul>
    ),
  },
  {
    date: "Oct 2022 - Jan 2023",
    role: "Test Automation Engineer - Dewire by Knightec",
    location: "Stockholm, Sweden",
    website: "https://knightec.se/",
    icon: <PlaywrightIcon />,
    description: () => (
      <ul>
        <li>
          Test automation of React application using Playwright. The application is a service portal for Boule’s hematology analyzer BM‑850 and eventu‑
          ally the newer BM‑900 model.
        </li>
      </ul>
    ),
  }
  ,
  {
    date: "Jun 2022 - Aug 2022",
    role: "Associate Engineer - Dewire by Knightec",
    location: "Sundsvall, Sweden",
    website: "https://knightec.se/",
    icon: <JavaIcon />,
    description: () => (
      <ul>
        <li>
          Summer Job
        </li>
        <li>maintaining Angular project</li>
        <li>Unit‑testing and Integration testing of Spring boot Application. The application is service gateway to integrate Telia numbers to Microsoft teams
        </li>
        <li> writing Fullstack application to unified view of swagger of microservices</li>
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
  // },
  // {
  //   date: "Jun 2016 - Dec 2017",
  //   role: "JavaScript Developer - Introcept Nepal ",
  //   location: "Lalitpur, Nepal",
  //   website: "http://nepal.introcept.co/",
  //   icon: <ReactIcon />,
  //   description: () => (
  //     <ul>
  //       <li>Part of the front end development team of their Vue web app.</li>
  //       <li>
  //         Managed application state maintaining the Single source of truth.
  //         (Vuex)
  //       </li>
  //       <li>Developed & maintained reusable components repository.</li>
  //       <li>
  //         Maintained Code quality, frontend project structure. (Linting/Strict
  //         typing)
  //       </li>
  //       <li>Developed RESTful API using laravel.</li>
  //       <li>Managed the application using bundling tool. (Webpack)</li>
  //       <li>Regularly Monitored application performance.(Sentry/DevTools)</li>
  //       <li>Delivered scalable client application (https://agentcis.com/)</li>
  //       <li>
  //         Managed Knowledge sharing session and Presentation of new trends
  //         internally
  //       </li>
  //       <li>Prevented Security issues</li>
  //     </ul>
  //   ),
  // },
  // {
  //   date: "Mar 2015 - May 2016",
  //   role: "NodeJS Developer- ZyobaLabs",
  //   location: "Kathmandu, Nepal",
  //   icon: <NodeIcon />,
  //   description: () => (
  //     <ul>
  //       <li>
  //         {" "}
  //         Built API's using express Analyzed code quality and application
  //       </li>
  //       <li>
  //         performance Integrated API with AngularJS Analyzed user experience
  //         Full
  //       </li>
  //       <li>
  //         stack development using Node.js, Express, Angular, and Mysql Delivered
  //       </li>
  //       <li>
  //         fast and speedy client interface Created charts and visualization
  //         using
  //       </li>
  //       <li>D3, D3plus</li>
  //     </ul>
  //   ),
  // },
];
