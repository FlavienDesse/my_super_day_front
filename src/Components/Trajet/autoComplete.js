import React, {useEffect} from 'react';
import useStyles from "./style";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {FormDialog} from "./dialogsForm";
import {authHeader} from "../../Controller/CheckConnected";
import StarIcon from '@material-ui/icons/Star';


export function AutocompleteFunction(props) {

    const classes = useStyles();

    const [inDb,setInDb] =  React.useState([]);
    const [selectPredictionsOrigin, setSelectPredictionsOrigin] = React.useState([])
    const [selectPredictionsDestination, setSelectPredictionsDestination] = React.useState([])
   



    function addPredictionFromDb(value){
        let res = inDb.slice()
        res.push(value)
        setInDb(res)
        setSelectPredictionsOrigin(res);
        setSelectPredictionsDestination(res);

    }

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_users: JSON.parse(window.localStorage.getItem('users')).id,
            }),

        };
        fetch(`${window.url}/mysuperday/api/trajet/getFav`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        let res = []
                        for (const elem of data) {
                            res.push(elem.title)
                        }
                        setInDb(res)
                        setSelectPredictionsOrigin(selectPredictionsOrigin.concat(res));
                        setSelectPredictionsDestination(selectPredictionsDestination.concat(res));
                    })
            })
    },[]);


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
                    renderOption={(option) => {
                        let isInFb = false;
                        for (const elem of inDb){

                            if(elem === option){
                                isInFb=true;
                                break;
                            }
                        }

                        return (
                            <Grid container   justify="flex-start" alignItems="center">


                                   {
                                       isInFb ?
                                           <Grid item>
                                               <StarIcon style={{color:'yellow' , stroke:'black'}}> </StarIcon>  {option}
                                           </Grid>

                                           :
                                       option
                                   }
                                </Grid>


                        );
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <FormDialog
                    addPredictionFromDb={addPredictionFromDb} lastChoice={props.lastChoiceOrigin}
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
                    renderOption={(option) => {
                        let isInFb = false;
                        for (const elem of inDb){

                            if(elem === option){
                                isInFb=true;
                                break;
                            }
                        }

                        return (
                            <Grid container   justify="flex-start" alignItems="center">


                                {
                                    isInFb ?
                                        <Grid item>
                                            <StarIcon style={{color:'yellow' , stroke:'black'}}> </StarIcon>  {option}
                                        </Grid>

                                        :
                                        option
                                }
                            </Grid>


                        );
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <FormDialog
                    addPredictionFromDb={addPredictionFromDb}   lastChoice={props.lastChoiceDestination}
                >
                </FormDialog>
            </Grid>
        </Grid>


    )
}