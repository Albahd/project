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

  return (

    <Form>
         <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>{t("login.name")}</Form.Label>
        <Form.Control type="text" placeholder={t("login.name")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicage">
        <Form.Label>{t("login.age")}</Form.Label>
        <Form.Control type="number" placeholder={t("login.age")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("login.email")}</Form.Label>
        <Form.Control type="email" placeholder={t("login.email")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("login.password")}</Form.Label>
        <Form.Control type="password" placeholder={t("login.password")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant={theming.primary} type="submit">
      {t("login.boton")}
      </Button>
    </Form>
  )

}

export default Register