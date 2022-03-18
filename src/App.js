import logo from './logo.svg';
import './App.scss';
import Navegador from './components/navegador';
import CardBeer from './components/cardbeer';
import ListBeer from './components/listbeer';
import Events from './components/events';
import Fan from './components/fan';
import StoreBar from './components/store-bar';
import SelectBeer from './components/selectbeer';
import IdiomProvider from './context/context';
import { useState, useEffect } from 'react';
import { ThemingContext } from './shared/theming/theming-selector/theming.context';
import Register from './components/registro';
import Login from './components/login'
import './custom.scss';
import LandingPage from './pages/landin-page';
import BeerFilter from './pages/beerfilter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'



function App() {
  let [beer, updatebeer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/beer')
      .then(j => j.json())
      .then(r => {
        console.log(r)
        updatebeer(r)
      }


      )

  }, []
  )





  return (
    <BrowserRouter>
      <IdiomProvider>
        <div className="header">
          <Container fluid className="header-cont" >
            <Row >
              <Col lg={12}><Navegador></Navegador></Col>
            </Row>
          </Container>
        </div>

        { beer.length === 0 ? "": 
          
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='listbeer' element={<ListBeer beers={beer} />}></Route>
            <Route path='select' element={<SelectBeer beers={beer} />}></Route>
            <Route path='beerfilter/:tag'element={<BeerFilter></BeerFilter>}></Route>


            <Route path='/Events' element={<Events />}></Route>
            <Route path='/fan' element={<Fan />}></Route>
            <Route path='/store' element={<StoreBar />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/registro' element={<Register />}></Route>

          </Routes>
        }
      </IdiomProvider>

    </BrowserRouter>


  );
}

export default App;
