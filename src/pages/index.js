import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/gatsby/layout';
import SEO from '../components/gatsby/seo';

import Profile from '../components/profile';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Profile src="profile_img.png" />
      <Link to="/page-2/">Go to page 2</Link>
    </main>
  </Layout>
);

export default IndexPage;
