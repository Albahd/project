import { useTranslation } from 'react-i18next';
import { IdiomContext } from "../../context/createcontext";
import  Row  from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import  Container  from 'react-bootstrap/Container';
import { useContext } from 'react';
import './style.css';
import Image from 'react-bootstrap/Image'
import rota from '../../assets/img/broken3.jpg'

function WeWho() {

      
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");
   

    return (
       
            <Container className="text-we" fluid>
                <Row  className="d-flex flex-wrap justify-content-center">
                
             
                    <Card style={{border: 'none', backgroundColor: 'rgba(0,0,0,0.6)',color:'white', width:'70%'}}>
                        <p className="text-1">{t("who.w2")}</p>
                        <p className="text-1">{t("who.w3")}</p>
                        <p className="text-1">{t("who.w4")}</p>
                        <p className="text-1">{t("who.w5")}</p>
                        <p className="text-1">{t("who.w6")}</p>
                        <p className="text-1">{t("who.w7")}</p>
                        <p className="text-1">{t("who.w8")}</p>
                        <p className="text-1">{t("who.w9")}</p>
                        <p className="text-1">{t("who.w10")}</p>
                        <p className="text-1">{t("who.w11")}</p>
                        
                    
                    </Card>
                    </Row>
                    </Container>


    

         

    )


}

export default WeWho