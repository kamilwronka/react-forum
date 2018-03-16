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
            const link = `/category/${category.cat_id}`;
            return (
                <Link key={category.cat_id} className="list-group-item list-group-item-action flex-column align-items-start" to={link}>
                    <div  className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{category.name}</h5>
                        <small>thread counter</small>
                    </div>
                    <p className="mb-1">{category.description}</p>
                </Link>
            );
        })
    }
    render() {
        return (
            <div className="px-2">
                <Link to="/category/create" className="btn btn-success my-2">Create new category</Link>
                <h3 className="my-2">List of categories:</h3>
                <div className="list-group">
                            {this.renderCategories()}
                </div>
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