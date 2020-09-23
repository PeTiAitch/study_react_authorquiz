import Form from "@rjsf/core";
import React from 'react';

// const { default: Form } = JSONSchemaForm;

const schema = {
    "title": "Identity",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name",
            "minLength": 1,
            "maxLength": 6
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "age": {
            "type": "number",
            "title": "Age"
        }
    }
};

export const Test = () => {
    return (
        <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
    )
}

// ReactDOM.render((
//     <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
// ), document.getElementById("root"));

