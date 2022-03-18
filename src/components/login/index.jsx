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
  let [Userdata, UpdateData] = useState([])

  const handlerSubmit = e => {
      e.preventDefault();
      // console.log(e.target)
      const login = {
        
          email: e.target.email.value,
          password: e.target.password.value,
          age: e.target.age.value,
      }

      // const userFormData = new FormData(e.target)
      // body: JSON.stringify(Object.fromEntries(userFormData))
      // console.log(user)  ESTA FORMA ES MEJOR QUE CREAR EL OBJETO.


      fetch('http://localhost:4000/auth/login', {
          method: 'POST',
          body: JSON.stringify(login),
          headers: { 'Content-Type': 'application/json' }

      }
      )
          .then(d => d.json())
          .then((data) => {

              UpdateData(...Userdata, login)
              console.log(data)

          }


          )

  }



  return (
<Container>
  <Row>
    <Col>
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{t("login.email")}</Form.Label>
        <Form.Control name="email"type="email" placeholder={t("login.email")} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{t("login.password")}</Form.Label>
        <Form.Control name="password" type="password" placeholder={t("login.password")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicage">
        <Form.Label>{t("login.age")}</Form.Label>
        <Form.Control name="age" type="number" placeholder={t("login.age")} />
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