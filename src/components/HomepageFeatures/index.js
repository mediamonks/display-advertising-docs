import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Display Boilerplate',
    url: 'https://github.com/mediamonks/generator-display-boilerplate',
    Svg: require('@site/static/img/generatorRule.svg').default,
    description: (
      <>
        Generator to scaffold a display advertising project.
      </>
    ),
  },
  {
    title: 'Display Temple',
    url: 'https://github.com/mediamonks/display-temple',
    Svg: require('@site/static/img/codingHtml.svg').default,
    description: (
      <>
        Used for creating display ads units for various vendors.
      </>
    ),
  },
  {
    title: 'Display Development Server',
    url: 'https://github.com/mediamonks/display-dev-server',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Used as a tool to build and develop richmedia units.
      </>
    ),
  },
  {
    title: 'Display Upload',
    url: 'https://github.com/mediamonks/display-upload',
    Svg: require('@site/static/img/displayUpload.svg').default,
    description: (
      <>
        Uploading files to a location. Through the command line.
      </>
    ),
  },
  {
    title: 'Display Ads Recorder',
    url: 'https://github.com/mediamonks/display-ads-recorder',
    Svg: require('@site/static/img/adsRecorder.svg').default,
    description: (
      <>
        Used to record html5 ads and export into multiple formats.
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  const openUrl = () => {
    window.open(url,'_blank');
  };

  return (
    <div className={clsx('col col--2 featureItem')} onClick={openUrl}>
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
        <div className="row featureRow">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
