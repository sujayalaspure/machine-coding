import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What is a Machine Coding",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Machine coding round involves solving a design problem in a matter of a couple of hours.</>,
  },
  {
    title: "What is Expected?",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        It requires designing and <b>coding a clean, modular and extensible solution</b> based on a specific set of
        requirements.
      </>
    ),
  },
  {
    title: "Practice, Practice and Practice",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        One needs to practice to become good at anything, and this is no different.
        <strong>
          <i> Start Solving today.</i>
        </strong>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
