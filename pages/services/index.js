import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Media, Row} from 'reactstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import {faFan} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div className="single-page about-us">
      <Head>
        <title>About Us - AlphaTrue</title>
        <meta name="description" content="The true solution for the alpha projects in decentralize world"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="single-page__header">
          <Container>
            <Row>
              <Col xs={12}>
                <h1>
                  OUR SERVICES
                </h1>
                <div className="l-line-title">
                  SERVICES
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="single-page__content">
          <Container>
            <Row className="">
              <Col lg={5} md={12}>
                <p>
                  AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.
                </p>
                <p>
                  The company is led by a young, creative team of engineers and managers who are all subject matter experts.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4} sm={6} xs={12}>
                <Card className="card-servives">
                  <CardImg src="../../assets/img/about-us/about-us-header.png" alt="portfolio"/>
                  <CardHeader>
                    SERVICES CATEGORY
                  </CardHeader>
                  <CardBody>
                    <ul>
                      <li>
                        Services 1
                      </li>
                      <li>
                        Services 2
                      </li>
                      <li>
                        Services 3
                      </li>

                    </ul>
                  </CardBody>
                  <CardFooter>
                    <a href="#">
                      Contact us
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
  )
}
