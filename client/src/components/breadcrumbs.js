import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    renderBreadcrumb() {
        return (
            <div>
                Do zrobienia
            </div>
        )
    }
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">{this.renderBreadcrumb()}</li>
                </ol>
            </nav>

        )
    }
}

export default Breadcrumbs;