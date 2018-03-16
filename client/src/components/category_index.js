import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchThreads } from "../actions";

class CategoryIndex extends Component {

    componentDidMount() {
        const { cat_id } = this.props.match.params;
        this.props.fetchThreads(cat_id);
    }

    renderTopics() {
        return _.map(this.props.threads, thread => {
            return (
                <li key={thread._id} className="list-group-item">
                        {thread.name}
                </li>
            );
        })
    }
    render() {
        return (
            <ul className="list-group">
                {this.renderTopics()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        threads: state.threads
    }
}

export default connect(mapStateToProps, { fetchThreads })(CategoryIndex);