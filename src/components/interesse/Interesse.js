import React, {Component} from 'react';

class Interesse extends Component {
  render() {
    return (
      <div className="container">
        <div className={'InteresseContent'}>
          <h3>Das könnte Sie auch interessieren</h3>
          <hr/>
          <div className="InteresseContentItems">
            <div className="InteresseContentItemOne">
              <h3>Modelübersicht</h3>
              <div className="ItemOne">

                <p>Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit, veniam!</p>
                <div>
                  <button> > Mehr erfahren</button>
                </div>
              </div>
            </div>
            <div className="InteresseContentItemTwo">
              <h3>Service</h3>
              <div className="ItemTwo">

                <p>Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit, veniam!</p>
                <div>
                  <button> > Mehr erfahren</button>
                </div>
              </div>
            </div>
            <div className="InteresseContentItemThree">
              <h3>Leasing</h3>
              <div className="ItemThree">

                <p>Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit, veniam!</p>
                <div>
                  <button> > Mehr erfahren</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interesse;