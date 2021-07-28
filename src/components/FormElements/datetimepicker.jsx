import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

export default function DateTimePicker({ name, ...props }) {
    const [field, meta] = useField(name);

    const configValues = {
        ...field,
        ...props,
        type: "date",
        variant: "outlined",
        fullWidth: true,
        InputLabelProps: {
            shrink: true
        },
        size: "small"
    }
    if (meta && meta.touched && meta.error) {
        configValues.error = true;
        configValues.helperText = meta.error
    }

    return (
        <TextField {...configValues} />
    )
}