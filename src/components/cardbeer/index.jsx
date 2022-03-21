import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"


function CardBeer(props){

    return(
      

        <Card style={{ width: '18rem' ,border:'none'}} className=" col-md-1 mx-auto">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title style={{color:"black",font:"bold"}}>{props.title}</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item style={{color:"grey"}}> Tipo:{ props.tipo}</ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>ABV:{props.al}</ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>Origen:{props.or}</ListGroup.Item>
              <ListGroup.Item style={{color:"grey"}}>{props.description}</ListGroup.Item>
            </ListGroup>
    
          </Card.Body>
        </Card>
      
      )
    }

export default CardBeer