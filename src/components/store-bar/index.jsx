
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Card from "react-bootstrap/Card"
import L from 'leaflet';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'





function StoreBar() {
    const defaultPosition = [40.4165, -3.70256];
    const places = [
        [40.433809, -3.708471],
        [40.408681, -3.710086],
        [40.419638, -3.678222],
        [40.412858, -3.699471],
        [40.423551, -3.700140],
        [40.421922, -3.696928],
        [40.421922, -3.696928],
        [40.426496, -3.701889],
        [40.428671, -3.705306],
        [40.422752,-3.701993],
        [40.422752,-3.701993],

    ]
    const name = [
        {
            "n": "Labirratorium",
            "tag": "https://www.labirratorium.com/es/"
        },
        {
            "n": "Espuma",
            "tag": "https://espumadecerveza.es/"
        },
        {
            "n": "Birra y paz",
            "tag": "https://birra-y-paz-cervezas-artesanas.business.site//"
        },
        {
            "n": "Mas que Cervezas",
            "tag": "https://www.masquecervezas.es/"
        },
        {
            "n": "La Buena Cerveza",
            "tag": "https://www.labuenacerveza.com/"
        },
        {
            "n": "Craft Beer Beer",
            "tag": "https://shop.beebeer.es/es/"
        },
        {
            "n": "The Stuyck Co",
            "tag": "https://thestuyckco.com/"
        },
        {
            "n": "Los Grifos Craft Beers",
            "tag": "https://losgrifos.es/"
        },
        {
            "n": "Fábrica Maravaillas",
            "tag": "http://www.fmaravillas.com/"
        },
        {
            "n": "Beerhouse",
            "tag": "https://beerhouse.es/"
        },



    ]

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });


    return (

        <Container fluid className="container-fav">
            <Row>
                <Col>

                    <Card className="m-1 p-1"
                        style={{ width: "100%", height: "100vh" }}>
                        {defaultPosition !== undefined ?
                            <MapContainer
                                style={{ width: "100%", height: "100%" }}
                                center={defaultPosition}
                                zoom={12}
                            >
                                <TileLayer
                                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}

                                />
                                {places.map((v, i) => <Marker key={i} position={v}></Marker>

                                )}



                            </MapContainer> : ''} </Card>
                </Col>
                <Col>
                    <Card className="m-1 p-1 d-flex flex-wrap  text-center justify-content-around" style={{ color: "white", width: "50%", height: "50%", backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <h1>Shop</h1>
                        <p>{name[0].n}</p>
                        <p>{name[1].n}</p>
                        <p>{name[2].n}</p>
                        <p>{name[3].n}</p>
                        <p>{name[4].n}</p>



                    </Card>
                    <Card className="m-1 p-1 d-flex flex-wrap  text-center justify-content-around" style={{ color: "white", width: "50%", height: "50%", backgroundColor: 'rgba(0,0,0,0.3)' }}>

                        <h1>Drink</h1>
                        <p>{name[5].n}</p>
                        <p>{name[6].n}</p>
                        <p>{name[7].n}</p>
                        <p>{name[8].n}</p>
                        <p>{name[9].n}</p>


                    </Card>


                </Col>
            </Row>
        </Container>

    )
}
export default StoreBar