import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap"
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function FormEvent({ actualizar }) {

  const [theming, updateTheming] = useContext(ThemingContext)
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;

  const handlerUpdate = (v) => {
    actualizar(v)

  }


  let [Userdata, UpdateData] = useState([])

  const handlerSubmit = e => {
    e.preventDefault();

    const event = {

      name: e.target.name.value,
      event: e.target.event.value,
      date: e.target.date.value,



    }
console.log(event)
    fetch('http://localhost:4000/Events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: { 'Content-Type': 'application/json' }

    }
    )
      .then(d => d.json())
      .then((data) => {

        UpdateData([...Userdata,event])
       
    
        handlerUpdate(data)
        e.target.reset();
    
      }


      )

  }


  return (
    <Container>
      <Row>
        <Col xs={12} s={8} m={6} lg={6}>
          <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3, color:black" controlId="formBasicname">
              <Form.Label>{t("Event.e1")}</Form.Label>
              <Form.Control type="text" name="name" placeholder={t("Event.e1")} />
            </Form.Group>
            <Form.Group className="mb-3, color:black" controlId="formBasicdate">
              <Form.Label>{t("Event.e9")}</Form.Label>
              <Form.Control type="date" name="date" placeholder={t("Event.e9")} min={today} style={{ color: 'grey' }} />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label={t("Event.e2")} style={{ color: 'grey' }}>
              <Form.Control className="mt-2" name="event"
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