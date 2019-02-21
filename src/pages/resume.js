import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout';
import { MainContainer, PageTitle } from '../components/LayoutComponents';
import SEO from '../components/seo';

const ResumePage = () => {
  const year = new Date().getFullYear();
  return (
    <Layout>
      <SEO title="Resume" />
      <MainContainer>
        <Resume>
          <PageTitle title="Resume" subtitle={`Oscar Arriaga - ${year}`} include/>
          <ContactInfo>
            <div class="address">
              <i>1608 N Janney<br />
                Muncie, IN 47304</i><br />
                317-970-0276<br />
              <a href="mailto:oaarriaga@bsu.edu" id="contact">oaarriaga@bsu.edu</a>
            </div>
            <button><a href="oscar_arriaga_resume.pdf" download>DOWNLOAD</a></button>
          </ContactInfo>
          <div className="resume-wrapper">

          <ResumeHeading>SKILLS</ResumeHeading>
          <p>Experienced Web Developer* Audio Engineer* Music Producer* Video Editor* Bilingual*</p>

          <ResumeHeading>EDUCATION</ResumeHeading>
          <small>AUGUST 2015 - MAY 2019</small>
          <h4>Ball State University, Muncie - <i>Telecommunications/Video Production and Film and Script Writing</i></h4>
          <p className="education-text">After transferring from Ivy Tech Community College, I chose to spend the rest of my educational endeavors in
            pursuit of a Telecommunications degree in order to be versatile in video editing and to work on audio and video
          projects.</p>

          <ResumeHeading>EXPERIENCE</ResumeHeading>
          <small>MAY 2012 - PRESENT</small>
          <h4>Five Star Residence, Noblesville - <i>Cook</i></h4>
          <ul>
            <li>Work with many culinary experts</li>
            <li>Trained in every part of the kitchen in order to keep it running</li>
            <li>Support the needs of the elderly in order for them to be comfortable</li>
          </ul>
          <small>JULY 2015 - NOVEMBER 2015</small>
          <h4>Kohl&#39;s, Carmel - <i>Store Associate</i></h4>
          <ul>
            <li>Unloaded the trucks two to three times a week</li>
            <li>Restocked the with store products</li>
            <li>Helped customers find products and make their shopping experience easy and enjoyable</li>
          </ul>
          <small>MAY 2013 - DECEMBER 2013</small>
          <h4>Jersey&#39;s Cafe, Carmel - <i>Server</i></h4>
          <ul>
            <li>Worked a in fast paced facility to give the customer the best experience possible</li>
            <li>Was a team player when it came to getting the job done</li>
          </ul>
          </div>
        </Resume>
      </MainContainer>
    </Layout>
  )
}

export default ResumePage;

const Resume = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw;
  .resume-wrapper {
    grid-column: span 2;
  }
  .education-text {
    padding-top: 5px;
  }
  small {
    color: #daa076;
  }
  h3, h4, h5 {
    margin-bottom: 0;
    line-height: 1.4;
  }
  li {
    margin-bottom: 0;
    line-height: 1.8;
  }
  `;

const ContactInfo = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
  /* float: right; */
  /* width: 500px; */
`;


const ResumeHeading = styled.h3`
  margin-top: 30px;
  color: #e17121;
`;
