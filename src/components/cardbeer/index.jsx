import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"


function CardBeer(props){

    return(

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Tipo:{props.tipo}</ListGroup.Item>
              <ListGroup.Item>ABV:{props.al}</ListGroup.Item>
              <ListGroup.Item>Origen:{props.or}</ListGroup.Item>
              <ListGroup.Item>{props.description}</ListGroup.Item>
            </ListGroup>
    
          </Card.Body>
        </Card>
      )
    }

export default CardBeer