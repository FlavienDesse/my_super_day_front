import React from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import jexl from 'jexl';
import DeleteIcon from '@material-ui/icons/Delete';
//-?[0-9]([-\/\+%\*]-?[0-9])*
export default function Calculator() {
    const classes = useStyles();

    const [valueClicked, setValueClicked] = React.useState("");
    return (
        <div className={classes.container}>
            <Grid container spacing={1} onClick={(e) => {
                setValueClicked(valueClicked + e.target.innerText)

            }

            }>
                <Grid item xs={12} onClick={(e) => {
                    e.stopPropagation();
                    setValueClicked("")
                }
                }
                >
                    {valueClicked}
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        (
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        )
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        %
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained" className={[classes.button]}
                            onClick={(e) => {
                                e.stopPropagation();
                                setValueClicked("")
                            }
                            }>
                        AC
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        7
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        8
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        9
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        7
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        4
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        5
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        6
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        *
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        1
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        2
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        3
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        -
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        0
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        .
                    </Button>
                </Grid>
                <Grid item xs={3} onClick={(e) => {
                    e.stopPropagation();
                    // eslint-disable-next-line no-eval
                    var res = jexl.eval(valueClicked)

                    if(res !== undefined){

                        setValueClicked(res);
                    }
                    else {
                        setValueClicked("Erreur");
                    }


                }
                }>
                    <Button className={classes.button}>
                        =
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}>
                        +
                    </Button>
                </Grid>


            </Grid>
        </div>
    );
}