import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const bios = [
  '웹 프론트 / 백엔드 개발자',
  '천재(?) 개발자',
  'Node.js / Golang 을 좋아하는 학생',
];

const Bio: React.FC<{}> = () => {
  const [bioCount, setBioCount] = useState(0);

  useEffect(() => {
    const updateBio = setInterval(
      () => setBioCount(bioCount => bioCount >= bios.length ? 0 : bioCount + 1),
    9000);

    return () => clearInterval(updateBio);
  }, []);

  return (
    <BioTemplate>
      <h1 className="gugi">" {bios[bioCount]} "</h1>
    </BioTemplate>
  );
};

const BioTemplate = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 2rem;

    font-size: 2.25rem;
    opacity: 0.85;
  }
`;

export default Bio;