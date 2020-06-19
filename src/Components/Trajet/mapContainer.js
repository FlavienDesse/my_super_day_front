import React, { useEffect} from "react";

import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer,
    Marker,

} from "react-google-maps";


export const Map = withScriptjs( (props)=>{

    const [direction, setDirection] = React.useState([]);
    const google = window.google;
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: props.latitudeOrigin, lng:  props.longitudeOrigin };
    const destination = { lat: props.latitudeDestination, lng:  props.longitudeDestination};

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 46.227638, lng: 2.213749}}



        >

            <DirectionsRenderer
                directions={direction}

            />
        </GoogleMap>
    ));



    useEffect(() => {
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,

            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirection(result)
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    },[]);

    return (
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: "800px" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />



    );

})