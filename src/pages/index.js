import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
import Logo from '@site/static/img/logo-full.svg'
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{width: '200px', margin: '0 auto'}}>
          <Logo />
        </div>
        <p className="hero__subtitle">A maneira mais simples de gerir pagamentos</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
    <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
