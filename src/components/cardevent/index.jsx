
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import jarras from '../../assets/img/jarras.png'
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import './style.css';
import Container  from "react-bootstrap/Container";




function CardEvent(props) {
  const [theming, updateTheming] =useContext(ThemingContext)
const [lng, updateLng] = useContext(IdiomContext)
const [t, i18n] = useTranslation("global");

  let [User, updateUser] = useState(0)


  const handleEvent = () => {
    updateUser(User + 1)


  }
 

  return (


    <Card  style={{ width: '18rem', border: 'none',  backgroundColor:'rgba(0,0,0,0.6)' }} className="mx-auto mt-2 card-container">
      <Card.Body>
        <Card.Title style={{ color: "white", font: "bold" }}>{t("Event.e3")}: {props.name}</Card.Title>
        <ListGroup className="card-list-event" variant="flush">
        <ListGroup.Item style={{ color: "white",backgroundColor:'transparent'}}>{t("Event.e9")}: {props.date}</ListGroup.Item>
          <ListGroup.Item style={{ color: "white",backgroundColor:'transparent'}}>{t("Event.e4")}: {props.event}</ListGroup.Item>
          <ListGroup.Item style={{ color: "white",backgroundColor:'transparent'}}>{t("Event.e5")}: {User}</ListGroup.Item>
          <ListGroup.Item style={{ color: "white",backgroundColor:'transparent' }}>{t("Event.e6")} {<Button style={{backgroundColor:'transparent', border: 'none',}} onClick={handleEvent}>{<img src={jarras} alt="" />}</Button>}</ListGroup.Item>
        </ListGroup>

      </Card.Body>
    </Card>

  )



}

export default CardEvent


