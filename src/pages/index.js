import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends Component {
  render() {

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ImageConatiner>
          <MainImage fluid={this.props.data.passionImage.childImageSharp.fluid} />
          <SubImage1 fluid={this.props.data.expressionImage.childImageSharp.fluid} />
          <SubImage2 fluid={this.props.data.concertImage.childImageSharp.fluid} imgStyle={{ 'objectPosition': 'top' }} />
          <SubImage3 fluid={this.props.data.writingImage.childImageSharp.fluid} />
          <MainText>
            <p>PASSION</p>
            <p>EXPRESSION</p>
            <p>DRIVE</p>
            <p>DETERMINATION</p>
          </MainText>
        </ImageConatiner >
      </Layout>
    );
  }
}

export default IndexPage

const ImageConatiner = styled.div`
  display: grid;
  height: calc(100vh - 72px);
  grid-template-columns: 1.25fr .50fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "beats beats writing"
    "smoke concert concert";
`;

const MainText = styled.div`
  position: absolute;
  top: calc(50% - 36px);
  left: calc(50% - 84px);
  z-index: 150;
  border: 3px solid #5330EB;
  padding: 5px 10px 5px 5px;
  background: #131313;
  font-style: italic;
  font-size: 1.2em;
  color: #191919;
  text-shadow: rgba(83, 48, 235, 0.9) 2px 2px;
  font-size: 5vmin;
  font-family: 'Raleway', sans-serif;
  line-height: 1.5em;
  transform: skew(-2deg);
  p {
    margin-bottom: 0;
  }
`;


const MainImage = styled(Img)`
  grid-area: beats;
  object-fit: cover;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(83, 48, 235, 0.23);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const SubImage1 = styled(Img)`
  grid-area: smoke;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(41, 159, 255, 0.22);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const SubImage2 = styled(Img)`
  grid-area: concert;
  object-position: 50% 0;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(254, 141, 81, 0.18);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const SubImage3 = styled(Img)`
  grid-area: writing;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(245, 232, 255, 0.25);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;


export const query = graphql`
  query ImageQuery {
    passionImage: file(relativePath: { eq: "beats.jpg" }) {
      ...fluidImage
    }
    expressionImage: file(relativePath: { eq: "smoke.jpg" }) {
      ...fluidImage
    }
    concertImage: file(relativePath: { eq: "concert.jpg" }) {
      ...fluidImage
    }
    writingImage: file(relativePath: { eq: "writing.jpg" }) {
      ...fluidImage
    }
  }
`;
