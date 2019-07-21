import React from 'react';
import {
  Collapse,
  Navbar,
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
    const clsMenu = ["burger", "navbar-toggler"];

    if(this.state.isOpen) {
      clsMenu.push("burger-active")
    } else {
      for ( let i in clsMenu) {
        if(clsMenu[i] === "burger-active") {
          clsMenu.splice(i, 1)
        }
      }
    }

    return (
      <div className="container" id={'TopNavigationContainer'}>
        <div className="contentDiv">
          <Navbar color="#464646" dark expand="md">
            <NavbarBrand href="/">
              <div className="LogoContainer">
                <div className="logoItems">
                  <img className="logoItemOne" src={require('../../image/index.png')} alt="mercedes-logo"/>
                  <img className="logoItemTwo" src={require('../../image/mercedes.png')} alt="mercedes-name"/>
                </div>
              </div>
            </NavbarBrand>
            <div className={clsMenu.join(" ")} onClick={this.toggle}>
              <div className={'line1'}/>
              <div className={'line2'}/>
              <div className={'line3'}/>
            </div>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Produkte
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="/components/">Dienstleistungen</NavLink>
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                      <NavLink href="#WofuerContainer">Wofür wir stehen</NavLink>
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                      <NavLink href="#SecondKontakt">Kontakt</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/components/">Dienstleistungen</NavLink>
                </NavItem>
                <NavItem className={'wofuerLink'}>
                  <NavLink href="/wofuer-wir-stehen">Wofür wir stehen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/kontakt">Kontakt</NavLink>
                </NavItem>
                <div className={'languageContainer'}>
                  <button>
                    <img src={require('../../image/germany-flag.svg.png')} alt="german-flag"/>
                  </button>
                  <button>
                    <img src={require('../../image/england-flag.jpg')} alt="england-flag"/>
                  </button>
                </div>
              </Nav>
            </Collapse>

          </Navbar>
        </div>
      </div>
    );
  }
}
