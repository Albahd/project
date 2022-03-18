import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { IdiomContext } from "../../context/createcontext";
import mundo from '../../assets/img/idioma.png';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import './style.css'
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



function Navegador() {

  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");

  const [theming, updateTheming, changeTheme] = useContext(ThemingContext);


  const handleChange = e => {
    if (e.target.value === "en") {
      i18n.changeLanguage("en")
      updateLng("en")
    } else if (e.target.value === "es") {
      i18n.changeLanguage("es")
      updateLng("es")
    }
    console.log("login.password")
  }




  return (


    <div className="nav">
  
      <Col>
        <Navbar collapseOnSelect expand="lg" bg={theming.primary} variant="dark">
          <Container>
            <Navbar.Brand href="/">home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/select">{t("header.link1")}</Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/listbeer">
                  Beers
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/store">Shop&Drink</Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/Events">
                  {t("header.link2")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* <button onClick={changeTheme}>{t("header.link3")}</button> */}
            

          </Container>
        </Navbar>
      </Col>
      <Col lg={1}>
        <div>
          <img src={mundo} alt="" />
          <select onChange={handleChange} name='idioms' style={{ background: 'none', border: 'none' }} >
            <option value='es'>Es</option>
            <option value='en'>En</option>
          </select>

        </div>

      </Col>
     
      <Form>
              <Form.Check onClick={changeTheme}
                type="switch"
                id="custom-switch"
                label={t("header.link3")}
              />

            </Form>
    
     

    </div>

  )
}

export default Navegador





      //     <Container fluid>
      //   <Row style={{ alignItems: 'center', display: 'flex' }} lg={12}>
      //     <Col lg={12}>
      //       <Navbar bg={theming.primary} variant={theming.primary}>
      //         <Container>
      //           <Nav className="me-auto">

      //             <Nav.Link href="#home">{t("header.link1")}</Nav.Link>


      //             <Nav.Link href="#features">Beers</Nav.Link>


      //             <Nav.Link href="#pricing">Shop&Drink</Nav.Link>


      //             <Nav.Link href="#pricing">{t("header.link2")}</Nav.Link>

      //           </Nav>


      //           <Row style={{ alignItems: 'center', display: 'flex' }} lg={1}>
      //             <button onClick={changeTheme}>{t("header.link3")}</button>
      //           </Row>


      //         </Container>
      //       </Navbar>
      //     </Col>
      //   </Row>
      // </Container>


      // <Container fluid>
      //   <Row style={{ alignItems: 'center', display: 'flex' }} lg={12}>
      //     <Nav bg={theming.primary} variant="tabs" defaultActiveKey="/home">
      //       <Nav.Item>
      //         <Nav.Link href="/home">{t("header.link1")}</Nav.Link>
      //       </Nav.Item>
      //       <Nav.Link href="/home">Beers</Nav.Link>
      //       <Nav.Item>
      //         <Nav.Link href="/home">Shop&Drink</Nav.Link>
      //       </Nav.Item>
      //       <Nav.Item>
      //         <Nav.Link href="/home">{t("header.link2")}</Nav.Link>
      //       </Nav.Item>
      //       <Nav.Item>
      //         <Row style={{ alignItems: 'center', display: 'flex' }} lg={1}>

      //           <button clasname="but-theme" onClick={changeTheme}>{t("header.link3")}</button>
      //         </Row>
      //       </Nav.Item>
      //     </Nav>
      //   </Row>
      // </Container>