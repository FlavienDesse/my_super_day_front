import {makeStyles} from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import React from "react";


const useStyles = makeStyles((theme) => ({
    table: {


        [theme.breakpoints.down('md')]: {
            tableLayout: 'fixed',
            width: '1250px !important',
        },


    },
    tableContainer: {
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
    },
    tabBody: {

        '& > :nth-child(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },


    tableCellTemperature: {
        whiteSpace: 'nowrap',
        padding: '0px !important',

    },
    container: {
        padding: '10px 10px 10px 10px',
    },
    title: {
        overflow: 'hidden',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
    },
}));

export default useStyles;





