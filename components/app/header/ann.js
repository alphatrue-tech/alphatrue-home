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

export default function Ann() {
    return (
        <div className="app-ann">
            <Container>
                <div className="ann-content">
                    <div className="ann-badge">
                        NEW
                    </div>
                    <div className="ann-link">
                        <a href="https://blog.alphatrue.com/alphatrue-and-mytheria-enter-historic-partnership/" target="_blank">
                            AlphaTrue and Mytheria enter historic partnership
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

