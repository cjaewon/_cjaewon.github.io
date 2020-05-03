import React from 'react';
import styled from 'styled-components';

import profileImg from '../../static/image/profile_img.jpg';

const Profile: React.FC<{}> = () => {
  return (
    <ProfileTemplate>
      <img src={profileImg} alt="profile img" />
      <h1 className="gugi">Cjaewon</h1>
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

    width: 9rem;
    height: 9rem;

    padding: 0.3rem;
  }
`;

export default Profile;