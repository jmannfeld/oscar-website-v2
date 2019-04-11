import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { MainContainer, PageTitle } from '../components/LayoutComponents';
import SEO from '../components/seo';

const MusicPage = (query) => (
  <Layout>
    <SEO title="Music" />
    <MainContainer>
      <PageTitle title="Music" subtitle="Find me on SoundCloud ✌️" />
      <MusicDescription>
        <p>Born in the Windy City of Chicago, Illinois, where he was exposed to many forms of genres of music. As a child, he would get a lot of his hip hop influence from his father, with Eminem, 50 cent, and Lil Wayne always in rotation. He has been writing all of his life from short stories he would come up in his head and begin to write poetry at the age of 12. As he continued his education, he continued to write in all of his classes, working on his craft. Every now and then, he would get the idea to become a rapper of the sort, but never was confident enough or never thought he had a good rapping voice that people would want to listen to. As he got older, he started to listen to a lot of Kid Cudi and Kanye West and was heavily inspired by their talent and their drive to push the musical agenda for music as a whole. He started making beats his first year of college after flunking out of music theory in high school. Currently based in Indianapolis, he has been producing music for all sorts of music genres for about 5 years now where he raps, sings, and produces a lot of his own material to share with the world as he starts to develop a loyal following towards his music. He met Joseph Luker on the internet (Owner of SociopathicRecords) and is currently signed with him, to produce his first major debut album coming 2019.</p>
        <Img fluid={query.data.performingImage.childImageSharp.fluid} className='performing' />
      </MusicDescription>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/603427233&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/597495072&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/550434585&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/519990207&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="2" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304018485&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="3" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263947412&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="4" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470387403&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="5" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/456071736&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="6" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334807548&color=%235330eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </MainContainer>
  </Layout>
)

export default MusicPage;

export const query = graphql`
  query MusicImageQuery {
    performingImage: file(relativePath: { eq: "performing.jpeg" }) {
      ...fluidImage
    }
  }
`;

const MusicDescription = styled.div`
  display: grid;
  grid-template-columns: 45vw 30vw;
  justify-content: space-between;
  margin-bottom: 45px;
  p {
    margin-bottom: 0px;
  }
  .performing {
    border: 3px solid #5330EB;
  }
`;
