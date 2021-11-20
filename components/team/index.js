import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image'
import {faFacebook, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";

export default function Team() {
    return (
        <Container>
            <div className="section-title">
                <h1>
                    Who we are
                </h1>
                <p className="text-subtitle">
                    The company is led by a young, creative team of engineers and managers who are all subject matter experts.
                </p>
            </div>
            <Row className="justify-content-center">
                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className="card-team">
                        <CardImg src="../../assets/img/teams/Dinh-Tran.jpeg" alt="Dinh Tran"/>
                        <CardHeader>
                            <h3>
                                Dinh Tran
                            </h3>
                            <h5>
                                CEO
                            </h5>
                        </CardHeader>
                        <CardBody>
                            Dinh has 5 years consulting, project management experience in the Blockchain area and Decentralize Finance.<br/>
                            4 years of experience investing in CryptoCurrencies.
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className="card-team">
                        <CardImg src="../../assets/img/teams/Lugon.jpeg" alt="Lugon"/>
                        <CardHeader>
                            <h3>
                                Lugon
                            </h3>
                            <h5>
                                CTO
                            </h5>
                        </CardHeader>
                        <CardBody>
                            Software architect & Blockchain expert. Worked at several Ethereum based open source projects. CryptoCurrencies Investor.
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className="card-team">
                        <CardImg src="../../assets/img/teams/Kang.jpeg" alt="Kang"/>
                        <CardHeader>
                            <h3>
                                Khuong Phan (Kang)
                            </h3>
                            <h5>
                                CMO
                            </h5>
                        </CardHeader>
                        <CardBody>
                            Marketing Specialist in the field of Crypto Currency and Blockchain.<br/>
                            Experience in Market Research and Analysis for 5 years.
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
