import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        }
    }
}))

export default function Button(props) {

    const { children, color, variant, onClick, className, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            className={classes.root + ' ' + (className || '')}
            variant={variant || "contained"}
            color={color || "default"}
            onClick={onClick}
            {...other}>
            {children}
        </MuiButton>
    )
}
