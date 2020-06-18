import React from 'react';
import useStyles from "./style";
import GoogleMap from "./mapContainer";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



export default function Trajet() {

    const classes = useStyles();

    const [longitudeDestination, setLongitudeDestination] = React.useState("");
    const [latitudeDestination, setLatitudeDestination] = React.useState("");

    const [longitudeOrigin, setLongitudeOrigin] = React.useState("");
    const [latitudeOrigin, setLatitudeOrigin] = React.useState("");

    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [distanceValue, setDistanceValue] = React.useState("");
    const [durationValue, setDurationValue] = React.useState("");
    const [durationText, setDurationText] = React.useState("");
    const [distanceText, setDistanceText] = React.useState("");
    const [visible, setVisible] = React.useState(false);


    const [selectPredictionsOrigin, setSelectPredictionsOrigin] = React.useState([])
    const [selectPredictionsDestination, setSelectPredictionsDestination] = React.useState([])
    const [lastChoicePredictionOrigin, setLastChoicePredictionOrigin] = React.useState("")
    const [lastChoicePredictionDestination, setLastChoicePredictionDestination] = React.useState("")



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

    function getDistance() {
        let origin = lastChoicePredictionOrigin;
        let destination = lastChoicePredictionDestination;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                origin: encodeURI(origin),
                destination: encodeURI(destination),
            })


        };
        fetch(encodeURI(`http://localhost:9000/mysuperday/api/trajet/infotrajet`), requestOptions)
            .then(response => {
                response.json()
                    .then(data => {

                        setOrigin(lastChoicePredictionOrigin);
                        setDestination(lastChoicePredictionDestination);
                        setDistanceValue(data.itinerary.distance.value);
                        setDistanceText(data.itinerary.distance.text);
                        setDurationValue(data.itinerary.duration.value);
                        setDurationText(data.itinerary.duration.text);
                        getCoordinate(destination, setLatitudeDestination, setLongitudeDestination);
                        setVisible(true);
                    })
            })
            .catch(function (e) {

            })
        setSelectPredictionsOrigin([])
        setSelectPredictionsDestination([])
        setLastChoicePredictionOrigin("")
        setLastChoicePredictionDestination("")


    }



    function getCoordinate(address, setLatitude, setLongitude) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        fetch(encodeURI(`https://bdoalex.com/mysuperday/api/trajet/coordinate?address=${address}`), requestOptions)
            .then(response => response.json())
            .then(data => {
                setLatitude(data.latitude);
                setLongitude(data.longitude);

            })
            .catch(function (e) {

            });

    }


    return (
        //<IconButton aria-label="save">
        //  <SaveIcon onClick={() => handleOpen()}  style={{fontSize: 29}} color={"primary"}/>
        // </IconButton>

        <Grid container className={classes.container}>
            <Grid item xs={3}>
                <Autocomplete
                    onChange={(e, newValue) => setLastChoicePredictionOrigin(newValue)}
                    options={selectPredictionsOrigin}
                    value={lastChoicePredictionOrigin}

                    getOptionLabel={(selectPredictionsOrigin) => selectPredictionsOrigin}
                    renderInput={(params) =>
                        <TextField
                            onChange={(e) => callPredictions(e.target.value, setSelectPredictionsOrigin)} {...params}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth

                        />
                    }
                />
                <Autocomplete
                    onChange={(e, newValue) => setLastChoicePredictionDestination(newValue)}
                    options={selectPredictionsDestination}
                    value={lastChoicePredictionDestination}
                    getOptionLabel={(selectPredictionsDestination) => selectPredictionsDestination}
                    filterSelectedOptions
                    renderInput={(params) =>
                        <TextField
                            onChange={(e) => callPredictions(e.target.value, setSelectPredictionsDestination)} {...params}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth

                        />
                    }
                />
                <Button

                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.calculButton}
                    onClick={getDistance}
                >
                    Calculer
                </Button>

            </Grid>
            <Grid container={classes.container}>
                <Grid item={3}>
                    <Paper elevation={3} >
                        <Grid item xs={12}>
                            Origin : {origin}
                        </Grid>
                        <Grid item xs={12}>
                            Desination : {destination}
                        </Grid>
                        <Grid item xs={12}>
                            Temps de trajet : {durationText}
                        </Grid>
                        <Grid item xs={12}>
                            Distance :{distanceText}
                        </Grid>
                    </Paper>

                    <Grid item={12}>
                        <GoogleMap data={{
                            latitudeDestination:latitudeDestination,
                            longitudeDestination:longitudeDestination,
                            visible:visible,
                        }}/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}