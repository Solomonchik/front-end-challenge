import React, {Component} from 'react';
import TopNavigation from './components/topnavigation/TopNavigation'
import Wofuer from './components/wofuer-wir-stehen/Wofuer'
import Kontakt from './components/kontakt/Kontakt'
import Footer from './components/footer/Footer'
import Interesse from './components/interesse/Interesse'

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation/>
        <div className="imgAppComponent">
          <img src={require('./image/imgAuto.png')} alt=""/>
        </div>
        <div className="container">
          <Wofuer/>
        </div>
        <Kontakt/>
        <div className="container">
          <Interesse/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;