import Form from "react-bootstrap/Form";
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import Register from "../registro";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './style.css'





function Login() {
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");
  const [theming, updateTheming, changeTheme, logName, setLogName] = useContext(ThemingContext);
  let [Userdata, UpdateData] = useState([])
  const navigate = useNavigate()


  const handleOnSubmit = e => {
    e.preventDefault()
    const user = {

      email: e.target.email.value,
      password: e.target.password.value,
    }
    localStorage.setItem('email', e.target.email.value)
    // console.log(user)
    localStorage.setItem('username',logName.name)

    fetch('https://floating-waters-34980.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(d => d.json())
      .then((data) => {
        fetch('https://floating-waters-34980.herokuapp.com/users', {
          method: 'GET',
          // body: JSON.stringify(user),
          headers: { 'Authorization': `Bearer ${data.access_token}` }

        })
          .then(r => r.json())
          .then(info => {

            setLogName(info)
            localStorage.setItem('token', data.access_token)
            navigate(-1);


          })
        // localStorage.setItem('info',)
      })




  }
  const handleCloseSession = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('ID')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    navigate('/')

  }
  console.log(logName)
  return (
    <Container className="container-login m-0 pt-5" fluid >
      <Row>
        <Col >
          <Card style={{ width: '50%', height: '100%', border: 'none', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }} className="mx-auto mt-2 pt-3 card-container">
            <Form onSubmit={handleOnSubmit} className="form-login">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>{t("login.email")}</Form.Label>
                <Form.Control name="email" type="email" placeholder={t("login.email")} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>{t("login.password")}</Form.Label>
                <Form.Control name="password" type="password" placeholder={t("login.password")} />
              </Form.Group>
              <div className="but">
              <div className="but-log">
              <Button variant={theming.primary} type="submit">
                {t("login.boton")}
              </Button>
              </div>

              <div className="but-cr">
                <Button  className="but-close" onClick={handleCloseSession} variant={theming.primary} type="submit">
                  out sesión
                </Button>
                <Link to='/register'><Button variant={theming.primary} type="submit">
                  {t("login.boton2")}
                </Button></Link>
                </div>
              </div>
            </Form>
          </Card>
        </Col>

      </Row>

    </Container>
  )

}

export default Login