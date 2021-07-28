import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

export default function ButtonElement({ children, ...props }) {

    const { submitForm } = useFormikContext();

    function handleSubmit() {
        submitForm();
    }
    const configButton = {
        variant: "contained",
        color: "primary",
        fullwidth: true,
        onClick: handleSubmit,
    }

    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
}