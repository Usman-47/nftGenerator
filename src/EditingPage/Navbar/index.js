import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react'
import './style.css'
import { Image } from 'react-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom"

const Navb = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className='navbar-container'>
      <NavLink toggle="#">
        <Image src="/images/navbar-image.png" className='navbar-logo'/>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <NavLink to="#">MINTING NOW</NavLink>
          <NavLink eventkey={2} to="/">
            UPCOMING MINTS
          </NavLink>
          <NavLink to="#" >CREATE</NavLink>
          <NavDropdown title="WEB3 SERVICES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">WEB3 SERVICES</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
          </NavDropdown>  
          <NavLink to="#">NFT TOOL SUITE</NavLink>
          <NavDropdown title="CHAIN GAMES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">WEB3 SERVICES</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
          </NavDropdown> 
          {/* <WalletMultiButton/>  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navb
