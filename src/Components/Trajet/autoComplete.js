import React from 'react';
import useStyles from "./style";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {FormDialog} from "./dialogsForm";

export  function AutocompleteFunction(props) {

    const classes = useStyles();


    const [selectPredictionsOrigin, setSelectPredictionsOrigin] = React.useState([])
    const [selectPredictionsDestination, setSelectPredictionsDestination] = React.useState([])


    function callPredictions(value, setSelectPredictions) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: encodeURI(value)
            }),

        };
        fetch(`http://localhost:9000/mysuperday/api/users/getAutocomplete`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        setSelectPredictions(data.predictions)
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

                        onChange={(e, newValue) => {props.setLastChoiceOrigin(newValue)}}
                        options={selectPredictionsOrigin}
                        value={props.lastChoiceOrigin}
                        className={classes.autoComplete}
                        getOptionLabel={(selectPredictionsOrigin) => selectPredictionsOrigin}
                        renderInput={(params) =>
                            <TextField className={classes.textField}
                                       onChange={(e) => callPredictions(e.target.value, setSelectPredictionsOrigin)} {...params}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       label={"Choississez un point de départ"}



                            />
                        }
                    />





            </Grid>
            <Grid item xs={2}>
                <FormDialog></FormDialog>
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
                <FormDialog></FormDialog>
            </Grid>
        </Grid>




    )
}