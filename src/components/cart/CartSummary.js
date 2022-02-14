import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'

class CartSummary extends Component {

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
                            <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}
                                <Badge color='success'>
                                    {cartItem.quantity}
                                </Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>Sepete Git</DropdownItem>
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

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}
export default connect(mapStateToProps)(CartSummary)