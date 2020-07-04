import React from 'react';
import styled from 'styled-components';

import { ProjectData } from '../../data';

import media from '../../lib/media';


const Project: React.FC<{ data: ProjectData[] }> = ({
  data,
}) => {
  return (
    <ProjectTemplate>
      <h1 className="title gugi">프로젝트</h1>
      <CardsTemplate>
        {data.map(info => 
          <Card {...info} key={info.name} />
        )}
      </CardsTemplate>
    </ProjectTemplate>
  )
};

function Card({ name, description, thumbnail, buttons, stacks }: ProjectData) {
  return (
    <CardTempalte>
      <img src={thumbnail} alt={`${name} thumbnail`} />
      <div className="info">
        <h1>{name}</h1>
        <p>
          {description}
        </p>
        {buttons.map(button => <a href={button.link}>{button.name}</a>)}
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

const CardsTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;

  grid-gap: 1rem;

  ${media.medium} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.small} {
    display: flex;
    flex-direction: column;
  }
`

const CardTempalte = styled.div`
  max-width: 22rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0 ,0, 0, 0.05);

  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 14rem;

    object-fit: cover;

    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    transition: all 1s ease;

    &:hover {
      filter: brightness(85%);
      cursor: pointer;
    }
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