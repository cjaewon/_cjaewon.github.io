import React from 'react';

import { projects, stacks } from '../data';
import Profile from '../components/common/Profile';
import Bio from '../components/common/Bio';
import Stack from '../components/common/Stack';
import Project from '../components/common/Project';

function HomeContainer() {
  return (
    <>
      <Profile />
      <Bio />
      <hr/>
      <Stack 
        frontend={stacks.frontend}
        backend={stacks.backend}
        etc={stacks.etc}
      />
      <hr/>
      <Project data={projects} />
    </>
  )
}

export default HomeContainer;