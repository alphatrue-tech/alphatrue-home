import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {faFacebook, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import Community from "../../components/community";

export default function NewPortfolio() {
    return (
        <div className="portfolio">
            <Head>
                <title>Home - AlphaTrue</title>
                <meta name="description" content="Home - AlphaTrue" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="page-hero">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-start hero-title">
                            <h1>
                                Our Portfolio
                            </h1>
                            <p>
                                We’re proud to support and invest in over 10+ companies in the crypto industry, across every stage and sub-sector. <br/>
                                Meet our portfolio below.
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
                            Our Story
                        </h1>
                        <p className="text-subtitle text-start">
                            At AlphaTrue, we’re committed to creating an open financial system for the world. We can’t do it alone, and we’re eagerly rooting for the brightest minds in the crypto ecosystem to build empowering products for everyone.<br/>
                            We provide financing to promising early stage companies that have the teams and ideas that can move the space forward in a positive, meaningful way.<br/>
                            We’re taking a long term view of the space, and we believe that multiple approaches are healthy and good. Our goal is simply to help the most compelling companies in the space flourish.
                        </p>
                    </div>
                </Container>
            </section>
            <section className="section-diagonal">
                <div className="section-diagonal__top"></div>
                <div className="section-diagonal__bottom"></div>
                <Container>
                    <div className="section-title">
                        <h1>
                            Our Investments
                        </h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/traderjoe_xyz" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/TraderJoe.png" alt="Trader Joe"/>
                                        </div>
                                        <h3>
                                            Trader Joe
                                        </h3>
                                        <p>
                                            Serving the community at the frontier of DeFi.<br/>
                                            #1 DEX on Avalanche
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/ThetanArena" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/ThetanArena.png" alt="Thetan Arena"/>
                                        </div>
                                        <h3>
                                            Thetan Arena
                                        </h3>
                                        <p>
                                            Thetan Arena is a esport (Moba + Battle Royale) game based on blockchain technology. You can gather your friends, form a team, battle with others and earn money with just your skills.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/hotcrosscom" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/HotCross.png" alt="Hot Cross"/>
                                        </div>
                                        <h3>
                                            Hot Cross
                                        </h3>
                                        <p>
                                            Hot Cross is a multi-chain tool suite created for both blockchain teams and their communities.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/CropperFinance" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/Cropper.png" alt="CropperFinance"/>
                                        </div>
                                        <h3>
                                            CropperFinance
                                        </h3>
                                        <p>
                                            The Ultimate Yield Farming Platform on Solana.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/GetKalao" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/Kalao.png" alt="Kalao"/>
                                        </div>
                                        <h3>
                                            Kalao
                                        </h3>
                                        <p>
                                            Build the future of digital and virtual world.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/port_finance" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/PortFinance.png" alt="PortFinance"/>
                                        </div>
                                        <h3>
                                            P◎rt Finance
                                        </h3>
                                        <p>
                                            A suite of money market products built on Solana.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>

                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/moniwar_game" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/Moniwar.png" alt="Moniwar"/>
                                        </div>
                                        <h3>
                                            Moniwar
                                        </h3>
                                        <p>
                                            Moniwar, where you can enjoy a novelistic gaming experience and earn money simultaneously!
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://twitter.com/solarbeamio" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/SolarBeam.png" alt="SolarBeam"/>
                                        </div>
                                        <h3>
                                            Solarbeam.io
                                        </h3>
                                        <p>
                                            Solarbeam is a DEX on Moonriver!
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://www.facebook.com/MytheriaOfficial" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/Mytheria.png" alt="Mytheria"/>
                                        </div>
                                        <h3>
                                            Mytheria
                                        </h3>
                                        <p>
                                            A world where Gods from different cultures combat for honor and glory!
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://ironsail.io/" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/Ironsail.png" alt="IronSail"/>
                                        </div>
                                        <h3>
                                            IronSail
                                        </h3>
                                        <p>
                                            Iron Sail is a collective effort to contribute to the
                                            development of the blockchain gaming space.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://realrealm.io/" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/RealRealm.png" alt="Real Realm"/>
                                        </div>
                                        <h3>
                                            Real Realm
                                        </h3>
                                        <p>
                                            A blockchain-based strategy game.
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://widiland.com/" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/WidiLand.png" alt="WidiLand"/>
                                        </div>
                                        <h3>
                                            WidiLand
                                        </h3>
                                        <p>
                                            WidiLand is a multi-player game based on blockchain technology where players can earn and learn to protect the environment
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://www.heroestd.io/" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/HeroesTD.png" alt="Heroes TD"/>
                                        </div>
                                        <h3>
                                            Heroes TD
                                        </h3>
                                        <p>
                                            Heroes TD - The Ultimate Metaverse Collectible Strategy Tower Defense Game!
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <a href="https://12legions.io/" target="_blank">
                                <Card className="card-portfolio">
                                    <CardBody>
                                        <div className="card-img-wrapper">
                                            <img src="../../assets/img/portfolios/12Legions.png" alt="12 Legions"/>
                                        </div>
                                        <h3>
                                            12 Legions
                                        </h3>
                                        <p>
                                            The Chaos Of Twelve Legions
                                        </p>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="community" className="section-white">
                <Community/>
            </section>
        </div>
    )
}
