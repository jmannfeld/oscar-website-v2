import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout';
import { MainContainer, PageTitle } from '../components/LayoutComponents';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <MainContainer>
      <PageTitle title="Contact Me" />
      <ContactForm>
        <p>Feel free to get in contact with me!<br />
          You can also reach me at 317-970-0276 or email me directly at <a href="mailto:oarriaga@bsu.edu">oarriaga@bsu.edu</a>.
        </p>
        <form action="mail.php" method="POST">
          <p>Name</p> <input type="text" name="name" />
          <p>Email</p> <input type="text" name="email" />
          <p>Phone</p> <input type="text" name="phone" />
          <p>Message</p><textarea name="message" rows="10" cols="25"></textarea><br />
          <input type="submit" value="SEND" />
        </form>
      </ContactForm>
    </MainContainer>
  </Layout>
)

export default ContactPage;

const ContactForm = styled.div`
  width: 50vw;
  p {
    margin-bottom: 0;
  }
  a {
    color: #cddcea;
    text-decoration: none;
    font-style: italic;
  }
  form {
    padding-top: 20px;
  }
  input, textarea {
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
  input[type=submit] {
    background-color: #e17121;
    cursor: pointer;
  }
`;
