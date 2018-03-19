import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createThread } from "../actions";
const data = {
    cat_id: 5
};


class NewThread extends Component {
    renderField(field) {
        const { meta } = field;
        const className = `form-group ${ meta.touched && meta.error ? 'has-danger' : ''} px-2`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-danger">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createThread(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        console.log(this.props.initialValues);
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Thread title"
                    name="name"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Thread description"
                    name="description"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Thread author"
                    name="author"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Category"
                    name="cat_id"
                    type="text"
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
    if(!values.name) {
        errors.name = "Enter category name";
    }
    if(!values.description) {
        errors.description = "Enter description pliz";
    }
    if(!values.author) {
        errors.author = "Enter description pliz";
    }
    if(!values.cat_id) {
        errors.cat_id = "Enter description pliz";
    }
    return errors;
}

function mapStateToProps(state, ownProps) {
    console.log(data);
    return {
        initialValues: data
    }
}


export default reduxForm({
    validate,
    enableReinitialize: true,
    form: 'NewThreadForm'
})(
    connect(mapStateToProps, { createThread })(NewThread)
);