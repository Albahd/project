
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import CardBeer from "../cardbeer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'
import { IdiomContext } from "../../context/createcontext";
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';


function ListBeer(props) {
  let [b, updatebeer] = useState(props.beers);
  let [bfilter,updatefilter]=useState(props.beers);
  const [theming, updateTheming, changeTheme] = useContext(ThemingContext);
  const [lng, updateLng] = useContext(IdiomContext)
  const [t, i18n] = useTranslation("global");


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
  const Onfilter = (e) => {
    let arrnew = b.filter(v => v.tipo.toLowerCase().includes(e.target.value.toLowerCase()))
    updatefilter(arrnew)

}

console.log(bfilter)



  return (

<div className="list-beer">
<input onChange={Onfilter} className="mt-2" type="text" placeholder={t("search.s1")} ></input>
<Container fluid className="mt-4, p-5" >
  <Row>

     {bfilter.length === 0 ? <h1>cargando</h1> : bfilter.map((v, i) =>{
// console.log(v)
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