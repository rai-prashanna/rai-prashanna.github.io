import React from "react";
import ReactIcon from "@site/static/img/techs/react.svg";
import JSIcon from "@site/static/img/techs/js.svg";
import DockerIcon from "@site/static/img/techs/docker.svg";
import TsIcon from "@site/static/img/techs/typescript.svg";
import NodeIcon from "@site/static/img/techs/nodejs.svg";
import JavaIcon from "@site/static/img/techs/java.svg";

export default [
  {
    date: "Aug 2019 - current",
    role: "Quality Assurance Engineer- Xensam",
    location: "Stockholm, Sweden",
    website: "http://www.xensam.com",
    icon: <ReactIcon />,
    description: () => (
      <ul>
        <li>
          Use state management tool to maintain the complex data structure.
          (Redux)
        </li>
        <li>Write unit test, integration test.(Jest, CodeCeptJS)</li>
        <li>Review code quality, maintain code standard across the team.</li>
        <li>Just Started new journey...</li>
      </ul>
    ),
  },
  {
    date: "Dec 2017 - Dec 2019",
    role: "DevOps Engineer (Software Engineer)-  Fusemachines",
    location: "Kathmandu, Nepal",
    website: "http://www.fusemachines.com",
    icon: <DockerIcon />,
    description: () => (
      <ul>
        <li>
          create continuous devlivery pipeline with Jenkinsfile
        </li>
        <li>customize Dockerfile of Jupyterhub notebook to allow multi-user saving their document</li>
        <li>
          automate deployment of Linux applications and system configurations
        </li>
      </ul>
    ),
  },
  {
    date: "Jun 2016 - Dec 2017",
    role: "Java Developer (Software Engineer Associate)- Fusemachines",
    location: "Kathmandu, Nepal",
    website: "http://www.fusemachines.com/",
    icon: <JavaIcon />,
    description: () => (
      <ul>
        <li>Part of the front end development team of their Vue web app.</li>
        <li>
          Managed application state maintaining the Single source of truth.
          (Vuex)
        </li>
        <li>Developed & maintained reusable components repository.</li>
        <li>
          Maintained Code quality, frontend project structure. (Linting/Strict
          typing)
        </li>
        <li>Developed RESTful API using laravel.</li>
        <li>Managed the application using bundling tool. (Webpack)</li>
        <li>Regularly Monitored application performance.(Sentry/DevTools)</li>
        <li>Delivered scalable client application (https://agentcis.com/)</li>
        <li>
          Managed Knowledge sharing session and Presentation of new trends
          internally
        </li>
        <li>Prevented Security issues</li>
      </ul>
    ),
  }
];
