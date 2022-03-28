import { useLocation } from "react-router-dom"
import {useParams} from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import  Row  from "react-bootstrap/Row";
import  Container  from "react-bootstrap/Container";
import CardBeer from "../../components/cardbeer";
import './style.css';
import Navegador from "../../components/navegador";


function BeerFilter(){
    const [queryParams] = useSearchParams();
    const pathParams = useParams();
    const location = useLocation()
    const arrbeer = location.state
    console.log(arrbeer)
    console.log(pathParams)
    const tag = pathParams.tag
    console.log(tag)

     const cerveselect= arrbeer.filter(v =>v.categories.includes(tag)
        
        )
        console.log(cerveselect)

    return(

<div className="filter-card">
<Container fluid >

  <Row>

     {cerveselect.length === 0 ? <h1>cargando</h1> : cerveselect.map((v, i) =>{
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

export default BeerFilter