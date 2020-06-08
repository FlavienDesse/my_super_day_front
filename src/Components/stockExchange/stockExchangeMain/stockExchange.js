import React from "react";
import useStyles from "./style";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Grid from '@material-ui/core/Grid';


export default function StockExchange() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <Grid container spacing={5} className={classes.gridItem}>
                    <Grid item xs={6}>
                        <Button variant="contained"
                                style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '40px'}} color="inherit"
                                className={classes.button}>
                            CAC 40
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={5} className={classes.gridItem}>

                            <Grid item xs={6}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>

                        <Grid container spacing={5} className={classes.gridItem}>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained"
                                        style={{fontFamily: "Trebuchet MS", color: "blue", fontSize: '20px'}}
                                        color="inherit" className={classes.button}>
                                    CAC 40
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}