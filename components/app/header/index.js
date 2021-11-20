import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    Col, Collapse,
    Container, Nav,
    Navbar,
    NavbarBrand, NavbarToggler, NavItem, NavLink,
    Row
} from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="app-header">
            <Container>
                <Navbar
                    expand="lg"
                    color="light"
                    light
                >
                    <NavbarBrand href="/">
                        <img src="../../assets/img/logo-dark.svg" className="logo" alt="logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about-us/">
                                    About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio/">
                                    Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/careers/">
                                    Careers
                                </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="mailto:support@alphatrue.com" target="_blank">
                                Contact
                              </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

