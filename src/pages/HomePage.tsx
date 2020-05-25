import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import HomeContainer from '../container/HomeContainer';

function HomePage() {
  return (
    <HomeTemplate>
      <Helmet>
        <title>Hello Cjaewon!</title>
        <meta
          name="description"
          content="cjaewon resume"
        />
      </Helmet>
      <main>
        <HomeContainer />
      </main> 
    </HomeTemplate>
  );
}

const HomeTemplate = styled.div`

`;

export default HomePage;