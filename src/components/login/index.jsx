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
  const [theming, updateTheming,changeTheme,logName,setLogName] = useContext(ThemingContext);
  let [Userdata, UpdateData] = useState([])


  const handleOnSubmit = e => {
    e.preventDefault()
    const user = {

        email: e.target.email.value,
        password: e.target.password.value,
    }
    // console.log(user)

    fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(d => d.json())
        .then((data) => {
            fetch('http://localhost:4000/users', {
                method: 'GET',
                // body: JSON.stringify(user),
                headers: { 'Authorization': `Bearer ${data.access_token}`} 
                
            })
            .then(r=>r.json())
            .then(info=>{
              setLogName(info)

                //  console.log(info)
            })
            // console.log(data.access_token)
        })
}

console.log(logName)
  return (
<Container>
  <Row>
    <Col>
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{t("login.email")}</Form.Label>
        <Form.Control name="email"type="email" placeholder={t("login.email")} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{t("login.password")}</Form.Label>
        <Form.Control name="password" type="password" placeholder={t("login.password")} />
      </Form.Group>
      <Button variant={theming.primary} type="submit">
      {t("login.boton")}
      </Button>
    </Form>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
  )

}

export default Login