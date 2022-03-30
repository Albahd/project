import { useTranslation } from 'react-i18next';
import { IdiomContext } from "../../context/createcontext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import './style.css';
import cerve1 from '../../assets/img/cerve1.jpg';
import cerve2 from '../../assets/img/cerve2.jpg';
import cerve3 from '../../assets/img/cerve3.jpg';
import cerveza4 from '../../assets/img/cerveza4.jpg';


function WeWho() {


    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");


    return (

        <Container style={{ color: 'black', backgroundColor: 'rgba(0,0,0,0.8)', minHeight: '100vh', fontFamily: 'highv' }} className="d-flex justify-content-between" fluid>
             <Row style={{ Width:'100%', fontFamily: 'highv', fontSize:'18px' }} className="bodywe"> 


             <Col style={{padding:'0px'}}xs={12} sm={12} md={12} lg={7} xxl={7}> 

                <Carousel style={{margin:'0px', paddingTop:'2rem'}} fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cerve3}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={cerve2}
                            alt="Second slide"
                        />

                        <Carousel.Caption >


                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cerveza4}
                            alt="Second slide"
                        />

                        <Carousel.Caption>


                        </Carousel.Caption>
                    </Carousel.Item>




                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cerve1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col> 
            
            <Col style={{padding:'0px'}} xs={12} sm={12} md={12} lg={4} xxl={4} className="d-flex justify-content-center"> 
                <Card style={{ backgroundColor: 'rgba(0,0,0,0.0)', color: 'white', border: 'none',padding:'2.5rem 2rem'}}   >


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


            </Col> 

             </Row> 
         </Container>






    )


}

export default WeWho