import type { FC } from 'react';
import { Helmet } from 'react-helmet';

interface MetaProp {
  name?: string;
  content?: string;
  property?: string;
}

interface SEOProps {
  title: string;
  description?: string;
  meta?: Array<MetaProp> | MetaProp;
  defaultFallback: {
    title: string;
    description: string;
  };
}

const SEO: FC<SEOProps> = ({ title, description, meta, defaultFallback }) => {
  const siteTitle = defaultFallback.title;
  const metaDescription = description || defaultFallback.description;
  const defaultMeta: Array<MetaProp> = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `viewport`,
      content:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ];

  const helmetMeta = meta ? defaultMeta.concat(meta) : defaultMeta;

  return (
    <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
      <title>{title}</title>
      <html lang="en" />
      {helmetMeta.map(({ name, property, content }) => (
        <meta
          key={name || property}
          name={name && name}
          property={property && property}
          content={content}
        />
      ))}
    </Helmet>
  );
};

SEO.defaultProps = {
  meta: [],
  description: '',
};

export default SEO;
export type { SEOProps };
