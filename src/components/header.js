import PropTypes, { func } from "prop-types"
import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/header.scss"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"

import { Link, animateScroll as scroll} from "react-scroll";

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
    <div className="container">
      <Navbar  expand="lg">
    <Navbar.Brand href="#home">
      <Img fluid={data.logo.childImageSharp.fluid}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav>
          <Link
            className="nav-link"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Ссылка1
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Ссылка2
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Ссылка3
          </Link>
        {/* <Nav.Link href="#section2">Ссылка2</Nav.Link> */}
        {/* <Nav.Link href="#section3">Ссылка3</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>

    {/* <div className="header__wrapper container">
      <div className="row justify-content-around align-items-center">  
        <div className="col">
          <div className="header__logo">
            <Link to="/">
              <Img fluid={data.logo.childImageSharp.fluid}/>
            </Link>
          </div>
        </div>

        <div className="col-1 d-md-none">
          <div className="header__burger change" onClick={BurgerChange}>
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
            <li><Link to="/#section1">ссылка 1</Link></li>
            <li><Link to="/#section2">ссылка 2</Link></li>
            <li><Link to="/#section3">ссылка 3</Link></li>
          </ul>
      </nav>
    </div> */}

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
    // function BurgerOpen(e) {
    //   e.
    // }
    // alert("function!");
  // x.classList.toggle("change");
  // this.state({className: 'change'});
}

export default Header
