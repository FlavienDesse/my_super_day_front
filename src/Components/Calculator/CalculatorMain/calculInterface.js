import React, {useRef} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const defaultTheme = createMuiTheme();


export default function CalculInterface(props) {

    const classes = props.classes;
    const [valueClicked, setValueClicked] = React.useState("");
    const [result, setResult] = React.useState("");
    const [posCursorInput, setPosCursorInput] = React.useState(-1);
    const [windowDimensions, setWindowDimensions] = React.useState(window.screen.width);

    window.addEventListener('resize', () => {

        setWindowDimensions(window.screen.width)
    });

    let refTextField = useRef();
    let parserVar = props.parserVar

    function changeValueInput() {

        refTextField.current.value = result
    }

    React.useEffect(() => {


        if (posCursorInput !== -1) {
            setCaretPosition(posCursorInput);

        }
        changeValueInput();


    });


    function setCaretPosition(caretPos) {
        var elem = refTextField.current;

        if (elem != null) {
            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            } else {
                if (elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                } else
                    elem.focus();
            }
        }
    }

    function keyPressTextArea(e) {
        setPosCursorInput(-1);
        const key = e.key;
        let res = result;
        if (res === "Erreur") {
            res = "";
        }
        if (key === "Backspace") {

            let posStart = refTextField.current.selectionStart;
            let posEnd = refTextField.current.selectionEnd;
            if (posEnd === posStart) {
                if (posEnd !== 0) {
                    res = result.slice(0, posStart - 1) + result.slice(posStart, refTextField.current.value.length);
                    setResult(res);
                    res = valueClicked.slice(0, posStart - 1) + valueClicked.slice(posStart, refTextField.current.value.length);
                    setValueClicked(res);
                }
            } else {
                res = result.slice(0, posStart) + result.slice(posEnd, refTextField.current.value.length);
                setResult(res);
                res = valueClicked.slice(0, posStart) + valueClicked.slice(posEnd, refTextField.current.value.length);
                setValueClicked(res);
            }

            setPosCursorInput(posStart - 1);


        } else if (key === "Enter") {
            Compute();
        } else if (/^[a-zA-Z0-9]$/.test(key) || /[+-/%*^.()]/.test(key)) {

            setResult(res + key);
            setValueClicked(res + key);
        }


    }

    function Compute() {

        try {

            let res = parserVar.evaluate(valueClicked);

            setResult(res.toString());
            setValueClicked(res.toString());

        } catch (e) {


            setResult("Erreur")
            setValueClicked("")


        }

    }

    function clickButton(value) {
        let res = result;
        if (res === "Erreur") {
            res = "";
        }
        setResult(res + value);
        setValueClicked(valueClicked + value);


    }

    function clickButtonSpecial(value, specialRender) {
        let res = result;
        if (res === "Erreur") {
            res = "";
        }
        setResult(res + value);
        setValueClicked(valueClicked + specialRender);

    }

    if (windowDimensions > defaultTheme.breakpoints.values.md) {
        return (
            <Grid container spacing={1} alignItems="flex-end">


                <Grid item xs={12}>

                    <TextField id="outlined-basic" inputRef={refTextField} onChange={() => changeValueInput()}
                               onKeyDown={(e) => keyPressTextArea(e)} variant="outlined"
                               inputProps={{style: {textAlign: "right"}}}
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
                        clickButtonSpecial(e.target.innerText, "pi")
                    }}>
                        &pi;
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        +
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained"
                            className={classes.button}
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
                        e
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        cos(
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
                        -
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButtonSpecial(e.target.innerText,"log(")
                    }}>
                        ln(
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        sin(
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        1
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
                        *
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        i
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        tan(
                    </Button>
                </Grid>
                <Grid item xs={2}>


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
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        ^
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        im(
                    </Button>
                </Grid>

                <Grid item xs={6}>

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
                        re(
                    </Button>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color={"primary"} className={classes.button} onClick={() => Compute()}>
                        Calcul
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color={"primary"} className={classes.button} onClick={() => {
                        props.setIsCalcul(false)
                    }}>
                        Graphique
                    </Button>
                </Grid>


            </Grid>
        )
    } else {
        return (
            <Grid container spacing={1} alignItems="flex-end">


                <Grid item xs={12}>

                    <TextField id="outlined-basic" inputRef={refTextField} onChange={() => changeValueInput()}
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
                <Grid item xs={6}>
                    <Button color="secondary" startIcon={<DeleteIcon/>} variant="contained"
                            className={[classes.button]}
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
                        +
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
                        -
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
                        /
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
                        clickButton(e.target.innerText)
                    }}>
                        0
                    </Button>
                </Grid>
                <Grid item xs={3}>

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
                        clickButtonSpecial(e.target.innerText, "pi")
                    }}>
                        &pi;
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        ln
                    </Button>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        %
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        tan(
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        cos(
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        sin(
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        ^
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        re(
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        im(
                    </Button>
                </Grid>

                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        i
                    </Button>
                </Grid>

                <Grid item xs={3}>
                    <Button className={classes.button} onClick={(e) => {
                        clickButton(e.target.innerText)
                    }}>
                        e
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color={"primary"} className={classes.button} onClick={() => Compute()}>
                        Calcul
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color={"primary"} className={classes.button} onClick={() => {
                        props.setIsCalcul(false)
                    }}>
                        Graphique
                    </Button>
                </Grid>


            </Grid>
        );
    }


}