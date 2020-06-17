import {makeStyles} from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import React from "react";


const useStyles = makeStyles((theme) => ({
    tableCellTemperature:{
        whiteSpace: 'nowrap',
        padding:'0px !important',
       
    },
    container:{
        padding:'10px 10px 10px 10px',
    },
    title:{
      fontFamily:'Helvetica Neue',
        fontWeight:'bold',
    },
}));

export default useStyles;





