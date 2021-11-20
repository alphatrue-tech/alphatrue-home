import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {faFacebook, faTelegram, faTelegramPlane, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import Community from "../../../../components/community";

export default function Careers() {
    return (
        <div className="careers">
            <Head>
                <title>Content Writer - AlphaTrue</title>
                <meta name="description" content="Content Writer - AlphaTrue"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className="page-hero">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-center text-md-start hero-title">
                            <h1>
                                Content Writer
                            </h1>
                            {/*<p>*/}
                            {/*    The company is led by a young, creative team of engineers and managers who are all subject matter experts.*/}
                            {/*</p>*/}
                        </Col>
                        <Col lg={6} md={6} sm={12} className="text-center text-sm-end text-md-end hero-img">
                            <img src="../../assets/img/logo-symbol.svg" alt="logo"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-white">
                {/*<Container>*/}
                {/*    <div className="section-title justify-content-start ms-0">*/}
                {/*        <h1 className="text-start">*/}
                {/*            Current Openings*/}
                {/*        </h1>*/}
                {/*        /!*<p className="text-subtitle text-start">*!/*/}
                {/*        /!*    Sorry, there is no job available at the moment.*!/*/}
                {/*        /!*</p>*!/*/}
                {/*    </div>*/}
                {/*</Container>*/}
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="content-wrapper">
                                <h3 className="mb-4">
                                    Job description
                                </h3>
                                <p>
                                    AlphaTrue is the first deal sourcing and blockchain business advisory company in
                                    Vietnam. We are looking for a young talented Content Writer who makes an effort to be
                                    builders, contributors to innovations and products in the AlphaTrue’s development.
                                </p>
                                <h5>
                                    Responsibilities
                                </h5>
                                <ul>
                                    <li>
                                        Research on building content strategy and brand image through social media;
                                    </li>
                                    <li>
                                        Plan and create content that will engage a diverse group of cryptocurrency enthusiasts,
                                        inspire them, and seed the interest of the project;
                                    </li>
                                    <li>
                                        Edit, draft and write articles on social media channels;
                                    </li>
                                    <li>
                                        Effectively manage social media channels to maintain a positive and responsive media
                                        presence;
                                    </li>
                                    <li>
                                        Collaborate with our entire marketing & community team on special campaigns, product
                                        rollouts and announcements.
                                    </li>
                                </ul>
                                <h5>
                                    Requirements
                                </h5>
                                <ul>
                                    <li>
                                        Relevant marketing experience with a track record of growing project awareness;
                                    </li>
                                    <li>
                                        Strong content production skills, e.g. designing graphics/working with designer,
                                        searching for trends, using social media schedulers, etc;
                                    </li>
                                    <li>
                                        Excellence in English writting skills; ability to adapt strategic messaging across
                                        channels to drive action;
                                    </li>
                                    <li>
                                        Ability to thrive in a fast-paced, remote working environment.
                                    </li>
                                    <li>
                                        Experience with Discord, Twitter, Telegram, and other social media channels is a plus;
                                    </li>
                                    <li>
                                        Basic knowledge or experience in cryptocurrency and blockchain is a plus.
                                    </li>
                                </ul>
                                <h5>
                                    Offer
                                </h5>
                                <ul>
                                    <li>
                                        Salary: negotiate and will be increased depending on capacity;
                                    </li>
                                    <li>
                                        Internal opportunities to invest in crypto to increase income;
                                    </li>
                                    <li>
                                        Flexible working hours, casual work attire;
                                    </li>
                                    <li>
                                        Fast-moving, challenging, and unique business problems. We deeply care about helping
                                        everyone at work on what they love, freely express their ideas within the organization,
                                        and grow to their true potential;
                                    </li>
                                    <li>
                                        Great career development opportunities in a growing company. Most of the time, you’ll be
                                        working on cutting-edge technologies. You’ll constantly be learning and improving your
                                        knowledge not only as a marketer but also as an engineer, researcher, or scientist.
                                    </li>
                                </ul>
                                <h5>
                                    Contact
                                </h5>
                                <p>
                                    Please send your CV to email: <a href="mailto:support@alphatrue.com">support@alphatrue.com</a>
                                </p>
                                <h5>
                                    About us
                                </h5>
                                <p>
                                    AlphaTrue is the first deal sourcing and blockchain business advisory company in
                                    Vietnam, founded with the belief that blockchain technology has the ability to disrupt
                                    established sectors and provide new business opportunities for all users. AlphaTrue
                                    offers a multi-sectoral strategy and a one-stop solution for your business in the
                                    blockchain industry. We work at the crossroads of sincere, empirical, and technological
                                    research. AlphaTrue’s primary focuses are customer experience, advanced products, and
                                    clarity and efficiency in the management process.
                                </p>
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
