import React, {Component} from 'react';
import {NavLink} from "reactstrap";
import { MDBIcon } from 'mdbreact'

class SecondKontakt extends Component {
  render() {
    return (
      <div className="container" id={'SecondKontakt'}>
        <div className={'SecondKontaktContentItems'}>
         <div className={'SecondKontaktContentItemOne'}>
           <NavLink className={'ContentItemButton'} href={'#fake'}>
             <MDBIcon icon="chevron-up"/>
             {/*<img src={require('../../image/angel-up-black.png')} alt="angel-up-black"/>*/}
           </NavLink>
         </div>
          <div className={'SecondKontaktContentItemTwo'}>
            <div className={'firstCont'}>
              <h1>Kontakt</h1>
              <hr/>
              <button><h5>Wie können wir Ihnen helfen?</h5></button>
            </div>
            <div className={'secondCont'}>
              <button>
                <h5>Produkte</h5>
              </button>
              <button>
                <h5>Dienstleistungen</h5>
              </button>
              <button>
                <h5>Worum M-B Vans?</h5>
              </button>
              <button>
                <h5>Kontakt</h5>
              </button>
            </div>
            <div className={'thirdCont'}>
              <NavLink href={'#'}><img src={require('../../image/twitter.png')} alt="twitter"/></NavLink>
              <NavLink href={'#'}><img src={require('../../image/instagram.png')} alt="instagram"/></NavLink>
              <NavLink href={'#'}><img src={require('../../image/youtube.png')} alt="youtube"/></NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondKontakt;