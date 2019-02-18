import React, {Component} from 'react'

import Layout from '../components/Layout';
import { MainContainer, PageTitle } from '../components/LayoutComponents';
import SEO from '../components/seo';
import GalleryItem from '../components/GalleryItem';

class GalleryPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Gallery" />
        <MainContainer>
          <PageTitle title="Gallery" subtitle="View my past and future projects" />
          <GalleryItem
            title='Crustacean Project'
            description='A short independent film for a school project. A team of 5 were able to come together and bring the amazing
              classic known as Crustacean TV. A story about one man’s mission to find out why his best friend turned into a lobster.'
            link='https://www.youtube.com/watch?v=g36yGFLylZ4&feature=youtu.be'
            imageFluid={this.props.data.lobsterImage.childImageSharp.fluid}
            imgAltText='Lobster'
          />
          <GalleryItem
            title='TRTH'
            description='After being signed to Sociopathic Records, Illuminati King and Freedom the 10th Wonder team up to drop the
              first single off Illuminati King first debut album.'
            link='https://www.youtube.com/watch?v=HYDoMOl4mdoe'
            imageFluid={this.props.data.TRTHImage.childImageSharp.fluid}
            imgAltText='TRTH Project'
          />
          <GalleryItem
            title='The Amazing World of Oscar Arriaga'
            description='My first website project for TCOM351 at Ball State.'
            link='../mp1/index.html'
            imageFluid={this.props.data.mp1Image.childImageSharp.fluid}
            imgAltText='MP1 Project"'
          />
          <GalleryItem
            title='A Slice of My Life'
            description='My third website project for TCOM351 at Ball State.'
            link='../mp3/index.html'
            imageFluid={this.props.data.mp3Image.childImageSharp.fluid}
            imgAltText='MP3 Project'
          />
        </MainContainer>
      </Layout>
    )
  }
}

export default GalleryPage

export const query = graphql`
  query GalleryImageQuery {
    lobsterImage: file(relativePath: { eq: "lobster.png" }) {
      ...fluidImage
    }
    TRTHImage: file(relativePath: { eq: "TRTH.png" }) {
      ...fluidImage
    }
    mp1Image: file(relativePath: { eq: "mp1.png" }) {
      ...fluidImage
    }
    mp3Image: file(relativePath: { eq: "mp3.png" }) {
      ...fluidImage
    }
  }
`;