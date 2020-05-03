import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const bios = [
  '안녕하세요 🖐🏻',
  '저는 💻 프로그래밍을 좋아하는 개발자 겸 학생이에요.',
  '주로 🌲Node.js 와 🐿 Go 를 사용합니다',
];

const Bio: React.FC<{}> = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateBio = setInterval(() =>
      setIndex(prev => {
        if (!bios[prev + 2]) clearInterval(updateBio);
        return prev + 1;
      })
    , 6000);

    return () => clearInterval(updateBio);
  }, []);

  return (
    <BioTemplate>
      <h1 className="song-myung">" {bios[index]} "</h1>
    </BioTemplate>
  );
};

const BioTemplate = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 4rem;

    font-size: 2.25rem;
    opacity: 0.85;
  }
`;

export default Bio;