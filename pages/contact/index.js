import {Button, Col, Container, Row} from 'reactstrap';

import Head from 'next/head'

export default function Contact() {
  return (
    <div className="single-page contact">
      <Head>
        <title>Contact Us - AlphaTrue</title>
        <meta name="description" content="Home - AlphaTrue" />
        <meta name="description" content="The true solution for the alpha projects in decentralize world"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="single-page__header">
          <Container>
            <Row>
              <Col xs={12}>
                <h1>
                  CONNECT WITH US
                </h1>
                <div className="l-line-title">
                  CONTACT
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="single-page__content">
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={12} className="mb-4">
                <p>
                  Join forces with us to maximize your potential in decentralize world.                </p>
                <p>
                  We’re always excited to hear from you.
                </p>
                <div className="w-100">
                  <a href="#" className="btn btn-primary">
                    VIEW THE PORTFOLIO
                  </a>
                </div>
              </Col>
              <Col lg={7} md={12}>
                <img src="../../assets/img/contact/contact-header.png" alt="contact us"/>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
  )
}
