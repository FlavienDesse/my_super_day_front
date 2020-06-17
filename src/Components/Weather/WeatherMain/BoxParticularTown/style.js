import {makeStyles} from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import React from "react";


const useStyles = makeStyles((theme) => ({
    paper:{
        marginBottom:'10px',
    },
    day:{
      margin:'0',
    },
    table: {
        [theme.breakpoints.down('lg')]: {
            tableLayout: 'fixed',
            width: '1250px !important',
        },
        '&  td:nth-child(n):not(:last-child) ':{
            borderRight:'2px solid '+'rgba(200,200,200)',
        },
        '&  th:nth-child(n):not(:last-child) ':{
            borderRight:'2px solid '+'rgba(200,200,200)',

        },
        '&  th:nth-child(n):not(:first-child) ':{
            borderBottom: 'solid 2px'+'rgba(200,200,200)',
        },



    },

    red:{
      color:'red',
    },
    tabBody: {

        '& > :nth-child(odd)': {
            backgroundColor:'rgba(227,227,227)',
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





