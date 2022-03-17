import Form from "react-bootstrap/Form";
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import Register from "../registro";
import  Button from "react-bootstrap/Button";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



function Login() {
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");
  const [theming, updateTheming,changeTheme] = useContext(ThemingContext);

  return (
<Container>
  <Row>
    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{t("login.email")}</Form.Label>
        <Form.Control type="email" placeholder={t("login.email")} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{t("login.password")}</Form.Label>
        <Form.Control type="password" placeholder={t("login.password")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant={theming.primary} type="submit">
      {t("login.boton")}
      </Button>
    </Form>
    </Col>
    <Col>
    <Register></Register>
    </Col>
    </Row>
    </Container>
  )

}

export default Login