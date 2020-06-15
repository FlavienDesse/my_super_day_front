import React from "react";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Share from './share'
import {ComboBox, FloatingActionButtons} from "./functions";

export default function StockExchange() {
    const classes = useStyles();
    const [allShare, setAllShare] = React.useState([
            new Share("BNP", 10, 20, 5, 15),
            new Share("Mop", 10, 20, 5, 15)

        ]
    );
    return (
        <div className={classes.container}>
            <Grid container spacing={5} justify="center" alignItems="center">
                <Grid item xs={2.5}>
                    <ComboBox></ComboBox>

                </Grid>
                <Grid item xs={1}>
                    <FloatingActionButtons setAllShare={setAllShare}></FloatingActionButtons>
                </Grid>
            </Grid>
            <Grid container justify="center">
                {
                    allShare.map((item, i) =>
                        <Grid item xs={12}>
                            <Paper>
                                <Grid item xs={5}>
                                    <p className={classes.paragraphe}>
                                        {item.name}
                                    </p>
                                    <p className={classes.paragraphe}>
                                        Prix actuel : {item.lastPrice}
                                    </p>
                                    <p className={classes.paragraphe}>
                                        Prix + bas : {item.lowPrice}
                                    </p>
                                    <p className={classes.paragraphe}>
                                       {item.highPrice}
                                    </p>
                                    <p className={classes.paragraphe}>
                                       {item.dayPercentChange > 0? <span className={classes.green}> {item.dayPercentChange}</span> : <span className={classes.red}>{item.dayPercentChange} </span> }
                                    </p>
                                </Grid>
                                <Grid item xs={7}>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
}