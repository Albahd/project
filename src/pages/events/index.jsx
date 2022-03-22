
import FormEvent from "../../components/formevent"
import ContainerEvent from "../../components/containerevent";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import  Container  from "react-bootstrap/Container";
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import "../../assets/img/bar.jpg"
import './style.css';

function Events(){
    const [lng, updateLng] = useContext(IdiomContext)
const [t, i18n] = useTranslation("global");

    return(
<Container fluid className="total-event" >
<Row>
<Col style={{ color: "black"}}>
<p className="events-title">{t("Event.e7")}</p>
<ContainerEvent></ContainerEvent>
 </Col>
 <Col  style={{ color: "black"}}>
 <p className="events-title">{t("Event.e8")}</p>
 <FormEvent></FormEvent>
 </Col>




 </Row>
 </Container>
    )

}

export default Events