import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
  state = {
    navBackground: 'transparent',
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 70 ? 'transparent' : 'white';

      this.setState({ navBackground: backgroundcolor });
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
            }}>
            <Navbar.Brand> Stranger</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto"></Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavBar;
