import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {faFacebook, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import Community from "../../components/community";
import Team from "../../components/team";

export default function NewPortfolio() {
    return (
        <div className="about">
            <Head>
                <title>About Us - AlphaTrue</title>
                <meta name="description" content="About Us - AlphaTrue" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="page-hero">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-start hero-title">
                            <h1>
                                Decentralize World Builder
                            </h1>
                            <p>
                                AlphaTrue offers a multi-sectoral strategy and a one-stop solution for your business in the blockchain industry.
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
                    <div className="section-title justify-content-start text-start ms-0">
                        <h1>
                            Who We Are
                        </h1>
                        <p className="text-subtitle text-start">
                            AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.<br/>
                            The company is led by a young, creative team of engineers and managers who are all subject matter experts.
                        </p>
                        <Button color="outline-primary">
                            View Our Portfolio
                        </Button>
                    </div>
                </Container>
            </section>
            <section className="section-diagonal">
                <div className="section-diagonal__top"></div>
                <div className="section-diagonal__bottom"></div>
                <Team/>
            </section>
            <section className="section-white">
                <Container>
                    <div className="section-title">
                        <h1>
                            Learn more about AlphaTrue
                        </h1>
                        <p className="text-subtitle">
                            AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.
                        </p>
                    </div>
                    {/*<Row className="justify-content-center">*/}
                    {/*    <Col lg={4} md={6} sm={12} className="mb-4">*/}
                    {/*        <Card className="card-team">*/}
                    {/*            <CardImg src="../../assets/img/teams/Dinh-Tran.jpeg"/>*/}
                    {/*            <CardHeader>*/}
                    {/*                <h3>*/}
                    {/*                    Dinh Tran*/}
                    {/*                </h3>*/}
                    {/*                <h5>*/}
                    {/*                    CEO*/}
                    {/*                </h5>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                Dinh has 5 years consulting, project management experience in the Blockchain area and Decentralize Finance.<br/>*/}
                    {/*                4 years of experience investing in CryptoCurrencies.*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg={4} md={6} sm={12} className="mb-4">*/}
                    {/*        <Card className="card-team">*/}
                    {/*            <CardImg src="../../assets/img/teams/Lugon.jpeg"/>*/}
                    {/*            <CardHeader>*/}
                    {/*                <h3>*/}
                    {/*                    Lugon*/}
                    {/*                </h3>*/}
                    {/*                <h5>*/}
                    {/*                    CTO*/}
                    {/*                </h5>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                Software architect & Blockchain expert. Worked at several Ethereum based open source projects. CryptoCurrencies Investor.*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg={4} md={6} sm={12} className="mb-4">*/}
                    {/*        <Card className="card-team">*/}
                    {/*            <CardImg src="../../assets/img/teams/Kang.jpeg"/>*/}
                    {/*            <CardHeader>*/}
                    {/*                <h3>*/}
                    {/*                    Khuong Phan (Kang)*/}
                    {/*                </h3>*/}
                    {/*                <h5>*/}
                    {/*                    CMO*/}
                    {/*                </h5>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                Marketing Specialist in the field of Crypto Currency and Blockchain.<br/>*/}
                    {/*                Experience in Market Research and Analysis for 5 years.*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}

                    {/*</Row>*/}
                </Container>
            </section>
            <section className="section-gradient">
                <Container>
                    <h1>
                        Build next-generation decentralized infrastructure
                    </h1>
                </Container>
            </section>
            <section id="community" className="section-white">
                <Community/>
            </section>
        </div>
    )
}
