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
            new Share("Kerlink", 10, 20, -2, 15)

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
                            <Paper className={classes.paper}>
                                <Grid item xs={5} className={classes.data}>
                                    <p className={classes.shareTitle}>
                                        {item.name}
                                    </p>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <p>
                                                <p className={classes.infoTitle}>Prix actuel : </p>
                                                <p className={classes.infoNumber}>{item.lastPrice}</p>
                                            </p >
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>
                                                <p className={classes.infoTitle}>Variation du jour : </p>
                                                <p className={classes.infoNumber}>{item.dayPercentChange > 0 ?
                                                    <span className={classes.green}> {item.dayPercentChange} %</span> :
                                                    <span className={classes.red}>{item.dayPercentChange} %</span>}</p>
                                            </p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>
                                                <p className={classes.infoTitle}>Prix + haut : </p>
                                                <p className={classes.infoNumber}>{item.highPrice}</p>
                                            </p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p>
                                                <p className={classes.infoTitle}>Prix + bas : </p>
                                                <p className={classes.infoNumber}>{item.lowPrice}</p>
                                            </p>
                                        </Grid>
                                    </Grid>
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