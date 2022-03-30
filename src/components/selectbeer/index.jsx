import negra from "../../assets/img/negra.jpg"
import clasico from "../../assets/img/clasico.png"
import dulce from "../../assets/img/dulce.png"
import vaso from"../../assets/img/vaso.png"

import hipster from "../../assets/img/hipster.jpg"
import belga from "../../assets/img/belga.png"
import DetailCard from "../detailcard"
import Container  from "react-bootstrap/Container"
import  Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import './style.css'
import { useTranslation } from 'react-i18next';
import { useContext } from "react"
import { IdiomContext } from "../../context/createcontext";
import {trackWindowScroll} from "react-lazy-load-image-component"






const clasif = [
    {
        tag: "Acid",
        sentence: "Mi puntito Ácido",
        img:vaso


    },
    {
        tag: "Petroleos",
        sentence: "Todo al negro",
        img:negra


    },
    {
        tag: "Klasikos",
        sentence: "Los Clásicos nunca fallan",
        img: clasico


    },
    {
        tag: "Caramelazos",
        sentence: "Soy un Caramelito",
        img: dulce,


    },
    {
        tag: "Revolution",
        sentence: "Hipster Beer",
        img: hipster


    },
    {
        tag: "Belga",
        sentence: "Desde Bélgica con Amor",
        img:belga


    },
]



function SelectBeer(props,{scrollPosition}) {
    console.log(props.beers)
    const [lng, updateLng] = useContext(IdiomContext)
const [t, i18n] = useTranslation("global");

 

    return (
      
    
            <div className="card-select-list">
            
      <Container>
        
            <Row>
               
          
              
                
          
              
  
        {clasif.length === 0 ? <h1>cargando</h1> : clasif.map((v, i) =>{ 
        
            return(
                <Col xs={12} sm={9} m={8} lg={6}> <DetailCard scrollPosition={scrollPosition} key={i} img={v.img} sent={v.sentence} beers={props.beers} tag={v.tag} >


        </DetailCard>   </Col>)} 
         )}
     
         </Row>
         </Container>
       
        </div>
   
    )

}

export default trackWindowScroll(SelectBeer);



