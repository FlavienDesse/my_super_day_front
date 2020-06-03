import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ModalAddGraph from "./modalAddGraph";
import useStyles from "./style";
export default function GraphicInterface(props){


    const classes = props.classes;

    return(
        <Grid container spacing={1} >
            <Grid item xs={12}>
               <ModalAddGraph classes={classes}>

               </ModalAddGraph>
            </Grid>
        </Grid>
    )
}