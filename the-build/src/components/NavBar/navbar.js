import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class NavBar extends React.Component {
  state = {
    navBackground: 'transparent',
    wordColor: 'black',
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 70 ? 'transparent' : 'black';
      const color = window.scrollY < 70 ? 'black' : 'white';

      this.setState({ navBackground: backgroundcolor, wordColor: color });
    });
  }
  render() {
    return (
      <div
        style={{
          height: '40rem',
        }}>
        <Container className="p-0" fluid={true}>
          <Navbar
            expand="lg"
            style={{
              backgroundColor: `${this.state.navBackground}`,

              position: 'fixed',
              top: '0px',
              width: '100%',
              borderBottom: '1px solid grey',
            }}>
            <h3
              style={{ fontStyle: 'italic', fontWeight: 'bolder', fontSize: '2rem', color: `${this.state.wordColor}` }}>
              {' '}
              Stranger
            </h3>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <div>
                  <a
                    href="/about"
                    style={{ color: `${this.state.wordColor}`, marginRight: '1rem', fontWeight: 'bold' }}>
                    About
                  </a>{' '}
                  <a href="/shop" style={{ color: `${this.state.wordColor}`, marginRight: '1rem', fontWeight: 'bold' }}>
                    Shop
                  </a>{' '}
                  <a href="/Cart" style={{ color: `${this.state.wordColor}`, marginRight: '1rem', fontWeight: 'bold' }}>
                    Cart
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavBar;
