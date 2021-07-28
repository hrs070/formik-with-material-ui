import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { useField, useFormikContext } from 'formik';


export default function CheckBox({ name, label, legend, ...props }) {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    function handleChange(e) {
        const { checked } = e.target;
        setFieldValue(name, checked)
    }

    const configCheckbox = {
        ...field,
        onchange: handleChange
    }
    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }

    return (
        <FormControl>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...configCheckbox} />} label={label} />
            </FormGroup>
        </FormControl>
    )
}