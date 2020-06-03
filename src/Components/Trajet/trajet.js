import React from 'react';
import useStyles from "./style";
import GoogleMap from "./mapContainer";

export default function Trajet() {

    const classes = useStyles();
    const [currentLocation, getCurrentLocation] = React.useState("");
    const [userAddress, setUserAddress] = React.useState("21 Allee Robespierre, 59150 Wattrelos, France");
    const [workAddress, setWorkAddress] = React.useState("41 Boulevard Vauban, 59000 Lille, France");
    const [currentLongitude, setCurrentLongitude] = React.useState("");
    const [currentLatitude, setCurrentLatitude] = React.useState("");


    function marchePls() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:9000/testapi?address=${userAddress}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    marchePls();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
        } else {
            alert("Probleme avec la geolocalisation");
        }
    }

    function getCoordinates(position) {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
    }

    function handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
        }
    }

    return (
        <div>
            <h1>
                Votre trajet Domicile-travail
            </h1>
            <h4>Location</h4>
            <p>{getLocation()}
                Latitude : {currentLatitude} </p>
            <p>Longitude : {currentLongitude}</p>
            <h4>Google maps reverse geocoding</h4>
            <p>Address : {userAddress}</p>
            <GoogleMap data={{
                currentLatitude,
                currentLongitude,
                userAddress,
                workAddress,
            }}/>


        </div>
    );
}