import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useFormikContext, useField } from 'formik';

export default function Selectfield({ name, options, ...props }) {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    function handleChange(e) {
        const { value } = e.target;
        setFieldValue(name, value);
    }

    const configSelect = {
        ...field,
        ...props,
        select: true,
        variant: "outlined",
        fullWidth: true,
        onChange: handleChange,
        size: "small"
    }
    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
            {Object.keys(options).map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>

    )
}