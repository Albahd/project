import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom";
import './style.css'




function DetailCard(props) {

    return (
        <div className="card-select">
            <Link to={`/beerfilter/${props.tag}`} state={props.beers} style={{ decoration: 'none', color: 'black' }}>
                <Card style={{ width: '28rem'}}>
                    <Card.Img variant="top" src={props.img} className="rounded-5" />

                </Card>
            </Link>
            <h2 className="card-h2">{props.sent}</h2>


        </div>

    )



}

export default DetailCard