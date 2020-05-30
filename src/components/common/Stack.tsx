import React from 'react';
import styled from 'styled-components';

import media from '../../lib/media';
import { stacks } from '../../data';

function getColorbyLevel(level: number): string {
  const color = ['#C4A370', '#D3D3D3', '#FFCA09'];
  return color[level - 1];
}

type StackProps = {
  frontend: typeof stacks.frontend;
  backend: typeof stacks.backend;
  etc: typeof stacks.etc;
};

const Stack: React.FC<StackProps> = ({ frontend, backend, etc }) => {
  // const ref = useRef<HTMLDivElement>(null);
  // const scroll = () => {
  //   if (!ref.current) return;

  //   const rect = ref.current.getBoundingClientRect();
  //   if((rect.top >= 0) && (rect.bottom <= window.innerHeight - 10)) {
  //     console.log('You Can View me');
  //   }
  // }

  // useScroll(scroll);

  return (
    <StackTemplate /* ref={ref} */>
      <h1 className="gugi">기술 스택</h1>
      <p>숙련도는 색깔로 표시됩니다.</p>
      <StackRow title="Frontend" list={frontend} />
      <StackRow title="Backend" list={backend} />
      <StackRow title="Etc" list={etc} />
    </StackTemplate>
  );
};

function StackRow({ title, list }: { title: string, list: Array<{ name: string, description: string, level: number }> }) {
  return (
    <StackRowTemplate>
      <h1>{title}</h1>
      {
        list.map(data => 
          <div className="row" key={data.name}>
            <h2 style={{ backgroundColor: getColorbyLevel(data.level) }}>{data.name}</h2>
            <span>{data.description}</span>
          </div>
        )
      }
    </StackRowTemplate>
  )
};

const StackTemplate = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 6rem;
  margin-bottom: 6rem;
`;

const StackRowTemplate = styled.div`
  width: 47rem;

  h2 {
    margin-top: 0;
    margin-bottom: 0;

    font-size: 1.25rem;

    background-color:  #FFCA09; /* #BEBEC0 #E4BD82 */
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 0.5rem;
  }
  
  ${media.small} {
    width: 23rem;

    .row {
      display: table;
    }

    h2 {
      width: 23rem;
      margin-bottom: 0.5rem;
    }
  }

  ${media.xsmall} {
    width: 17rem;

    .row {
      display: table;
    }

    h2 {
      width: 17rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export default Stack;
