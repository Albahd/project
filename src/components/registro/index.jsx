import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import './style.css'

import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




function Register() {

  const [theming, updateTheming] = useContext(ThemingContext)
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");
  console.log(theming)
  const navigate = useNavigate()


  let [Userdata, UpdateData] = useState([])

  const handlerSubmit = e => {
    e.preventDefault();
    // console.log(e.target)
    const regis = {

      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      age: e.target.age.value,



    }
  
    // const userFormData = new FormData(e.target)
    // body: JSON.stringify(Object.fromEntries(userFormData))
    // console.log(user)  ESTA FORMA ES MEJOR QUE CREAR EL OBJETO.


    fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      body: JSON.stringify(regis),
      headers: { 'Content-Type': 'application/json' }

    }
    )
      .then(d => d.json())
      .then((data) => {

        UpdateData(...Userdata, regis)
        console.log(data)
        navigate('/user');

      }


      )

  }


  return (

    <Container
      className="container-register m-0 pt-3" fluid >
      <Row>
        <Col className="col-form" m={6} >
          <Card style={{ width: '40rem', height: '280%', border: 'none', backgroundColor: 'rgba(0,0,0,0.6)' }} className="mx-auto mt-2 card-container">
            <Form style={{ height: '4vh' }} onSubmit={handlerSubmit} className="m-5 p-5">
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label style={{ color: "white" }}>{t("login.name")}</Form.Label>
                <Form.Control type="text" name="name" placeholder={t("login.name")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: "white" }}>{t("login.email")}</Form.Label>
                <Form.Control name="email" type="email" placeholder={t("login.email")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicage">
                <Form.Label style={{ color: "white" }}>{t("login.age")}</Form.Label>
                <Form.Control name="age" type="number" placeholder={t("login.age")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>{t("login.password")}</Form.Label>
                <Form.Control name="password" type="password" placeholder={t("login.rpassword")} />
              </Form.Group>

             <Link to='/'> <Button variant={theming.primary} type="submit">
                {t("login.boton")}
              </Button></Link>

            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}

export default Register