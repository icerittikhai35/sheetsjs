import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="pageLoop">Array Mathods</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="pageCheatsheetJS">Cheatsheet JS</Nav.Link>
                        <Nav.Link href="pageJStips">JS Tips</Nav.Link>
                        <NavDropdown title="CSS tips" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="pageBoxModel">Box Model</NavDropdown.Item>
                            <NavDropdown.Item href="pageShorthand">ShorthandCSS</NavDropdown.Item>
                            <NavDropdown.Item href="pageGridAndFlex">Grid and Flex</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="pageUXUI">UX/UI</NavDropdown.Item>
                            <NavDropdown.Item href="pageButtonCSS">UX/UI Button</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="pageJSDom">JavaSript Dom</Nav.Link>
                        <Nav.Link href="pageThemeWeb">Theme Web</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;