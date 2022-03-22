
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'
import CardEvent from "../cardevent";
import { useState,useEffect } from "react";

function ContainerEvent(props){


let[ev, updateEvent] = useState([]);


useEffect(() => {
  fetch('http://localhost:4000/Events')
    .then(j => j.json())
    .then(r => {
      console.log(r)
      updateEvent(r)
    }


    )

}, []
)





return (


    <div className="list-event">
<Container >
  <Row>

  {ev.length === 0 ? <h1>cargando</h1> :ev.map((v, i) =>{
  
  return  (

<CardEvent key={i}t name={v.name} event={v.event} date={v.date === undefined ? '' : v.date.split('-').reverse().join(' ').replaceAll(' ', '-')
}></CardEvent>)} 

)}

</Row>
</Container>
</div>

)

}
export default  ContainerEvent

