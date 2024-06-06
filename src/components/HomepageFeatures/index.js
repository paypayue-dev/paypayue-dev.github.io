import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Guias',
    imgSrc: 'img/guias.png',
    description: (
      <>
        Este guia descreve os requisitos e passos necessários para a integração com a PayPay para os clientes que pretendam integrar os nossos serviços de pagamento diretamente nas suas aplicações.
      </>
    ),
    linkTo: '/intro'
  },
  {
    title: 'Especificação API',
    imgSrc: 'img/api.png',
    description: (
      <>
        A PayPay suporta ainda integrações com o seu software de gestão através da nossa API
      </>
    ),
    linkTo: '/api'
  },
  {
    title: 'Integrações',
    imgSrc: 'img/plugin.png',
    description: (
      <>
        A PayPay disponibiliza diversas integrações e plugins gratuitos que permitem unir os serviços de pagamento, por Multibanco, Cartão de Crédito/Débito e MB WAY, com lojas de e-commerce e softwares de faturação.
      </>
    ),
    linkTo: '/plugins'
  },
];

function Feature({imgSrc, title, description, linkTo}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={linkTo}>
            {`Consultar ${title}`}
          </Link>
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
