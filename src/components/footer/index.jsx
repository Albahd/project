
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tooltip from "react-bootstrap/Tooltip"
import Container from "react-bootstrap/Container"
import  OverlayTrigger  from "react-bootstrap/OverlayTrigger"
import { Link } from "react-router-dom"
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useTranslation } from 'react-i18next';
import { useContext} from 'react';
import { IdiomContext } from "../../context/createcontext";
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
import personas from '../../assets/img/personas.png';
import priv from '../../assets/img/priv.png';
import cookies from '../../assets/img/cookies.png';







function Footer() {
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");

    const [theming, updateTheming, changeTheme] = useContext(ThemingContext);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {t("Footer.f3")}
        </Tooltip>
      );
   


    return (
        <footer color={theming.warning} className="f-footer">
            <Container fluid>
                <Row>


                    <Col sm={12} lg={6} style={{ fontFamily: 'highv' }}className="mt-1">
                        {t("Footer.f1")}
                    </Col>
                    <Col sm={4} lg={2} style={{ fontFamily: 'highv' }}className="mt-1">
                        

                        {t("Footer.f2")}
                    </Col>
                    <Col sm={8} lg={3} style={{ fontFamily: 'highv' }} className="mt-1">
                    <a className="link-map" target='_blank' href={"https://www.instagram.com/alegriadevibeer/"}><img src={instagram} alt="" className="px-1" /> </a>

                       
                        <img src={facebook} className="px-1" alt="" />
                     <OverlayTrigger
                placement="top"
                delay={{ show: 150, hide: 300 }}
                overlay={renderTooltip}
              >
                  <Link to='/we'>  <img src={personas} className="px-1" alt="" /> </Link> 
             </OverlayTrigger>
             
                    </Col>
                    <Col sm={5} lg={1}  style={{ fontFamily: 'highv' }}>
                    <Link to='/legal'>  <img src={priv} className="px-1" alt="" /> </Link> 
                    <Link to='/legaltwo'>  <img src={cookies} className="px-1" alt="" /> </Link> 
                     </Col>

                </Row>
            </Container>
        </footer>
    )


}

export default Footer
