import { useTranslation } from 'react-i18next';
import { IdiomContext } from "../../context/createcontext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import './style.css';
import cerve1 from '../../assets/img/cerve1.jpg';
import cerve2 from '../../assets/img/cerve2.jpg';
import cerve3 from '../../assets/img/cerve3.jpg';
import cerveza4 from'../../assets/img/cerveza4.jpg';


function WeWho() {


    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");


    return (

        <Container style={{color:'black', backgroundColor: 'rgba(0,0,0,0.8)', minHeight: '100vh', fontFamily:'highv'}} fluid>
            <Row className="d-flex flex-wrap justify-content-center">


                <Col xs={12} m={10} lg={9} xxl={8}>

                    <Carousel className='m-5' fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cerve3}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h4>{t("who.w2")}</h4>
                                <h4>{t("who.w3")}</h4>
                                <h4>{t("who.w4")}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={cerve2}
                                alt="Second slide"
                            />

                            <Carousel.Caption style={{color:'#fbbc5d'}}>
                                <h4>{t("who.w5")}</h4>
                                <h4>{t("who.w6")}</h4>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cerveza4}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h4>{t("who.w7")}</h4>
                                <h4>{t("who.w8")}</h4>
                                <h4>{t("who.w9")}</h4>
                                <h4>{t("who.w10")}</h4>

                            </Carousel.Caption>
                        </Carousel.Item>




                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cerve1}
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                                <h2>{t("who.w11")}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                {/* </Col>
                    <Col>
                
             
                    <Card style={{border: 'none', backgroundColor: 'rgba(0,0,0,0.6)',color:'white', width:'60%'}}>
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
                    </Col> */}
            </Row>
        </Container>






    )


}

export default WeWho