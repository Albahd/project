import negra from "../../assets/img/negra.jpg"
import acida from "../../assets/img/neon.jpg"
import clasico from "../../assets/img/clasico.jpg"
import dulce from "../../assets/img/dulce.jpg"
import DetailCard from "../detailcard"
import Container  from "react-bootstrap/Container"
import  Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './style.css'
import { useTranslation } from 'react-i18next';
import { useContext } from "react"
import { IdiomContext } from "../../context/createcontext"




const clasif = [
    {
        tag: "Acid,Revolution",
        sentence: "Mi puntito Ácido",
        img:acida


    },
    {
        tag: "Petroleos",
        sentence: "Todo al negro",
        img:negra


    },
    {
        tag: "Klasikos,Belga",
        sentence: "Los Clásicos nunca fallan",
        img: clasico


    },
    {
        tag: "Caramelazos",
        sentence: "Soy un Caramelito",
        img: dulce,


    }
]



function SelectBeer(props) {
    console.log(props.beers)
    const [lng, updateLng] = useContext(IdiomContext)
const [t, i18n] = useTranslation("global");
 

    return (
        <Container >
            <div className="card-select-list">
            <Row lg={2}>
              
  
        {clasif.length === 0 ? <h1>cargando</h1> : clasif.map((v, i) =>{
        
            return(
        <DetailCard key={i} img={v.img} sent={v.sentence} beers={props.beers} tag={v.tag} >


        </DetailCard>)}
         )}
         
         </Row>
         </div>
       
        </Container>
    )

}

export default SelectBeer



