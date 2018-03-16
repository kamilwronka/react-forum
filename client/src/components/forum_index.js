import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchCategories } from '../actions';

class ForumIndex extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        return _.map(this.props.categories, category => {
            const link = `/category/${category.id}`;
            return (
                <li key={category.id} className="list-group-item">
                    <Link to={link} >
                        {category.name}
                    </Link>
                </li>
            );
        })
    }
    render() {
        return (
            <div className="px-2">

                <Link to="/category/create" className="btn btn-success my-2">Create new category</Link>
                <h3 className="my-2">List of categories:</h3>
                <ul className="list-group">
                        {this.renderCategories()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}


export default connect (mapStateToProps, { fetchCategories })(ForumIndex);