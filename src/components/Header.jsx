import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home"> <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/logo-alternative.png" alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                
                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Multiple v1</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Multiple v2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Multiple v5</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Multiple v4</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Multiple v5</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Events" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Event Listing 1</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Event Listing 2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Event Listing 3</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Event Listing 4</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Event Listing 5</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Calendar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Calendar</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">List Calendar</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Speakers" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Speaker Listing 1</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Speaker Listing 2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Speaker Listing 3</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Speaker Listing 4</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Speaker Listing 5</NavDropdown.Item>
                </NavDropdown>  

                <NavDropdown title="Venues" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Venue Listing </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Categorized Venues</NavDropdown.Item>
                </NavDropdown>  

                <NavDropdown title="Schedules" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Schedule 1</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Schedule 2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Schedule 3</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Schedule 4</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Schedule 5</NavDropdown.Item>
                </NavDropdown>      

                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Sponsors</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Pricing Tables</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Blog</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Blog 2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Blog 3</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Contact Us</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">Contact Us 2</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/">About Us</NavDropdown.Item>
                </NavDropdown>       

              </Nav>
              <div className="navbar-cart-img">
                <span><FaShoppingCart /></span>
              </div>
              <ul className="navbar-user-box">
                <li><a href="/">Sign In</a></li>
                <li><a href="/">Sign Up</a></li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
