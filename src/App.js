import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtsMusic from './components/ArtsMusic';
import FamilyFun from './components/FamilyFun';
import FoodDrink from './components/FoodDrink';
import HeritageHistory from './components/HeritageHistory';
import Sports from './components/Sports';
import Outdoors from './components/Outdoors';


class App extends Component {
  render(){

  
  return (
    <Router>
      <div>
      <Navbar />
      
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
    
      <Route  path="/artsmusic" component={ArtsMusic} />
      <Route  path="/fooddrink" component={FoodDrink} />
      <Route  path="/heritagehistory" component={HeritageHistory} />
      <Route  path="/sports" component={Sports} />
      <Route  path="/outdoors" component={Outdoors} />
      </Switch>

      <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
