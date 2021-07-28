import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

export default function Textfield({ name, ...props }) {

    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...props,
        fullWidth: true,
        variant: "outlined",
        size: "small",
    }
    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField {...configTextfield} />
    )
}