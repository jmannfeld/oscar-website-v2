import React from 'react'
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 80vw;
  margin: 2em auto;
`;

export const PageTitle = (props) => (
  <TitleContainer>
    <Title>{props.title}</Title>
    {props.subtitle ? <SubTitle>{props.subtitle}</SubTitle> : null}
  </TitleContainer>
)

const TitleContainer = styled.div`
  margin-bottom: 45px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media (max-width: 414px) {
    margin-bottom: 5px;
  }
`;

const Title = styled.h1`
  color: #e17121;
  font-size: 4em;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  @media (max-width: 414px) {
    font-size: 3.25em;
  }
  @media (max-width: 375px) {
    font-size: 3em;
  }
  @media (max-width: 320px) {
    font-size: 2.6em;
  }
`;

const SubTitle = styled.h2`
  color: #daa076;
  font-size: 1.5em;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  @media (max-width: 414px) {
    font-size: 1.2em;
  }
  @media (max-width: 320px) {
    font-size: 1.15em;
  }
`;
