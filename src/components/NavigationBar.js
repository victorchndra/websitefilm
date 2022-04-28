import { Container, Nav, Navbar } from "react-bootstrap"

const NavigationBar = () => { //buat function, NavigationBar merupakan variabel
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>VICTORFILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>Superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar