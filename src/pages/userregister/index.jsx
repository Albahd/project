import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal"
import { useState } from "react";
import { useEffect, useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import { IdiomContext } from "../../context/createcontext";
import { useTranslation } from 'react-i18next';

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

            // name: e.target.username.value,
            name:e.target.username.value

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


    console.log(user)


    return (
        <Container>
            <Row>
                <Col>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                    <Button variant="primary" onClick={handleShow}>
                        Cambiar el nombre
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>username</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handlePatchUser}>
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder="cambia el nombre de usuario" />
                            </Form>
                        {/* <input type="text" name="name"></input> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button  type="submit" variant="primary" onSubmit={handlePatchUser} onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>









                    {/* 
                <Form onSubmit={handlePatchUser}>
                                <Form.Label className="mt-4" ></Form.Label>
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder={t("cambiar usuario")}


                                />
                                <Button type="submit">Editar</Button>
                            </Form> */}

                    <Button onClick={handleDelete} variant={theming.primary}>borrar usuario </Button>

                </Col>

                <Col>
                    <p>Cervezas favoritas</p>


                </Col>
            </Row>

        </Container>


    )


}


export default UserRegister;