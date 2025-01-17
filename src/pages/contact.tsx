import React, { ReactElement, Fragment } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import "./credits.less";

interface IndexProps {
  data: {
    background: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
  location: any;
}

export default ({ data, location }: IndexProps): ReactElement => {
  return (
    <Fragment>
      <Img
        fluid={data.background.childImageSharp.fluid}
        style={{ position: "fixed", top: 0, bottom: 0, width: "100%" }}
        alt="radio telescope"
      />
      <Header
        pageTitle="Contact"
        pageDescription="Get in touch with the people behind gravity simulator. Any feedback is welcome!"
        location={location}
      />
      <section className="credits-wrapper">
        <h2>The contact form has been temporarily disabled because of spam.</h2>
      </section>
    </Fragment>
  );
};

export const pageQuery = graphql`
  query {
    background: file(relativePath: { eq: "contact.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
