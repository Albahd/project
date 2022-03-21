import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap"
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";



function Register() {

  const [theming, updateTheming] =useContext(ThemingContext)
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");
  console.log(theming)


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

          }


          )

  }


  return (

    <Form onSubmit={handlerSubmit}>
         <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>{t("login.username")}</Form.Label>
        <Form.Control type="text" name="name" placeholder={t("login.username")} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>{t("login.username")}</Form.Label>
        <Form.Control name="ursername" type="text" placeholder={t("login.username")} />
      </Form.Group> */}
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("login.email")}</Form.Label>
        <Form.Control name="email" type="email" placeholder={t("login.email")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicage">
        <Form.Label>{t("login.age")}</Form.Label>
        <Form.Control name="age" type="number" placeholder={t("login.age")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("login.password")}</Form.Label>
        <Form.Control name="password" type="password" placeholder={t("login.rpassword")} />
      </Form.Group>
      <Button variant={theming.primary} type="submit">
      {t("login.boton")}
      </Button>
    </Form>
  )

}

export default Register