import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faLinkedinIn, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="app-footer">
            <Container>
                <Row className="footer-menu">
                    <Col lg={3} md={12} className="text-center text-lg-start">
                        <img src="../../assets/img/logo-light.svg" className="footer-logo" alt="footer logo"/>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-3">
                        <h5>
                            AlphaTrue
                        </h5>
                        <ul>
                            <li>
                                <a href="/about-us/">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Announcements
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Brand Assets
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-3">
                        <h5>
                            Contact
                        </h5>
                        <ul>
                            <li>
                                <a href="mailto:support@alphatrue.com" target="_blank">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="/careers/">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12} className="mb-3">
                        <h5>
                            Portfolio
                        </h5>
                        <ul>
                            <li>
                                <a href="/portfolio/">
                                    AlphaTrue Portfolio
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-start">
                            Copyright © 2021 AlphaTrue. All Rights Reserved.
                        </Col>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-end footer-social">
                            <a href="https://twitter.com/AlphaTrueAPT" target="_blank">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="https://www.linkedin.com/company/alphatrue" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

