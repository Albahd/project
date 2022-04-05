import Button  from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import borrar from "../../assets/img/borrar.png"
import { useNavigate } from "react-router-dom";
import './style.css'



function Fav(props){
  const navigate = useNavigate()
  console.log(props.acdelete)
  const handlerUpdate = (v) => {
    props.acdelete(v)

  }
  const handleDeleteFav = () => {

    
            fetch(`https://floating-waters-34980.herokuapp.com/fav/${props.title}`, {
                method: 'DELETE',
                
            })
                .then(j => j.json())
                .then(data => {
                    console.log(data)
                    handlerUpdate(data)
                    // window.location.reload()
    
                })
    
        }



    return(

<Card style={{ width: '12rem' ,border:'none',backgroundColor: 'transparent'}} className=" col-md-1 mx-auto">
          <Card.Img className="card-img" variant="top" src={props.img} />
          <Card.Body>
            <Card.Title style={{color:"black",font:"bold"}}>  
            <button id="buton-delete" style={{border:'none',backgroundColor: 'transparent'}} onClick={handleDeleteFav}><img src={borrar}></img></button>
          
            
            {props.title} </Card.Title>
            
          </Card.Body>
        </Card>
      
  
    )

}

export default Fav