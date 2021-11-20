import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/app/footer";
import Header from "../components/app/header";
import Ann from "../components/app/header/ann";

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="title" content="AlphaTrue"/>
      <meta name="description" content="The true solution for the alpha projects in decentralize world"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://alphatrue.io/"/>
      <meta property="og:title" content="AlphaTrue"/>
      <meta property="og:description" content="The true solution for the alpha projects in decentralize world"/>
      <meta property="og:image" content="../../meta.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://alphatrue.io/"/>
      <meta property="twitter:title" content="AlphaTrue"/>
      <meta property="twitter:description" content="The true solution for the alpha projects in decentralize world"/>
      <meta property="twitter:image" content="../../meta.png"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HYL4NBFN5Y"></script>
      <script
          dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-HYL4NBFN5Y');
      `,
          }}
      />
    </Head>
    <div className="app">
      <Header/>
      <Ann/>
      <div className="app-body">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>


  </>
}

export default MyApp
