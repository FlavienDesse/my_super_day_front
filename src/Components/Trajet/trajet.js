import React from 'react';
import useStyles from "./style";
import {Map} from './mapContainer';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {AutocompleteFunction} from "./autoComplete"
import {authHeader} from "../../Controller/CheckConnected";


export  function Trajet() {


    const classes = useStyles();
    const googleKey = process.env.REACT_APP_GOOGLE_KEY.toString();
    const googleMapURL = "https://maps.googleapis.com/maps/api/js?key="

    const [posOrigin, setPosOrigin] = React.useState({});
    const [posDestination, setPosDestination] = React.useState({
        latitude: 46.227638,
        longitude: 2.213749,
    });

    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [durationText, setDurationText] = React.useState("");
    const [distanceText, setDistanceText] = React.useState("");

    const [lastChoiceDestination, setLastChoiceDestination] = React.useState("");
    const [lastChoiceOrigin, setLastChoiceOrigin] = React.useState("");




    function MapRender() {

        return (<Map

            latitudeOrigin={posOrigin.latitude}
            longitudeOrigin={posOrigin.longitude}
            latitudeDestination={posDestination.latitude}
            longitudeDestination={posDestination.longitude}


            googleMapURL={googleMapURL + googleKey}
            loadingElement={<div style={{height: `100%`}}/>}
        />)
    }


    function getDistance() {
        let origin =  lastChoiceOrigin;
        let destination = lastChoiceDestination;

        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: JSON.parse(window.localStorage.getItem('users')).id,

                origin: encodeURI(origin),
                destination: encodeURI(destination),
            })


        };
        fetch(`${window.url}/mysuperday/api/trajet/infotrajet`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {

                        setOrigin(lastChoiceOrigin);
                        setDestination(lastChoiceDestination);
                        setDistanceText(data.itinerary.distance.text);
                        setDurationText(data.itinerary.duration.text);
                        getCoordinate(destination, setPosDestination);
                        getCoordinate(origin, setPosOrigin);


                    })
            })
            .catch(function (e) {

            })


    }


    function getCoordinate(address, setPos) {
        // Simple POST request with a JSON body using fetch
        console.log("ici")
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: JSON.parse(window.localStorage.getItem('users')).id,
                address:encodeURI(address)
            })
        };
        fetch(`${window.url}/mysuperday/api/trajet/coordinate`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPos({
                    latitude: data.latitude,
                    longitude: data.longitude,
                })

            })
            .catch(function (e) {

            });

    }


    return (
        //<IconButton aria-label="save">
        //  <SaveIcon onClick={() => handleOpen()}  style={{fontSize: 29}} color={"primary"}/>
        // </IconButton>

        <Grid container className={classes.container}
              justify="center"
              alignItems="center">

            <AutocompleteFunction
                lastChoiceDestination={lastChoiceDestination}
                lastChoiceOrigin={lastChoiceOrigin}
                setLastChoiceDestination={setLastChoiceDestination}
                setLastChoiceOrigin={setLastChoiceOrigin}

            />

            <Grid item xs={6}>
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


            <Grid container className={classes.container} justify="center"
                  alignItems="center">
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Grid item xs={12}>
                            Origine : {origin}
                        </Grid>
                        <Grid item xs={12}>
                            Desination : {destination}
                        </Grid>
                        <Grid item xs={12}>
                            Temps de trajet : {durationText}
                        </Grid>
                        <Grid item xs={12} >
                            Distance :{distanceText}
                        </Grid>
                    </Paper>

                    <Grid item xs={12} className={classes.map}>

                        <MapRender>

                        </MapRender>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}