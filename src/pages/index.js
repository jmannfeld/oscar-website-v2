import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import SlidingWords from '../components/SlidingWords/SlidingWords'

class IndexPage extends Component {
  render() {
    const {
      data: { passionImage, expressionImage, concertImage, writingImage },
    } = this.props
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`oscar`, `arriaga`, `rapper`, `producer`]}
        />
        <ImageConatiner>
          <BeatsImage fluid={passionImage.childImageSharp.fluid} />
          <SmokeImage fluid={expressionImage.childImageSharp.fluid} />
          <ConcertImage
            fluid={concertImage.childImageSharp.fluid}
            imgStyle={{ objectPosition: 'top' }}
          />
          <WritingImage fluid={writingImage.childImageSharp.fluid} />
        </ImageConatiner>
        <SlidingWords />
      </Layout>
    )
  }
}

export default IndexPage

const ImageConatiner = styled.div`
  display: grid;
  height: calc(100vh - 72px);
  grid-template-columns: 1.25fr 0.5fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'beats beats writing'
    'smoke concert concert';
`

const BeatsImage = styled(Img)`
  grid-area: beats;
  object-fit: cover;
  border: 3px solid #131313;
  border-top: 0;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(83, 48, 235, 0.23);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const SmokeImage = styled(Img)`
  grid-area: smoke;
  border: 3px solid #131313;
  border-top: 0;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(41, 159, 255, 0.22);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const WritingImage = styled(Img)`
  grid-area: writing;
  border: 3px solid #131313;
  border-top: 0;
  border-left: 0;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(245, 232, 255, 0.25);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const ConcertImage = styled(Img)`
  grid-area: concert;
  object-position: 50% 0;
  border: 3px solid #131313;
  border-top: 0;
  border-left: 0;
  ::after {
    box-shadow: inset 0 0 0 1000px rgba(254, 141, 81, 0.18);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query HomepageImageQuery {
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
`
