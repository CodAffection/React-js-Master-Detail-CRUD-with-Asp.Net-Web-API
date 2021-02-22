import React from 'react'
import { Table as MuiTable, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    table: {
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
        '& .MuiTableCell-root': {
            border: 'none'
        }
    },
}));

export default function Table(props) {

    const classes = useStyles();

    return (
        <MuiTable className={classes.table}>
            {props.children}
        </MuiTable>
    )
}