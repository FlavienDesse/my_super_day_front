import React from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import CalculInterface from "./calculInterface";
import Paper from "@material-ui/core/Paper";

export default function Calculator() {
    const classes = useStyles();






    const [isCalcul, setIsCalcul] = React.useState(true);
    return (

        <Grid container spacing={1}  >
            <Grid item xs={2}>


            </Grid>
            <Grid item xs={8}>
                <Paper elevation={3} className={classes.container}>
                    {isCalcul ? <CalculInterface setIsCalcul={setIsCalcul} classes={classes}/> : "lol"}
                </Paper>
            </Grid>
            <Grid item xs={2}>

            </Grid>



        </Grid>


);
}