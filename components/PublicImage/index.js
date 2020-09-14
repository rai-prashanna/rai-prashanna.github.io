import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const PublicImage = ({ name, alt }) => {
  return (
    <img title={name} src={useBaseUrl(`/img/techs/${name}.svg`)} alt={alt} />
  );
};
export default PublicImage;
