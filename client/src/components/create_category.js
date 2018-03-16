import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCategory } from "../actions";

class NewThread extends Component {
    renderField(field) {
        const { meta } = field;
        const className = `form-group ${ meta.touched && meta.error ? 'has-danger' : ''} px-2`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                <div className="text-danger">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createCategory(values, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Category name"
                    name="name"
                    component={this.renderField}
                />
                <Field
                    label="Category description"
                    name="description"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary mx-2">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    //validate inputs from values
    if(!values.category) {
        errors.category = "Enter category name";
    }
    if(!values.description) {
        errors.description = "Enter description pliz";
    }
    return errors;
}
export default reduxForm({
    validate,
    form: 'NewCategoryForm'
})(
    connect(null, { createCategory })(NewThread)
);