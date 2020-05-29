import React from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import jexl from 'jexl';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

export default function CalculatorWidget() {
    const classes = useStyles();

    function clickButton(value) {
        setResult(valueClicked + value);
        setValueClicked(valueClicked + value);

    }

    function keyPressTextArea(key) {


        const keyInDec = key.charCodeAt()
        if (!isNaN(key) || keyInDec === 37 || (keyInDec >= 40 && (keyInDec <= 43 || keyInDec === 46 || keyInDec === 47))) {
            setResult(valueClicked + key);
            setValueClicked(valueClicked + key);
        } else if (keyInDec === 66) {
            setResult(result.slice(0, -1));
            setValueClicked(valueClicked.slice(0, -1));
        } else if (keyInDec === 69) {

            evaluate(valueClicked).then((res) => {
                setResult(res)
                setValueClicked(res)
            }, (err) => {
                setResult("Erreur");
                setValueClicked("")
            });


        }
    }


const [valueClicked, setValueClicked] = React.useState("");
const [result, setResult] = React.useState("");
return (
    <Paper elevation={3} className={classes.container}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField id="outlined-basic" onKeyDown={(e) => keyPressTextArea(e)} variant="outlined"
                           inputProps={{style: {textAlign: "right"}}} value={result} className={classes.result}>

                </TextField>
            </Grid>

            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    (
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    )
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    %
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained" className={[classes.button]}
                        onClick={(e) => {
                            setResult("");
                            setValueClicked("")
                        }}>
                    AC
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    7
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    8
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    9
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    /
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    4
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    5
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    6
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    *
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    1
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    2
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    3
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    -
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    0
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    .
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {


                    evaluate(valueClicked).then((res) => {
                        setResult(res + "")
                        setValueClicked(res + "")
                    }, (err) => {
                        setResult("Erreur");
                        setValueClicked("")
                    });


                }



                }>
                =
            </Button>
        </Grid>
        <Grid item xs={3}>
            <Button className={classes.button} onClick={(e) => {
                clickButton(e.target.innerText)
            }}>
                +
            </Button>
        </Grid>


    </Grid>

    < /Paper>

);
}