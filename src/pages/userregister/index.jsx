import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal"
import { useState } from "react";
import { useEffect, useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';
import './style.css';
import Fav from "../../components/fav";

function UserRegister() {
    const [theming, updateTheming] = useContext(ThemingContext)
    const navigate = useNavigate()
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [user, updateuser] = useState([]);
    let token = localStorage.getItem('token')
    let id = localStorage.getItem('ID')
    let [userfav, updateuserfav] = useState([])
    let[envD,updateDelete] = useState([]);




    useEffect(() => {

        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {

                // console.log(data)
                updateuser(data)
                localStorage.setItem('ID', data._id)


            })

    }, [])
    const handleDelete = () => {


        fetch('http://localhost:4000/users', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                localStorage.removeItem('token');
                navigate('/');

            })

    }

    const handlePatchUser = e => {
        e.preventDefault()

        const userData = {


            name: e.target.username.value

        }

        console.log(userData)

        fetch(`http://localhost:4000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` }

        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
            })







    }

    useEffect(() => {
        fetch('http://localhost:4000/fav', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`


            }})
            .then(j => j.json())
            .then(r => {
                console.log(r)
                updateuserfav(r)
            }


            )

    }, [envD]
    )

    console.log(userfav)


    const handleCloseSession = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('ID')
        localStorage.removeItem('email')
        localStorage.removeItem('username')
        navigate('/')

    }
   
    const acdelete=(v) =>{
        updateDelete(envD => [...envD,v] )
        }
    return (
        <div className="body-user">

            <Container fluid>
                <Row>
                    <Col xs={9} sm={8} md={7} xl={5} className="div-datauser">
                        <p className="title-pageuser">    {t("user.r1")} </p>
                        <Card className="card-pageuser" style={{ width: '25rem', height: '15rem', border: 'none', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                            <Card.Body>
                                <p className="data-pageuser">{t("user.r2")}: {user.name} <Button variant={theming.primary} onClick={handleShow} className="p-1 mx-2">
                                    {t("user.r5")}
                                </Button> </p>

                                <p>{t("user.r3")}: {user.email}</p>
                                <p>{t("user.r4")}: {user.age}</p>
                                <Button className="but-close p-1" onClick={handleCloseSession} variant={theming.primary} type="submit">
                                    out sesión
                                </Button>
                                <Button onClick={handleDelete} variant={theming.primary} className="p-1">{t("user.r6")}  </Button>

                            </Card.Body>
                        </Card>


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>

                                <Modal.Title>username</Modal.Title>

                            </Modal.Header>
                            <Form onSubmit={handlePatchUser}>
                                <Modal.Body>

                                    <Form.Control
                                        name="username"
                                        type="text"
                                        placeholder="cambia el nombre de usuario" />



                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant={theming.dark} onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button type="submit" variant={theming.primary} onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>

                    </Col>


                    <Col xs={9} sm={8} md={7} xl={7} >
                    <p className="title-pageuser2 text-center">{t("user.r7")}</p>
                        
                        <Container fluid className="d-flex flex-wrap justify-content-around">
                       
                            {userfav.map((v, i) =>
                                <Fav acdelete={acdelete}

                                    key={i} al={v.ABV} description={v.Descripción}
                                    for={v.Formato} or={v.Origen} cat={v.Categories}
                                    img={v.img} tipo={v.tipo} title={v.title} id={v.id}></Fav>

                            )}
                        </Container>

                    </Col>




                </Row>

            </Container>

        </div >


    )


}


export default UserRegister;