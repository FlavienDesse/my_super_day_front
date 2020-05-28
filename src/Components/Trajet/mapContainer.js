import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

function MapContainer(props)  {
        return (
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: props.data.currentLatitude, lng: props.data.currentLongitude}}
            >
                <Marker position={{ lat: 50.6342719, lng: 3.0487597}} />
            </Map>

        );

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDa_5CfpTTBeNY0PFremSA5i_1zqaGnEU'
})(MapContainer);