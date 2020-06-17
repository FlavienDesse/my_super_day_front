import React, {useRef} from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {evaluate} from 'mathjs'

export default function CalculatorWidget() {
    const classes = useStyles();
    const [posCursorInput,setPosCursorInput]= React.useState(-1);
    let refTextField = useRef();
    const [valueClicked, setValueClicked] = React.useState("");
    const [result, setResult] = React.useState("");
    function clickButton(value) {
        setResult(valueClicked + value);
        setValueClicked(valueClicked + value);

    }
    function setCaretPosition(caretPos) {
        var elem =  refTextField.current;

        if(elem != null) {
            if(elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            }
            else {
                if(elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                }
                else
                    elem.focus();
            }
        }
    }


    function keyPressTextArea(e) {
        setPosCursorInput(-1);
        const key = e.key;
        let res = result;
        if(res==="Erreur"){
            res="";
        }
        if (key === "Backspace") {

            let posStart = e.target.selectionStart;
            let posEnd = e.target.selectionEnd;
            if(posEnd===posStart){
                if(posEnd!==0){
                    res = result.slice(0, posStart-1 ) + result.slice(posStart,e.target.value.length);
                    setResult(res);
                    res = valueClicked.slice(0, posStart -1) + valueClicked.slice(posStart,e.target.value.length);
                    setValueClicked(res);
                }
            }
            else {
                res = result.slice(0, posStart ) + result.slice(posEnd,e.target.value.length);
                setResult(res);
                res = valueClicked.slice(0, posStart) + valueClicked.slice(posEnd,e.target.value.length);
                setValueClicked(res);
            }

            setPosCursorInput(posStart-1);


        } else if (key === "Enter") {
            try {

                let res = evaluate(valueClicked);

                setResult(res.toString());
                setValueClicked(res.toString());

            } catch (e) {


                setResult("Erreur")
                setValueClicked("")


            }
        } else if (/^[a-zA-Z0-9]$/.test(key) || /[+-/%*.^()]/.test(key)) {

            setResult(res + key);
            setValueClicked(res + key);
        }


    }
    function changeValueInput() {

        refTextField.current.value = result
    }
    React.useEffect(() => {


        if(posCursorInput!==-1){
            setCaretPosition(posCursorInput);

        }
        changeValueInput();


    });

return (
    <Paper elevation={3} className={classes.container}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField inputRef={refTextField} id="outlined-basic"  onChange={() => changeValueInput()}
                           onKeyDown={(e) => keyPressTextArea(e)} variant="outlined"
                           inputProps={{style: {textAlign: "right"}}}
                           className={classes.result}>

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
                <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained"
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


                    try {

                        let res = evaluate(valueClicked);

                        setResult(res.toString());
                        setValueClicked(res.toString());

                    } catch (e) {


                        setResult("Erreur")
                        setValueClicked("")


                    }


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