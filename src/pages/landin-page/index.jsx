import { Container, Row, Col } from "react-bootstrap"
import Footer from "../../components/footer"
import Login from "../../components/login"
import Navegador from "../../components/navegador"
import './style.css';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { IdiomContext } from "../../context/createcontext";



function LandingPage() {
    
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");
   

    return (
        <div className="body">

            <div className="main">

                 <Container className="title" fluid>
                    <Row className="display-5">
                        <h3 className="title-1">{t("landing.l1")}</h3>

                    </Row>

                    <Row>
                        <h3 className="title-2">{t("landing.l2")}</h3>

                    </Row>

                    <Row>
                        <h3 className="title-3">{t("landing.l3")}.</h3>

                    </Row>
                    <Row>

                        <h1 className="title-4">     Alegría de VIBEER</h1>


                    </Row>
                </Container> 
            </div>


            <Footer></Footer>

        </div>


    )

}

export default LandingPage