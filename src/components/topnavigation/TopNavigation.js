// import React, {Component} from 'react';
//
// class TopNavigation extends Component {
//   render() {
//     return (
//       <div className="TopNavigationContainer">
//         <div className="contentDiv">
//           <div className="LogoContainer">
//             <div className="logoItems">
//               <img className="logoItemOne" src={require('../../image/index.png')} alt="mercedes-logo"/>
//               <img className="logoItemTwo" src={require('../../image/mercedes.png')} alt="mercedes-name"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default TopNavigation;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="TopNavigationContainer">
        <div className="contentDiv">
          <Navbar color="#464646" light expand="md">
            <NavbarBrand href="/">
              <div className="LogoContainer">
                <div className="logoItems">
                  <img className="logoItemOne" src={require('../../image/index.png')} alt="mercedes-logo"/>
                  <img className="logoItemTwo" src={require('../../image/mercedes.png')} alt="mercedes-name"/>
                </div>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Produkte
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/components/">Dienstleistungen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/wofuer-wir-stehen">Wofür wir stehen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/kontakt">Kontakt</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
