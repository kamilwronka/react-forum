import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class CategoryIndex extends Component {
    renderTopics() {
        const { id } = this.props.match.params;
        return this.props.topics.map((topic) => {
            if(topic.cat_id === Number(id)) {
                return (
                    <li key={topic.id} className="list-group-item">
                        {topic.title}
                    </li>
                );
            }
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
        topics: state.topics
    }
}

export default connect(mapStateToProps)(CategoryIndex);