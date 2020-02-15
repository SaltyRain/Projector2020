import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/footer.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      teplitsa: file(relativePath: { eq: "logo-teplitsa.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      novayagaveta: file(relativePath: { eq: "logo-novaya-gazeta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer className="footer container-fluid">
        <div className="footer__wrapper container">
            <div className="row justify-content-between">
                <div className="col">
                    <p>Подвал</p>
                </div>
                <section className="col">
                    <h4 className="visually-hidden">Организаторы хакатона</h4>
                    <ul className="footer__organizers row justify-content-end">
                        <li className="col"><a href="https://novayagazeta.ru"><Img fluid={data.novayagaveta.childImageSharp.fluid}/></a></li>
                        <li className="col"><a href="https://te-st.ru"><Img fluid={data.teplitsa.childImageSharp.fluid}/></a></li>

                    </ul>
                </section>
            </div>
        </div>

    </footer>
  )
}


export default Footer
