import React from 'react'
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 80vw;
  margin: 2em auto;
`;

export const PageTitle = (props) => (
  <TitleContainer>
    <Title>{props.title}</Title>
    <SubTitle>{props.subtitle}</SubTitle>
  </TitleContainer>
)

const TitleContainer = styled.div`
  margin-bottom: 45px;
`;


const Title = styled.h1`
  color: #e17121;
  font-size: 4em;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  @media (max-width: 414px) {
    font-size: 3em;
  }
`;

const SubTitle = styled.h2`
  color: #daa076;
  font-size: 1.5em;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  @media (max-width: 414px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: .75em;
  }
`;
