import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";



function Fav(props){

    return(

<Card style={{ width: '12rem' ,border:'none',backgroundColor: 'transparent'}} className=" col-md-1 mx-auto">
          <Card.Img className="card-img" variant="top" src={props.img} />
          <Card.Body>
            <Card.Title style={{color:"black",font:"bold"}}>{props.title}</Card.Title>
          
          </Card.Body>
        </Card>
      
  
    )

}

export default Fav