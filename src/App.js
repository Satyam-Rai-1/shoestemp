
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar.';
import Mainsec from './components/Mainsec';

const App = ()=>{
  return(
    <Fragment>
      <Navbar/>
      <Mainsec/>
    </Fragment>
  )
}

export default App;