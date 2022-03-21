
import { useState } from "react"
import { useEffect } from "react"
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import CardBeer from "../cardbeer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'


function ListBeer(props) {
  let [b, updatebeer] = useState(props.beers);

  // useEffect(() => {
  //   fetch('http://localhost:4000/beer')
  //     .then(j => j.json())
  //     .then(r => {
  //       console.log(r)
  //       updatebeer(r)
  //     }


  //     )

  // }, []
  // )




  return (

<div className="list-beer">
<Container >
  <Row>

     {b.length === 0 ? <h1>cargando</h1> : b.map((v, i) =>{
console.log(v)
  return  (
  
  <CardBeer key={i} al={v.ABV} description={v.Descripción} 
  for={v.Formato} or={v.Origen} cat={v.Categories} 
  img={v.img} tipo={v.tipo} title={v.title} ></CardBeer>)} 

     )}
 
     </Row>
</Container>
</div>

  )

  }
export default ListBeer