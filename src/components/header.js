import { Link } from "gatsby"
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
    <Navbar  expand="lg">
  <Navbar.Brand href="#home">React-Bootsrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
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
