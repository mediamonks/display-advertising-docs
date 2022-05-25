import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Display Boilerplate',
    Svg: require('@site/static/img/generatorRule.svg').default,
    description: (
      <>
        Generator to scaffold a display advertising project.
      </>
    ),
  },
  {
    title: 'Display Temple',
    Svg: require('@site/static/img/codingHtml.svg').default,
    description: (
      <>
        Used for creating display ads units for various vendors.
      </>
    ),
  },
  {
    title: 'Display Development Server',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Used as a tool to build and develop richmedia units.
      </>
    ),
  },
  {
    title: 'Display Upload',
    Svg: require('@site/static/img/displayUpload.svg').default,
    description: (
      <>
        Uploading files to a location. Through the command line.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
