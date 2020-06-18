import React, {useEffect} from "react";
import useStyles from './style'
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

function callTrad(props) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: props.text,
            langCible: props.langCible,
        }),

    };
    fetch(`http://localhost:9000/traducteur`, requestOptions)
        .then(response => {
            response.json()
                .then(data => {
                    props.setTraduction(data.trad);
                })
        })
}

function TraductorMain() {
    const classes = useStyles();
    const [traduction, setTraduction] = React.useState("");
    const [textWanted, setTextWanted] = React.useState("")
    const [lang, setLang] = React.useState("")


    return (
        <Paper className={classes.container}>


            <Grid container spacing={3}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    a
                </Grid>
                <Grid item xs={6} className={classes.textWanted}>
                    <InputBase
                        multiline
                        className={classes.textField}
                        defaultValue=""
                        inputProps={{'aria-label': 'naked'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    a
                </Grid>

            </Grid>
        </Paper>
    )
}

export default TraductorMain;