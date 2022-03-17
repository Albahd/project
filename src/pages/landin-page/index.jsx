import { Container, Row, Col } from "react-bootstrap"
import Login from "../../components/login"
import Navegador from "../../components/navegador"
import './style.css'



function LandingPage() {

    return (

        <div className="main">
            <Container className="main-pageContainer" fluid >

                <Container fluid className="header-cont" >
                    <Row >
                        <Col lg={12}><Navegador></Navegador></Col>
                    </Row>
                </Container>
            </Container>
            <Container className="fore-cont">
                <Row>
                    <Col lg={12}>
                        {/* <div className="title">Alegría de ViBeer</div> */}
                    </Col>
                </Row>
            </Container>
        </div>


    )

}

export default LandingPage