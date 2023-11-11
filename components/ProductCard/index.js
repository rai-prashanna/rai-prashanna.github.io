import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const ProductCard = ({ description, title, url, img, role }) => {
  return (
    <div class="card-demo">
      <div class="card">
        <div class="card__header">
          <h3>{title}</h3>
          {img && <img alt="Docusaurus with Keytar" src={useBaseUrl(img)} />}
        </div>
        <div class="card__body">
          <p>{description}</p>
          {role && <span class="badge badge--primary">{role}</span>}
        </div>

        <div class="card__footer">
          <button
            class="button button--secondary button--block"
            onClick={() => window.open(url, "_blank")}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
