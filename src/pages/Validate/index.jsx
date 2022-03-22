
import enjoy from '../../assets/img/enjoy.jpg'
import { useSearchParams} from "react-router-dom";
import { useEffect,useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import './style.css';

   

function Validate() {
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token');
    const [theming, updateTheming] = useContext(ThemingContext);
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");

   
    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    },[]);


    return( 
        <Container className="page-valid" fluid>
                  {/* <Row className="img-valid"> */}
                {/* <Image src={neon} fluid></Image> */}
                {/* </Row> */}
                    <Row className="size-1">
                        <Col>
                        {t("not.n3")}
                       </Col>
                    </Row>

            
                    </Container>



   
    )
}

export default Validate;