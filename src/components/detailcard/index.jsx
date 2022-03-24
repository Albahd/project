import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom";
import './style.css'




function DetailCard(props) {

    return (
        <div className="card-select">
            <Link to={`/beerfilter/${props.tag}`} state={props.beers} style={{ decoration: 'none', color: 'black' }}>
                <Card className="select-img border-0" style={{ width: '28rem',backgroundColor:'transparent'}}>
                    <Card.Img variant="center" src={props.img} className="select-img" />

                </Card>
            </Link>
            <h2 className="card-h2">{props.sent}</h2>


        </div>

    )



}

export default DetailCard