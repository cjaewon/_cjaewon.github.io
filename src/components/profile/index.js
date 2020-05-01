import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './index.scss';

const Profile = () => {
    return (
      <StaticQuery
        query={profileQuery}
        render={data => {
          return (
            <div className="profile">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} className="profile_img" />
            </div>
          );
        }}
      />
    );
};

const profileQuery = graphql`
  query profileQuery {
    placeholderImage: file(relativePath: { eq: "profile_img.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Profile;