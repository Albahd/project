
import FormEvent from "../../components/formevent"
import ContainerEvent from "../../components/containerevent";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import  Container  from "react-bootstrap/Container";
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { useContext, useState,useEffect } from 'react'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import "../../assets/img/bar.jpg"
import './style.css';

function Events(){
    const [lng, updateLng] = useContext(IdiomContext)
const [t, i18n] = useTranslation("global");


let[envF,updateEnv] = useState([]);

let[ev, updateEvent] = useState([]);


useEffect(() => {
  fetch('https://floating-waters-34980.herokuapp.com/Events')
    .then(j => j.json())
    .then(r => {
    
      updateEvent(r)
    }


    )

}, [envF]
)

const actualizar=(v) =>{
updateEnv(envF => [...envF,v] )
}

    return(
<Container fluid className="total-event" >
<Row>
<Col xs={10} sm={12} md={7} lg={7} xl={6} style={{ color: "black"}}>
<p className="events-title mt-1">{t("Event.e7")}</p>
<ContainerEvent event={ev}></ContainerEvent>
 </Col>
 <Col className="col-form" xs={12} sm={12} md={5} lg={5} xl={6}style={{ color: "black"}}>
 <p className="events-title mt-1" >{t("Event.e8")}</p>
 <FormEvent actualizar={actualizar}></FormEvent>
 </Col>




 </Row>
 </Container>
    )

}

export default Events


// className="d-flex flex-wrap flex-column justify-content-center"