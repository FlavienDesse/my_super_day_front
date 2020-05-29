import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import {evaluate} from "mathjs";

export default function CalculInterface(props) {



    const classes = props.classes;
    const [valueClicked, setValueClicked] = React.useState("");
    const [result, setResult] = React.useState("");

    function keyPressTextArea(e) {

        const key = e.key;
        const keyInDec = key.charCodeAt()
        if (!isNaN(key) || keyInDec === 37 || (keyInDec >= 40 && (keyInDec <= 43 || keyInDec === 46 || keyInDec === 47))) {
            setResult(valueClicked + key);
            setValueClicked(valueClicked + key);
        } else if (keyInDec === 66) {
            setResult(result.slice(0, -1));
            setValueClicked(valueClicked.slice(0, -1));
        } else if (keyInDec === 69) {
            Compute()
        }


    }

    function Compute() {
        try {
            var res = evaluate(valueClicked);
            setResult(res)
            setValueClicked(res)
        } catch (e) {
            setResult("Erreur")
            setValueClicked("")
        }
    }

    function clickButton(value) {
        setResult(valueClicked + value);
        setValueClicked(valueClicked + value);

    }

    function clickButtonSpecial(value, specialRender) {
        setResult(valueClicked + value);
        setValueClicked(valueClicked + specialRender);

    }


    return(
        <Grid container justify="flex-end" spacing={1} alignItems="flex-end">


            <Grid item xs={12}>

                <TextField id="outlined-basic" onKeyDown={(e) => keyPressTextArea(e)} variant="outlined"
                           inputProps={{style: {textAlign: "right"}}} value={result}
                           className={classes.result}>

                </TextField>
            </Grid>

            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    (
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    )
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    %
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    *
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained"
                        className={[classes.button]}
                        onClick={(e) => {
                            setResult("");
                            setValueClicked("")
                        }}>
                    AC
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    7
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    8
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    9
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    /
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    4
                </Button>
            </Grid>

            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    5
                </Button>
            </Grid>

            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    6
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    2
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    2
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    3
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    -
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    0
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    .
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={(e) => {


                    Compute()


                }


                }>
                    =
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    +
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    cos
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    sin
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    ln
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    10^
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    e
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    sqrt
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    tan
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButtonSpecial(e.target.innerText, "pi")
                }}>
                    &pi;
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button className={classes.button} onClick={(e) => {
                    clickButton(e.target.innerText)
                }}>
                    ^
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained"  color={"primary"} className={classes.button} disabled>
                    Calcul
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color={"primary"} className={classes.button} onClick={()=> {props.setIsCalcul(false)}}>
                    Graphique
                </Button>
            </Grid>


        </Grid>
    )
}