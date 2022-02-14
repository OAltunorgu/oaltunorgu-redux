import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'


class ProductList extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Badge color="warning">
                        Product
                    </Badge>

                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                </h1>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer
    }
}

export default connect(mapStateToProps)(ProductList)