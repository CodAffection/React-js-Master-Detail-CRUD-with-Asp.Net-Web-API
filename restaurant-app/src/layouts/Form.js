import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))

export default function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;


    return (
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {children}
        </form>
    )
}
