import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    };

    selectCategory = (category) => {
        this.props.actions.changeCategory(category)
    };

    render() {
        return (
            <div>
                <h1>
                    <Badge color="warning" size="small">
                        CategoryList
                    </Badge>
                </h1>

                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem active={category.id === this.props.currentCategory.id}
                                onClick={() => this.selectCategory(category)}
                                key={category.id}
                            >
                                {category.categoryName}
                            </ListGroupItem>

                        ))}

                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)