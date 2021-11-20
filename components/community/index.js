import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {
    faFacebook,
    faLinkedin,
    faLinkedinIn,
    faTelegram,
    faTelegramPlane,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";

export default function Community() {
    return (
        <Container>
            <div className="section-title">
                <h1>
                    Join AlphaTrue’s community
                </h1>
                <p className="text-subtitle">
                    AlphaTrue was founded on the conviction that blockchain technology has the potential to disrupt existing industries and open up new business opportunities.
                </p>
            </div>
            <Row>
                <Col xs={12} className="text-center justify-content-center">
                    <div className="community-list">
                        <a href="https://t.me/AlphaTrueAnalytics" target="_blank">
                            <Card className="card-community">
                                <CardHeader>
                                    <FontAwesomeIcon icon={faTelegramPlane}/>
                                    <h4>
                                         AlphaTrue Analytics
                                    </h4>
                                </CardHeader>
                                <CardFooter>
                                    <p>
                                        AlphaTrue Market Research, Data Analystic.
                                    </p>
                                    {/*<FontAwesomeIcon icon={faArrowAltCircleRight}/>*/}
                                </CardFooter>
                            </Card>
                        </a>
                        <a href="https://twitter.com/AlphaTrueAPT" target="_blank">
                            <Card className="card-community">
                                <CardHeader>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                    <h4>
                                        Twitter
                                    </h4>
                                </CardHeader>
                                <CardFooter>
                                    <p>
                                        Read the latest
                                    </p>
                                    {/*<FontAwesomeIcon icon={faArrowAltCircleRight}/>*/}
                                </CardFooter>
                            </Card>
                        </a>
                        <a href="https://www.linkedin.com/company/alphatrue" target="_blank">
                            <Card className="card-community">
                                <CardHeader>
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                    <h4>
                                        LinkedIn
                                    </h4>
                                </CardHeader>
                                <CardFooter>
                                    <p>
                                        Join with us
                                    </p>
                                    {/*<FontAwesomeIcon icon={faArrowAltCircleRight}/>*/}
                                </CardFooter>
                            </Card>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
