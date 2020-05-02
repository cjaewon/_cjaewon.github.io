import React from 'react';
import styled from 'styled-components';

import profileImg from '../../static/image/profile_img.png';

const Profile: React.FC<{}> = () => {
  return (
    <ProfileTemplate>
      <img src={profileImg} alt="profile img" />
      <h1 className="nanum-gothic">Cjaewon</h1>
    </ProfileTemplate>
  );
};

const ProfileTemplate = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;

    width: 170px;
    height: 170px;

    padding: 0.3rem;

    background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
  }

  h1 {
    margin-top: 0.75rem;
  }
`;

export default Profile;