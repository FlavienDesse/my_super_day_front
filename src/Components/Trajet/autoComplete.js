import React from 'react';
import useStyles from "./style";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {FormDialog} from "./dialogsForm";

export function AutocompleteFunction(props) {

    const classes = useStyles();


    const [selectPredictionsOrigin, setSelectPredictionsOrigin] = React.useState(["Mon domicile"])
    const [selectPredictionsDestination, setSelectPredictionsDestination] = React.useState(["Mon domicile"])


    function callPredictions(value, setSelectPredictions) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: encodeURI(value)
            }),

        };
        fetch(`${window.url}/mysuperday/api/users/getAutocomplete`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        let res = selectPredictionsOrigin.slice()

                        setSelectPredictions(res.concat(data.predictions))
                    })
            })
    };


    return (
        <Grid container className={classes.container}
              justify="center"
              alignItems="center"
              spacing={1}
        >
            <Grid item xs={4} className={classes.autoCompleteGrid}>
                <Autocomplete
                    onChange={(e, newValue) => props.setLastChoiceOrigin(newValue)}
                    options={selectPredictionsOrigin}
                    value={props.lastChoiceOrigin}
                    getOptionLabel={(selectPredictionsOrigin) => selectPredictionsOrigin}
                    filterSelectedOptions
                    renderInput={(params) =>
                        <TextField

                            onChange={(e) => callPredictions(e.target.value, setSelectPredictionsOrigin)} {...params}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label={"Choissisez un point de départ"}

                        />
                    }
                />
            </Grid>
            <Grid item xs={2}>
                <FormDialog

                    lastChoice={selectPredictionsOrigin}
                />
            </Grid>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={4} className={classes.autoCompleteGrid}>
                <Autocomplete
                    onChange={(e, newValue) => props.setLastChoiceDestination(newValue)}
                    options={selectPredictionsDestination}
                    value={props.lastChoiceDestination}
                    getOptionLabel={(selectPredictionsDestination) => selectPredictionsDestination}
                    filterSelectedOptions
                    renderInput={(params) =>
                        <TextField

                            onChange={(e) => callPredictions(e.target.value, setSelectPredictionsDestination)} {...params}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label={"Choissisez une destination"}

                        />
                    }
                />
            </Grid>
            <Grid item xs={2}>
                <FormDialog
                    lastChoice={selectPredictionsDestination}
                >
                </FormDialog>
            </Grid>
        </Grid>


    )
}