import mealbotThumbnail from '../static/image/mealbot-thumbnail.jpg';
import letterbotThumbnail from '../static/image/letterbot-thumbnail.png';
import gomokuioThumbnail from '../static/image/gomokuio-thumbnail.png';
import helloCjaewonThumbnail from '../static/image/hello-cjaewon-thumbnail.png';
import letterbotSubscriptionThumbnail from '../static/image/letterbot-subscription-thumbnail.png';

type Buttons = {
  name?: string,
  link?: string,
}

export type ProjectData = {
  name: string;
  description: string;
  thumbnail: string;
  buttons: Buttons[],
  stacks: string[];
}

export const projects: ProjectData[] = [{
    name: '급식봇',
    description: '전국 급식을 알려주는 카카오톡 급식봇 입니다.',
    thumbnail: mealbotThumbnail,
    buttons: [{
      name: '사용해보기',
      link: 'http://pf.kakao.com/_xjXYVT',
    }],
    stacks: ['Node.js', 'Koa.js', 'serverless', 'TypeScript'],
  }, {
    name: '편지봇 / letterbot',
    description: '깃헙 액션을 사용하여 매일 아침마다 브리핑을 해주는 봇 입니다.',
    thumbnail: letterbotThumbnail,
    buttons: [{
      name: '소스코드 보기',
      link: 'https://github.com/cjaewon/letterbot',
    }],
    stacks: ['Node.js', 'github action', 'TypeScript'],
  }, {
    name: '오목 io',
    description: 'Websocket과 html 만으로 만든 웹에서 오목을 플레이 할 수 있는 웹 게임 입니다.',
    thumbnail: gomokuioThumbnail,
    buttons: [{
      name: '플레이 하기',
    }],
    stacks: ['Websocket', 'TypeScript', 'Sass', 'Node.js'],
  }, {
    name: 'Hello Cjaewon',
    description: '자기소개 및 프로젝트 등을 소개해둔 이력서 페이지 입니다.',
    thumbnail: helloCjaewonThumbnail,
    buttons: [{
      name: '웹사이트 이동하기',
      link: 'https://hello.cjaewon.com',
    }],
    stacks: ['React', 'TypeScript', ],
  }, {
    name: '편지봇 웹훅레터',
    description: 'Go와 html,js 로 개발된 매일마다 웹훅 링크로 편지를 보내주는 서비스 입니다.',
    thumbnail: letterbotSubscriptionThumbnail,
    buttons: [{
      name: '소스코드 보기',
      link: 'https://github.com/cjaewon/letterbot-subscription',
    }],
    stacks: ['Golang (echo)', 'parcel', 'TypeScript']
  }
];

export type StacksData = {
  frontend: {
    name: string;
    description: string;
    bgColor?: string;
    color?: string;
  }[];

  backend: {
    name: string;
    description: string;
    bgColor?: string;
    color?: string;
  }[];

  etc: {
    name: string;
    description: string;
    bgColor?: string;
    color?: string;
  }[];
}

export const stacks: StacksData = {
  frontend: [{
    name: 'JavaScript',
    description: '가장 잘 쓰고 많이 써본 프로그래밍 언어입니다.',
    bgColor: '#f0db4f',
    color: 'black',
  }, 
  {
    name: 'React.js',
    description: 'React.js를 웹 프로젝트에서 거의 사용하고 계속 배워가는 중입니다.',
    bgColor: '#222',
    color: '#00d8ff',
  }, 
  {
    name: 'Vue.js',
    description: 'Vue로 심화적인 건 개발이 가능하지만 Typescript 지원 부재로 요즘은 리액트를 쓰고 있습니다.',
    bgColor: '#34495E',
    color: '#41B883',
  },
  {
    name: 'Css',
    description: '완벽하게 사용 할 순 없지만 구글의 힘을 빌려서 보완 가능합니다',
  },
  {
    name: 'Electron',
    description: '간단한 프로그램을 만들 정도로 사용 할 수 있습니다.',
  }],

  backend: [{
    name: 'Node.js',
    description: '가장 잘 쓰고 많이 써본 프로그래밍 언어입니다.',
    bgColor: '#68A063',
    color: '#0f0f0f',
  }, 
  {
    name: 'Koa.js / Express.js',
    description: 'Express.js 를 주로 사용했지만 요즘은 Koa.js를 많이 사용하고 있습니다.',
  }, 
  {
    name: 'Typescript',
    description: '자동완성과 생산성 때문에 거의 모든 프로젝트에서 사용하고 있습니다.',
    bgColor: '#0081D6',
    color: 'white',
  },
  {
    name: 'Websocket / Socket.io',
    description: '필요할때 사용 가능 할 정도로 알고 있습니다.',
  },
  {
    name: 'Go',
    description: '생산성과 성능 때문에 관심이 있고 배우고 있는 언어입니다.',
    bgColor: '#29BEB0',
  }],

  etc: [{
    name: 'Python',
    description: '예전에 웹 개발로 사용했지만 요즘은 알고리즘을 풀때 사용하는 언어입니다.',
    bgColor: '#4B8BBE',
    color: '#FFD43B',
  }, 
  {
    name: 'Git / Github',
    description: '간단한 명령어를 사용 할 수 있습니다',
  }, 
  {
    name: 'Mysql / Mariadb',
    description: '프로젝트에서는 많이 사용하지만 Orm 사용으로 Sql를 마스터 하진 못 했습니다.',
  }],
}