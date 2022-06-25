import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import icon_home from './icon_home.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img
                                    src={icon_home}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav
                                    fill
                                    variant="tabs"
                                    defaultActiveKey="/home"
                                    className="mx-auto"
                                >
                                    <Nav.Link href="/"> Главная </Nav.Link>
                                    <Nav.Link href="/reviews"> Отзывы </Nav.Link>
                                    <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}
