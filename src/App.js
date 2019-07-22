import React, { Component } from "react";
import TopNavigation from "./components/topnavigation/TopNavigation";
import Wofuer from "./components/wofuer-wir-stehen/Wofuer";
import Kontakt from "./components/kontakt/Kontakt";
import SecondKontakt from "./components/kontakt/SecondKontakt";
import KontaktButton from "./components/kontakt/button-contact/KontaktButton"
import Footer from "./components/footer/Footer";
import Interesse from "./components/interesse/Interesse";
import Awards from "./components/awards/Awards";

class App extends Component {
  render() {
    return (
      <div className={'appCont'}>
        <div id="fake"/>
        <KontaktButton/>
        <div className={'TopNavigationContainer'}>
          <TopNavigation />
        </div>
        <div className="imgAppComponent">
          <img src={require("./image/imgAuto.png")} alt="" />
        </div>
        <div className="WofuerContainer">
          <Wofuer />
        </div>
        <div className={'KontaktCont'}>
          <Kontakt />
        </div>
        <div className={'interesseCont'}>
          <Interesse />
        </div>
        <div className={'awardsCont'}>
          <Awards />
        </div>
        <div className={'secondKontaktCont'}>
          <SecondKontakt/>
        </div>
        <div className={'footerCont'}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
