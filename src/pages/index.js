import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Skills from "../../components/Skills";
import styled from "styled-components";
const features = [
  {
    title: <>About Me</>,
    imageUrl: "img/avataaars.svg",
    description: (
      <p>
        Hi, It's me <b> Patrick Rai </b> from Kathmandu, Nepal. I love to
        make web apps and I'm mostly focused in frontend and equally intrested
        in server side/devOps which kinda makes me full stack though I'm not.
        <br />
        You will find me very passionate about programming who has a keen eye
        for new paradigms, architecture, patterns and principles.
        <br />I love to explore new languages, indulging my time with my pet
        projects, participating in lonely hackathons and always love to tinker
        with new technologies.
      </p>
    ),
  },
  {
    title: <>Experience</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <p>
        {/* Started working as a NodeJS|Angular developer(2015 A.D) and I fall in
        love with JavaScript and its ecosystem. Before I used to play with PHP,
        JAVA in my High School days. */}
        I have worked from product-based company to service-based agency where I
        worked in development of projects like Realtime Dashboards, CRM, CMS,
        Plugins, Libraries, E-Commerce, PWA, Cloud Storages, Video Streaming,
        etc where my primary focus was in Frontend.
      </p>
    ),
  },
  {
    title: <>Skills</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: <Skills />,
  },
];

const HeroHeader = styled("header")`
  background: url("img/nepal.jpg") no-repeat center;
  background-size: cover;
`;
function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="JavaScript developer from nepal who loves to do project in React, TypeScript, Redux, ExpressJS, NodeJS, NestJS, NextJS."
    >
      <HeroHeader
        className={classnames("hero hero--primary", styles.heroBanner)}
      >
        <div className="container image-bg">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a
              className={classnames(
                "button   button--primary button--lg",
                styles.getStarted
              )}
              href={useBaseUrl("prashanna-2019-v10-Full-Stack.pdf")}
            >
              Download Resume
            </a>
          </div>
        </div>
      </HeroHeader>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
