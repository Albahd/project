import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { IdiomContext } from "../../context/createcontext";
import mundo from '../../assets/img/idioma.png';
import paleta from '../../assets/img/paleta.png'
import jarra from '../../assets/img/jarra.png'
import corazon from '../../assets/img/corazon.png'
import user from '../../assets/img/user.png'
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import './style.css'
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";



function Navegador() {

  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");

  const [theming, updateTheming, changeTheme,logName,setLogName] = useContext(ThemingContext);


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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {t("header.link3")}
    </Tooltip>
  );


  return (


    <div className="nav">

      <Col>
        <Navbar  style={{ width: "100%" }} collapseOnSelect expand="lg" bg={theming.primary} variant={theming.dark}>
          <Container>
            <Navbar.Brand href="/">ViBeer{<img src={jarra} alt="" />}</Navbar.Brand>
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
           

              <div className="selectors">
                <img src={mundo} alt="" />
                <select onChange={handleChange} name='idioms' style={{ background: 'none', border: 'none' }} >
                  <option value='es'>Es</option>
                  <option value='en'>En</option>
                </select>
         

              <OverlayTrigger
                placement="bottom"
                delay={{ show: 150, hide: 300 }}
                overlay={renderTooltip}
              > 
                <Button variant={theming.primary} onClick={changeTheme}>{<img src={paleta} alt="" />}</Button>
              </OverlayTrigger>
           
              <Button  variant={theming.primary}>{<img src={corazon} alt="" />}</Button>
              <Button  variant={theming.primary}>{<img src={user} alt="" />}</Button>
              {logName.name!==undefined?<p>{`${logName.name}`}</p>: ''}
           

              </div>

          </Container>
        </Navbar>
        </Col>
    </div>

   
  )
}

export default Navegador




