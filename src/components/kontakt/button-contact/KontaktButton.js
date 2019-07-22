import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class KontaktButton extends Component {
  render() {
    return (
      <div className={'KontaktButtonDiv'}>
        <button>
          <MDBIcon far icon="comment"/>
          <p>Kontakt</p>
        </button>
      </div>
    );
  }
}

export default KontaktButton;