import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const GalleryItem = (props) => (
  <ItemConatiner>
    <div className="text">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer"><GalleryImage fluid={props.imageFluid} alt={props.imgAltText} /></a>
  </ItemConatiner>
)
export default GalleryItem;

const ItemConatiner = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 10vw;
  margin-bottom: 50px;
  h3 {
    margin-bottom: 10px;
  }
  p {
    float: left;
  }
`;

const GalleryImage = styled(Img)`
  width: 30vw;
  border: 3px solid #5330EB;
  :hover {
    cursor: pointer;
  }
`;
