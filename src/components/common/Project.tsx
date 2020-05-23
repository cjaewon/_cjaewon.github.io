import React from 'react';
import styled from 'styled-components';

import mealbotThumbnail from '../../static/image/mealbot-thumbnail.jpg';
import letterbotThumbnail from '../../static/image/letterbot-thumbnail.png';

import media from '../../lib/media';

type ProjectData = {
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  stacks: string[];
}

const data: ProjectData[] = [{
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
}];

const Project: React.FC<{}> = () => {
  return (
    <ProjectTemplate>
      <h1 className="title gugi">프로젝트</h1>
      {data.map(info => 
        <Card {...info} key={info.name} />
      )}
    </ProjectTemplate>
  )
};

function Card({ name, description, thumbnail, link, stacks }: ProjectData) {
  return (
    <CardTempalte>
      <img src={thumbnail} alt={`${name} thumbnail`} />
      <div className="info">
        <h1>{name}</h1>
        <p>
          {description}
        </p>
        <a href={link}>사용해보기</a>
      </div>
      <div className="tag">
        {
          stacks.map(stack => <span key={stack}>{stack}</span>)
        }
      </div>
    </CardTempalte>
  );
}

const ProjectTemplate = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 6rem;
  margin-bottom: 6rem;

  .title {
    margin-bottom: 5rem;
  }
`;

const CardTempalte = styled.div`
  max-width: 22rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0 ,0, 0, 0.05);
  border-radius: 20px;

  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 14rem;

    object-fit: cover;

    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  .info {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
  }


  h1 {
    font-size: 1.25rem;

    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    margin-top: 0.45rem;
    color: #4a5568;
  }

  a {
    text-decoration: none;
    color: #4299e1;
  }

  .tag {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 0.75rem;

    span { 
      color: #2D3748;
      background-color: #ecf0f2;

      border-radius: 12px;
      padding: 5px;

      margin-right: 0.4rem;
      margin-left: 0.4rem;

      display: flex;
      align-items: center;
    }
  }

  ${media.small} {
    max-width: 21rem;
  }
`;

export default Project;