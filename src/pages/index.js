import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import Logo from '@site/static/img/logo-full.svg'
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{width: '200px', margin: '0 auto'}}>
          <Logo />
        </div>
        <p className="hero__subtitle">
          <Translate id="homepage.headerDescription">
            A maneira mais simples de gerir pagamentos
          </Translate>
        </p>
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
