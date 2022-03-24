
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'
import CardEvent from "../cardevent";
import { useState,useEffect } from "react";

function ContainerEvent(props){


let[ev, updateEvent] = useState(props.event);
console.log(ev)
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

  console.log(today)
let filterevent = props.event.filter( v => v.date >= today)
console.log(filterevent)



return (


    <div className="list-event">
<Container >
  <Row>


  {filterevent.length === 0 ? <h1>cargando</h1> :filterevent.map((v, i) =>{
  
  return  (

<CardEvent key={i} name={v.name} event={v.event} date={v.date === undefined ? '' : v.date.split('-').reverse().join(' ').replaceAll(' ', '-')
}></CardEvent>)} 

)}

</Row>
</Container>
</div>

)

}
export default  ContainerEvent

