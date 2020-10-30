import React from "react";
import projects from "../../data/project";
import ProductCard from "../ProductCard";

const Projects = () => {
  return (
    <div className="container">
      {projects.map((projectGroup) => {
        return (
          <>
            <span class="badge badge--primary">{projectGroup.name}</span>
            <div className="row">
              {projectGroup.items.map((item) => {
                return (
                  <div className="col col--6">
                    <ProductCard {...item} />
                  </div>
                );
              })}
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};
export default Projects;
