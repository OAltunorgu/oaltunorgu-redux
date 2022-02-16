import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <Link to="/">OALTUNORGU</Link>
                        <Collapse navbar>
                            <Nav
                                className="ms-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink>
                                        <Link to="/saveProduct">Ürün Ekle</Link>
                                    </NavLink>
                                </NavItem>
                                <CartSummary />
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}
