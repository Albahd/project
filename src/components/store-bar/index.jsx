
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import Card from "react-bootstrap/Card"
import L from 'leaflet';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './style.css'
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useContext } from "react";





function StoreBar() {
    const [theming, updateTheming, changeTheme, logName, setLogName] = useContext(ThemingContext);
    const defaultPosition = [40.4165, -3.70256];
    const name = [
        {
            n: "Labirratorium",
            tag: "https://www.labirratorium.com/es/",
            position: [40.433809, -3.708471],
            type: "shop"
        },
        {
            n: "Be Hoppy",
            tag: "https://behoppymadrid.com/",
            position: [40.412457,-3.695563],
            type: "shop"
        },
        {
            n: "La Cervecista",
            tag: "https://www.masquecervezas.es/",
            position: [40.412858,-3.699471],
            type: "shop"
        },
        {
            n: "Espuma",
            tag: "https://espumadecerveza.es/",
            position: [40.408681, -3.710086],
            type: "shop"
        },
        {
            n: "Birra y paz",
            tag: "https://birra-y-paz-cervezas-artesanas.business.site//",
            position: [40.419638, -3.678222],
            type: "shop"
        },
        {
            n: "Mas que Cervezas",
            tag: "https://www.masquecervezas.es/",
            position: [40.412858, -3.699471],
            type: "shop"
        },
        {
            n: "La Buena Cerveza",
            tag: "https://www.labuenacerveza.com/",
            position: [40.423551, -3.700140],
            type: "shop"

        },
        {
            n: "Craft Beer Beer",
            tag: "https://shop.beebeer.es/es/",
            position: [40.421922, -3.696928],
            type: "drink"
        },
        {
            n: "The Stuyck Co",
            tag: "https://thestuyckco.com/",
            position: [40.4264969, -3.7017425],
            type: "drink"
        },
        {
            n: "Los Grifos Craft Beers",
            tag: "https://losgrifos.es/",
            position: [40.426496, -3.701889],
            type: "drink"
        },
        {
            n: "Fábrica Maravaillas",
            tag: "http://www.fmaravillas.com/",
            position: [40.428671, -3.705306],
            type: "drink"
        },
        {
            n: "Beerhouse",
            tag: "https://beerhouse.es/",
            position: [40.422752, -3.701993],
            type: "drink"
        },
        {
            n: "Taproom",
            tag: "https://taproom.es/",
            position: [40.436060,-3.712930],
            type: "drink"
        },
        {
            n: "La Buena Pinta",
            tag: "https://www.instagram.com/labuenapintalavapies/",
            position: [40.443946,-3.698763],
            type: "drink"
        }



    ]
    
    let shop = name.filter( v => v.type === "shop");
    let drink = name.filter( v => v.type === "drink");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });


    return (

        <Container  fluid className="container-fav" >
            <Row>
                <Col xs={12} sm={9} md={8} lg={8}> 

                    <Card className="m-1 p-1"
                        style={{ width: "100%", height: "100%" }}>
                        {defaultPosition !== undefined ?
                            <MapContainer
                                style={{ width: "100%", height: "100%"}}
                                center={defaultPosition}
                                zoom={14}
                            >
                                <TileLayer
                                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}

                                />
                            
                                {name.map((v, i) => <Marker   key={i} position={v.position} ><Popup>{v.n}</Popup></Marker>
                                )}



                            </MapContainer> : ''} </Card>
                </Col>
                <Col>
                    <Card className="m-1 p-1 d-flex flex-wrap  text-center justify-content-around" style={{ color: "white", width: "80%", height: "50%", backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <h1>Shop</h1>
                
                        {shop.map(v =><p> {v.n} <a className="link-map" target='_blank' href={v.tag}> 👉 Go!</a> </p>
                        )}

                    </Card>
                    <Card className="m-1 p-1 d-flex flex-wrap  text-center justify-content-around" style={{ color: "white", width: "80%", height: "50%", backgroundColor: 'rgba(0,0,0,0.3)' }}>

                        <h1>Drink</h1>


                        
                        {drink.map(v =><p> {v.n} <a className="link-map" target='_blank' href={v.tag}>  👉 Go!</a></p>
                        )}

                       


                    </Card>


                </Col>
            </Row>
        </Container>

    )
}
export default StoreBar