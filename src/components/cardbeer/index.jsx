import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import  Button from "react-bootstrap/Button";
import corazon from '../../assets/img/corazon.png'
import './style.css'
import { useState } from "react";

function CardBeer(props){

  let [Userfav, Updatefav] = useState([]);

  const handlerSubmit = e => {
    // e.preventDefault();
   
    const fav = props

    fetch('http://localhost:4000/fav', {
      method: 'POST',
      body: JSON.stringify(fav),
      headers: { 'Content-Type': 'application/json' }

    }
    )
      .then(d => d.json())
      .then((data) => {
        console.log(data)
        Updatefav([...Userfav,fav])
        console.log(fav)
     

      }


      )

  }


    return(
    
        <Card style={{ width: '18rem' ,border:'none'}} className=" col-md-1 mx-auto card-container">
          <Card.Img className="card-img" variant="top" src={props.img} />
          <Button  onClick={handlerSubmit} style={{ background: 'none', border: 'none' }} className="card-fav"><img src={corazon} alt=""/></Button>
          <Card.Body>
            <Card.Title style={{color:"black",font:"bold"}}>{props.title}</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item style={{color:"grey"}}> Tipo:{ props.tipo} </ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>ABV:{props.al}</ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>Origen:{props.or}</ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>{props.description}</ListGroup.Item>
            </ListGroup>
    
          </Card.Body>
        </Card>
      
      )
    }

export default CardBeer