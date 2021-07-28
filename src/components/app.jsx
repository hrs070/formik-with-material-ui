import React from 'react';
import Header from "./header.jsx";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import countries from "./data/countries.json";

import Textfield from "./FormElements/textfield.jsx";
import Selectfield from './FormElements/selectfield.jsx';
import DateTimePicker from './FormElements/datetimepicker.jsx';
import CheckBox from "./FormElements/checkbox.jsx";
import ButtonElement from "./FormElements/button.jsx";

// Material-ui custom CSS
const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8)
    }
}))

// Object to contain initial values of the form
const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    arrivalDate: "",
    departureDate: "",
    termsofService: false,
};

// Yup Validation Schema
const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required("Required"),
    lastName: Yup.string()
        .required("Required"),
    email: Yup.string()
        .email("Invalid Email")
        .required("Required"),
    phone: Yup.number()
        .required("Required")
        .positive()
        .integer()
        .typeError("Please enter a valid phone number"),
    addressLine1: Yup.string()
        .required("Required"),
    addressLine2: Yup.string(),
    city: Yup.string()
        .required("Required"),
    state: Yup.string()
        .required("Required"),
    zipCode: Yup.number()
        .required("Required"),
    arrivalDate: Yup.date()
        .required("Required"),
    departureDate: Yup.date()
        .required("Required"),
    termsofService: Yup.boolean()
        .oneOf([true], "Please accept the terms")
        .required("Please accept the terms")
})


export default function App() {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div className={classes.formWrapper}>

                        <Formik initialValues={{ ...INITIAL_FORM_STATE }} validationSchema={FORM_VALIDATION} onSubmit={(values) => { console.log(values) }}>
                            <Form>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Typography>Your Details</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="firstName" label="First Name" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="lastName" label="Last Name" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="email" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="phone" label="Phone" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Textfield name="addressLine1" label="Address Line 1" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Textfield name="addressLine2" label="Address Line 2" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="city" label="City" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="state" label="State" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Selectfield name="country" label="Country" options={countries} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Textfield name="zipCode" label="Zip Code" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Booking Details</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker name="arrivalDate" label="Arrival Date" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker name="departureDate" label="Departue Date" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CheckBox name="termsOfService" legend="Terms Of Service" label="I Agree" />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <ButtonElement>Submit Form</ButtonElement>
                                    </Grid>

                                </Grid>
                            </Form>
                        </Formik>

                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}