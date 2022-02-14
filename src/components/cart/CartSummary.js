import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

class CartSummary extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " Sepetten silindi.");
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>Sepetiniz</DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={() => this.removeFromCart(cartItem.product)}>X</Badge>

                                {cartItem.product.productName}
                                <Badge color='success'>
                                    {cartItem.quantity}
                                </Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)