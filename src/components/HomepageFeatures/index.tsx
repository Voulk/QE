import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  img: any;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Questionably Epic Live',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: require('@site/static/img/QELiveExample.png').default,
    link: "https://questionablyepic.com/live",
    description: (
      <>
        QE Live is a web app for healer gearing and theorycrafting that works for ALL retail specs and a handful of Classic ones! 
      </>
    ),
  },
  {
    title: 'Resto Druid',
    Svg: require('@site/static/img/druidtest.svg').default,
    img: require('@site/static/img/druidtest2.png').default,
    link: "https://questionablyepic.com/druid/abilities",
    description: (
      <>
        Upgrade your Druid gameplay with the QE comprehensive guide to raid and Mythic+. Updated for 11.1!
      </>
    ),
  },
  {
    title: 'Mistweaver Monk',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: require('@site/static/img/monktest.png').default,
    link: "https://questionablyepic.com/live",
    description: (
      <>
        Get into Mistweaver Monk with an in-depth one-page guide covering talents, playstyle, stats and more.
      </>
    ),
  },
  {
    title: 'Nerub\'ar Palace',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: require('@site/static/img/PalaceIcon.png').default,
    link: "https://questionablyepic.com/palace",
    description: (
      <>
        One page boss guides to teach you Nerub-ar Palace quickly and efficiently
      </>
    ),
  },
];

function Feature({title, Svg, description, link, img}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <a href={link}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div></a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
