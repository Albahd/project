
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { IdiomContext } from "../../context/createcontext";
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
import personas from '../../assets/img/personas.png'
import { Container } from "react-bootstrap";





function Footer() {
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");

    const [theming, updateTheming, changeTheme] = useContext(ThemingContext);
   


    return (
        <footer color={theming.warning} className="f-footer">
            <Container fluid>
                <Row>


                    <Col sm={12} lg={7} style={{ fontFamily: 'highv' }}className="mt-1">
                        {t("Footer.f1")}
                    </Col>
                    <Col sm={4} lg={2} style={{ fontFamily: 'highv' }}className="mt-1">

                        {t("Footer.f2")}
                    </Col>
                    <Col sm={8} lg={3} style={{ fontFamily: 'highv' }} className="mt-1">

                        <img src={instagram} alt="" className="px-1" />
                        <img src={facebook} className="px-1" alt="" />
                        <img src={personas} className="px-1" alt="" />
                    </Col>

                </Row>
            </Container>
        </footer>
    )


}

export default Footer
