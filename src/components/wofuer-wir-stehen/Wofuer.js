import React, {Component} from 'react';
import {NavLink} from "reactstrap";
import { MDBIcon } from 'mdbreact'

class Wofuer extends Component {
  render() {
    return (
      <div className="container" id={'WofuerContainer'}>
        <div className={'WofuerCont'}>
          <h3>Wofür wir stehen</h3>
          <hr/>
          <div className="containerContent">
            <div className="containerContentItem">
              <img src={require('../../image/werkstatt.jpg')} alt=""/>
              <h4>Verlässlich Produktqualität</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
            <div className="containerContentItem">
              <img src={require('../../image/partnerschaftlicher.jpg')} alt=""/>
              <h4>Partnerschaftlicher Umgang.</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
            <div className="containerContentItem">
              <img src={require('../../image/automobilbau.jpg')} alt=""/>
              <h4>Nachhaltige Wirtschaftlichkeit</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
            <div className="containerContentItem">
              <img src={require('../../image/salon.jpg')} alt=""/>
              <h4>Vorbildliche Sicherheit</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
            <div className="containerContentItem">
              <img src={require('../../image/flexibilitaet.jpg')} alt=""/>
              <h4>Bedürfnisgerechte Flexibilität</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
            <div className="containerContentItem">
              <img src={require('../../image/produktkonzept.jpg')} alt=""/>
              <h4>Faszinierendes Produktkonzept</h4>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi atque delectus dolore doloribus et
                fugiat illum in inventore iste, labore molestiae mollitia necessitatibus
                obcaecati quis rerum sed suscipit voluptatem voluptates.</p>
            </div>
          </div>
        </div>
        <div className="VansInZahlenContainer" id={'VansInZahlenContainer'}>
          <h3>Mercedes-Benz Vans in Zahlen</h3>
          <hr/>
          <div className="VansInZahlenContentContainer">
            <div className="FirstItem">
              <h1>14299</h1>
              <p>Mitarbeiter</p>
            </div>
            <div className="SecondItem">
              <h1>1.181 Mrd.</h1>
              <p>Euro Umsatz</p>
            </div>
            <div className="ThirdItem">
              <h1>407300</h1>
              <p>Abgesetzte Fahrzeuge</p>
            </div>
          </div>
        </div>
        <div className="textDiv">
          <hr/>
          <div>
            <h3>UNSER ENGAGEMENT - IHRE VORTEILE</h3>
          </div>

        </div>
        <div className="EngagementContentContainer">
          <h3>Unser Engagement - Ihre Vorteile</h3>
          <hr/>
          <div className="EngagementContentItems">

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
                Ad aliquid architecto consectetur consequuntur cum dignissimos ea,
                eligendi facilis in magni non obcaecati officiis porro quidem
                quis quos rem saepe suscipit tempore, voluptatem! Alias atque beatae dicta dolor
                ducimus, omnis quaerat qui quia quisquam sed sit, ullam. Accusamus amet blanditiis
                debitis deserunt dolores ipsam iure, laborum libero molestiae nostrum optio pariatur,
                ratione reiciendis temporibus voluptatibus!
                <br/>
                <br/>
                Cum eaque eos laborum necessitatibus
                nemo non officia officiis pariatur sed ullam. Aspernatur, consequatur dolorem
                eius harum iure necessitatibus non numquam officiis quibusdam temporibus
                ut veniam voluptate? Asperiores fugit illo laboriosam nemo, pariatur provident
                reiciendis tempora.</p>
            </div>
            <img src={require('../../image/engagement.jpg')} alt=""/>
          </div>
        </div>
        <div className="FrameworkContentContainer">
          <hr/>
          <div className="FrameworkTitle">
            <h3>International Framework Agreement</h3>
            <NavLink href={'#fake'}>
              <MDBIcon icon="chevron-up"/>
              {/*<img src={require('../../image/angel-up-blue.png')} alt="angel-up" ref={this.myRef}/>*/}
            </NavLink>
          </div>
          <hr/>
          <div className="FrameworkContentItems">
            <h2>Ein Ansprechpartner - viele Vorteile</h2>
            <p><img src={require('../../image/vorteile.jpg')} alt=""/>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
              Aperiam consequatur dignissimos eligendi enim eum excepturi illo illum iusto
              laboriosam laborum magnam mollitia, nihil non numquam officiis omnis pariatur
              possimus quia quibusdam quidem ratione reiciendis repellat repellendus rerum
              sapiente, sequi similique tenetur. Adipisci assumenda consequatur eligendi
              enim facilis nostrum provident qui rem, repellat rerum sint sit soluta,
              temporibus tenetur unde veniam, voluptatem. Debitis, similique veniam?
              <br/>
              <br/>
              <br/>
              Aperiam eaque, magni nisi odio reprehenderit temporibus veniam!
              Accusantium aliquid at commodi consequatur corporis cum dicta dignissimos
              doloremque dolorum, ipsam libero maxime optio quae quam quia quod,
              saepe sapiente sint sunt voluptatum! Accusamus ad commodi quibusdam? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Blanditiis deleniti eligendi libero quia reprehenderit ullam
              veniam. Aliquam aliquid, architecto aspernatur commodi consectetur consequatur
              consequuntur dolore dolorem eligendi eveniet ex exercitationem fugiat fugit harum
              ipsa iusto labore laudantium libero magnam neque!
              <br/>
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur
              corporis cum doloremque dolorum ducimus eius enim esse est eveniet exercitationem
              fugiat harum illum ipsum itaque, iure iusto magni minus molestias mollitia,
              nesciunt nisi non obcaecati officia perferendis possimus quaerat quam quia,
              quod repudiandae similique tempora temporibus unde ut voluptates!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Wofuer;