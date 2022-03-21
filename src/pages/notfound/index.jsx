import { useTranslation } from 'react-i18next';
import { IdiomContext } from "../../context/createcontext";
import  Row  from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';
import { useContext } from 'react';
import './style.css';

function NotFound() {

      
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");
   

    return (
       
            <Container className="text-not" fluid>
                    <Row className="display-5">
                        <h3 className="text-1">{t("not.n1")}</h3>

                    </Row>

                    <Row>
                        <h3 className="text-2">Not Found</h3>

                    </Row>
                    </Container>


    

         

    )


}

export default NotFound