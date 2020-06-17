import {makeStyles} from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import React from "react";


const useStyles = makeStyles((theme) => ({
    paper:{
        marginBottom:'10px',
    },
    table: {
        [theme.breakpoints.down('lg')]: {
            tableLayout: 'fixed',
            width: '1250px !important',
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





