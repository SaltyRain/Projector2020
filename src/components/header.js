import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/header.scss"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
return (
  <header className="header container-fluid">
    <div className="header__wrapper container">
      <div className="row justify-content-around align-items-center">  
        <div className="col">
          <div className="header__logo">
            <Link to="/">
              <Img fluid={data.logo.childImageSharp.fluid}/>
            </Link>
          </div>
        </div>

        <div className="col-1 d-md-none">
          <div className="header__burger" onClick={BurgerChange(this)}>
              <div className="header__burger_bar1"></div>
              <div className="header__burger_bar2"></div>
              <div className="header__burger_bar3"></div>
          </div>
        </div>
        

        <nav className="col d-none d-md-block col-md-8">
          <ul className="header__nav">
            <li><Link to="/#section1">ссылка 1</Link></li>
            <li><Link to="/#section2">ссылка 2</Link></li>
            <li><Link to="/#section3">ссылка 3</Link></li>
          </ul>
        </nav>

      </div>

      <nav className="header__mobile-nav">
      <ul>
            <li><Link to="/#">ссылка 1</Link></li>
            <li><Link to="/#">ссылка 2</Link></li>
            <li><Link to="/#">ссылка 3</Link></li>
          </ul>
      </nav>
    </div>

  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function BurgerChange() {
    // alert("function!");
  // x.classList.toggle("change");
  // this.state({className: 'change'});
}

export default Header
