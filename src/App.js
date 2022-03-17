import logo from './logo.svg';
import './App.scss';
import Navegador from './components/navegador';
import CardBeer from './components/cardbeer';
import ListBeer from './components/listbeer';
import Events from './components/events';
import Fan from './components/fan';
import StoreBar from './components/store-bar';
import DetailsBeer from './components/detailsbeer';
import IdiomProvider from './context/context';
import { useContext } from 'react';
import { ThemingContext } from './shared/theming/theming-selector/theming.context';
import Register from './components/registro';
import Login from './components/login'
import './custom.scss';
import LandingPage from './pages/landin-page';
import { BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <IdiomProvider>
    <Routes>
      <Route path='/' element={ <LandingPage></LandingPage>}></Route>
      <Route path='/cardbeer' element={ <CardBeer/>}></Route>
      <Route path='/listbeer' element={ <ListBeer/>}></Route>
      <Route path='/details/:id' element={ <DetailsBeer/>}></Route>
      <Route path='/Events' element={ <Events/>}></Route>
      <Route path='/fan' element={<Fan/>}></Route>
      <Route path='/store' element={<StoreBar/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/registro'element={<Register/>}></Route>

      </Routes>
    </IdiomProvider>
  
    </BrowserRouter>


  );
}

export default App;
