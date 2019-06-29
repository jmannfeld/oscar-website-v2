import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faSoundcloud,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/Layout'
import { MainContainer, PageTitle } from '../components/LayoutComponents'
import SEO from '../components/seo'

const ContactPage = queryResults => (
  <Layout>
    <SEO title="Contact" />
    <MainContainer>
      <ContactWrapper>
        <Title>
          <PageTitle title="Contact Me!" />
        </Title>
        <ContactImage
          fluid={queryResults.data.contactImage.childImageSharp.fluid}
          imgStyle={{ objectPosition: '16%' }}
        />
        <ContactForm>
          <p>
            Hey! Feel free to get in contact with me. Text/call 317-970-0276 or
            email me at <a href="mailto:oarriaga@bsu.edu">oarriaga@bsu.edu</a>.
          </p>
          <form name="contact" method="POST" data-netlify="true">
            <p>Name</p> <input type="text" name="name" />
            <p>Email</p> <input type="email" name="email" />
            <p>Phone</p> <input type="tel" name="phone" />
            <p>Message</p>
            <textarea name="message" rows="10" cols="25" />
            <br />
            <button type="submit">SEND</button>
          </form>
        </ContactForm>
        <SocialMedia>
          <i>Find me on Social Media</i>
          <br />
          <FontAwesomeIcon icon={faTwitter} />
          &nbsp;&nbsp;
          <a
            href="https://twitter.com/IlluminatiRey"
            id="contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <br />
          <FontAwesomeIcon icon={faInstagram} />
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/illuminatirey/"
            id="contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <br />
          <FontAwesomeIcon icon={faSoundcloud} />
          &nbsp;&nbsp;
          <a
            href="https://soundcloud.com/illuminatiking95"
            id="contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </a>
          <br />
          <FontAwesomeIcon icon={faSpotify} />
          &nbsp;&nbsp;
          <a
            href="https://open.spotify.com/artist/5BmfSNmHUhcQtbfmc5QIF6?si=-mv1nBsCQw-ZUiXK-IQe6w"
            id="contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </SocialMedia>
      </ContactWrapper>
    </MainContainer>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query ContactQuery {
    contactImage: file(relativePath: { eq: "oscar.jpg" }) {
      ...fluidImage
    }
  }
`

const ContactWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-column-gap: 75px;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas:
    'form image'
    'form social';
  h1 {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'title'
      'image'
      'social'
      'form';
    grid-column-gap: 50px;
  }
`

const Title = styled.div`
  grid-area: form;
  @media (max-width: 768px) {
    grid-area: title;
  }
`

const ContactImage = styled(Img)`
  border: 3px solid #cddcea;
  grid-area: image;
  width: 100%;
  justify-self: end;
  min-width: 220px;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-top: -20px;
  }
  @media (max-width: 414px) {
    margin-top: -15px;
  }
  @media (min-width: 769px) {
    width: 90%;
  }
`

const SocialMedia = styled.div`
  grid-area: social;
  font-size: 14px;
  border: 3px solid #cddcea;
  padding: 5px;
  height: 145px;
  justify-self: end;
  min-width: 220px;
  width: 100%;
  a {
    color: #cddcea;
    text-decoration: none;
  }
  a:hover {
    color: #e17121;
  }
  @media (min-width: 769px) {
    width: 90%;
  }
`

const ContactForm = styled.div`
  grid-area: form;
  align-self: start;
  margin-top: 95px;
  p {
    margin-bottom: 1px;
  }
  a {
    color: #cddcea;
    text-decoration: none;
    font-style: italic;
  }
  form {
    padding-top: 20px;
  }
  button,
  input,
  textarea {
    width: 100%;
    height: 50px;
    border: 2px solid #e17121;
    border-radius: 4px;
    margin: 0 0 20px 0;
    padding-left: 5px;
    outline: none;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    background-color: #cddcea;
  }
  textarea {
    height: 80px;
    padding-top: 10px;
  }
  button {
    background-color: #e17121;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    margin-top: 175px;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`
