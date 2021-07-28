import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: theme.spacing(2),
        backgroundColor: "#1976d2",
    }
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.header} >
            <Typography variant="h6">Formik with Material-UI</Typography>
        </AppBar>
    )
}