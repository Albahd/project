import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import corazon from '../../assets/img/corazon.png'
import corazon2 from '../../assets/img/corazon2.png'
import './style.css'
import { useState,useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";


function CardBeer(props){
  const [theming, updateTheming, changeTheme, logName, setLogName] = useContext(ThemingContext);
  let correo = localStorage.getItem('email')
  let token= localStorage.getItem('token')
  


  let [Userfav, Updatefav] = useState([]);
  let [heart, updateHeart]= useState(false)
  

  const handlerSubmit = e => {
    // e.preventDefault();
    console.log(token)
   
    const fav = props
    updateHeart(true)



    fetch('https://floating-waters-34980.herokuapp.com/fav', {
      method: 'POST',
      body: JSON.stringify(fav),
      headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` }

    }
    )
      .then(d => d.json())
      .then((data) => {
        // console.log(data)
        Updatefav([...Userfav,fav])
        // Updatefav([Object.assign(fav,correo)])
        // console.log(correo);
      
     

      }


      )

  }


    return(
    
        <Card style={{ width: '18rem' ,border:'none'}} className=" col-md-1 mx-auto card-container">
          <Card.Img className="card-img" variant="top" src={props.img} />
          <button   onClick={handlerSubmit} style={{ background: 'none', border: 'none' }} className="card-fav">{heart?<img src={corazon2} alt=""/>:<img src={corazon} alt=""/>}</button>
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