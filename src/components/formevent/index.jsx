import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap"
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import  FloatingLabel  from "react-bootstrap/FloatingLabel";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function FormEvent() {

    const [theming, updateTheming] =useContext(ThemingContext)
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");
    console.log(theming)
  
  
    let [Userdata, UpdateData] = useState([])
  
    const handlerSubmit = e => {
        e.preventDefault();
        // console.log(e.target)
        const event = {
          
           name: e.target.email.value,
           event: e.target.event.value,
  
  
        }

        fetch('http://localhost:4000/Events', {
          method: 'POST',
          body: JSON.stringify(event),
          headers: { 'Content-Type': 'application/json' }

      }
      )
          .then(d => d.json())
          .then((data) => {

              UpdateData(...Userdata, event)
              console.log(data)

          }


          )

  }


  return (
<Container>
  <Row>
    <Col xs={12} s={8} m={6} lg={4}>
    <Form onSubmit={handlerSubmit}>
         <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>{t("Event.e1")}</Form.Label>
        <Form.Control type="text" name="name" placeholder={t("Event.e1")} />
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label={t("Event.e2")}>
    <Form.Control name="event"
      as="textarea"
      placeholder={t("Event.e2")}
      style={{ height: '100px' }}
    />
  </FloatingLabel>
      <Button variant={theming.primary} type="submit" className="p-1 m-2">
      {t("login.boton")}
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  )

}

export default FormEvent