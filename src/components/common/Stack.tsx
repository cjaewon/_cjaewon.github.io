import React from 'react';
import styled from 'styled-components';

import media from '../../lib/media';

function getColorbyLevel(level: number): string {
  const color = ['#C4A370', '#D3D3D3', '#FFCA09'];
  return color[level - 1];
}

const Stack: React.FC<{}> = () => {
  return (
    <StackTemplate>
      <h1 className="gugi">기술 스택</h1>
      <p>숙련도는 색깔로 표시됩니다.</p>
      <StackRow title="Frontend" list={
        [{
          name: 'JavaScript',
          description: '가장 잘 쓰고 많이 써본 프로그래밍 언어입니다.',
          level: 3,
        }, 
        {
          name: 'React.js',
          description: 'React.js를 웹 프로젝트에서 거의 사용하고 계속 배워가는 중입니다.',
          level: 3,
        }, 
        {
          name: 'Vue.js',
          description: 'Vue로 심화적인 건 개발이 가능하지만 Typescript 지원 부재로 요즘은 리액트를 쓰고 있습니다.',
          level: 2,
        },
        {
          name: 'Css',
          description: '완벽하게 사용 할 순 없지만 구글의 힘을 빌려서 보완 가능합니다',
          level: 2,
        },
        {
          name: 'Electron',
          description: '간단한 프로그램을 만들 정도로 사용 할 수 있습니다.',
          level: 1,
        },
      ]
      } />
      <StackRow title="Backend" list={
        [{
          name: 'JavaScript(Node.js)',
          description: '가장 잘 쓰고 많이 써본 프로그래밍 언어입니다.',
          level: 3,
        }, 
        {
          name: 'Koa.js / Express.js',
          description: 'Express.js 를 주로 사용했지만 요즘은 Koa.js를 많이 사용하고 있습니다.',
          level: 3,
        }, 
        {
          name: 'Typescript',
          description: '자동완성과 생산성 때문에 거의 모든 프로젝트에서 사용하고 있습니다.',
          level: 2,
        },
        {
          name: 'Websocket / Socket.io',
          description: '필요할때 사용 가능 할 정도로 알고 있습니다.',
          level: 2,
        },
        {
          name: 'Go',
          description: '생산성과 성능 때문에 관심이 있고 배우고 있는 언어입니다.',
          level: 2,
        },
      ]
      } />
      <StackRow title="Etc" list={
        [{
          name: 'Python',
          description: '예전에 웹 개발로 사용했지만 요즘은 알고리즘을 풀때 사용하는 언어입니다.',
          level: 2,
        }, 
        {
          name: 'Git / Github',
          description: '간단한 명령어를 사용 할 수 있습니다',
          level: 1,
        }, 
        {
          name: 'Mysql / Mariadb',
          description: '프로젝트에서는 많이 사용하지만 Orm 사용으로 Sql를 마스터 하진 못 했습니다.',
          level: 1,
        },
      ]
      } />
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
