import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Aulen Propiedades {title && `| ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <img src="https://tracker.metricool.com/c3po.jpg?hash=ef50e5a23a96bdeccb02d5fdca651c5"/>
    </Helmet>
  );
};

export default Head;
