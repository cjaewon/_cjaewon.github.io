import mealbotThumbnail from '../../static/image/mealbot-thumbnail.jpg';
import letterbotThumbnail from '../../static/image/letterbot-thumbnail.png';

export type ProjectData = {
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  stacks: string[];
}

export const projects: ProjectData[] = [{
    name: '급식봇',
    description: '전국 급식을 알려주는 카카오톡 급식봇 입니다.',
    thumbnail: mealbotThumbnail,
    link: 'http://pf.kakao.com/_xjXYVT',
    stacks: ['Node.js', 'Koa.js', 'serverless', 'TypeScript'],
  }, {
    name: '편지봇 / letterbot',
    description: '깃헙 액션을 사용하여 매일 아침마다 브리핑을 해주는 봇 입니다.',
    thumbnail: letterbotThumbnail,
    link: 'https://github.com/cjaewon/letterbot',
    stacks: ['Node.js', 'github action', 'TypeScript'],
  }
];

export const stacks = {
  frontend: [{
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
  }],

  backend: [{
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
  }],

  etc: [{
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
  }],
}