import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchThreads, fetchCategories } from "../actions";

class CategoryIndex extends Component {

    componentDidMount() {
        const { cat_id } = this.props.match.params;
        this.props.fetchThreads(cat_id);
        this.props.fetchCategories();
    }

    renderThreads() {
        return _.map(this.props.threads, thread => {
            const link = `/category/thread/${thread.thread_id}`;
            return (

                    <tr key={thread._id}>
                        <td scope="row">
                            <Link to={link} key={thread._id} >
                                {thread.name}
                            </Link>
                        </td>
                        <td>{thread.author}</td>
                        <td>Answers counter</td>
                    </tr>

            );
        })
    }
    renderCategories() {
        return _.map(this.props.categories, category => {
            if(category.cat_id === Number(this.props.match.params.cat_id)) {
                return category.name;
            }
        })
    }
    render() {
        const createLink = `/category/${this.props.match.params.cat_id}/thread/create`;
        return (
            <div className="mx-2">
                <Link to={createLink} className="btn btn-success my-2">Create new thread</Link>
                <h3>List of threads in {this.renderCategories()}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Thread</th>
                            <th scope="col">Author</th>
                            <th scope="col">Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.renderThreads()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        threads: state.threads,
        categories: state.categories
    }
}

export default connect(mapStateToProps, { fetchThreads, fetchCategories })(CategoryIndex);