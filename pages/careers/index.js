import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {faFacebook, faTelegram, faTelegramPlane, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import Community from "../../components/community";

export default function Careers() {
    return (
        <div className="careers">
            <Head>
                <title>Careers - AlphaTrue</title>
                <meta name="description" content="Careers - AlphaTrue" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="page-hero">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-start hero-title">
                            <h1>
                                Welcome to AlphaTrue Careers
                            </h1>
                            <p>
                                The company is led by a young, creative team of engineers and managers who are all subject matter experts.
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-end text-md-end hero-img">
                            <img src="../../assets/img/logo-symbol.svg" alt="logo"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-white">
                <Container>
                    <div className="section-title justify-content-start ms-0">
                        <h1 className="text-start">
                            Current Openings
                        </h1>
                        {/*<p className="text-subtitle text-start">*/}
                        {/*    Sorry, there is no job available at the moment.*/}
                        {/*</p>*/}
                    </div>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="career-list">
                                <a href="/careers/marketing/content-writer" target="_blank">
                                    <Card className="card-career">
                                        <CardHeader>
                                            <p>
                                                MARKETING
                                            </p>
                                            <h4>
                                                Content Writer
                                            </h4>
                                        </CardHeader>
                                        <CardBody>

                                        </CardBody>
                                        <CardFooter>
                                            <p>
                                               Remote | Full-time
                                            </p>
                                            <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                                        </CardFooter>
                                    </Card>
                                </a>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="community" className="section-primary">
                <Community/>
            </section>
        </div>
    )
}
