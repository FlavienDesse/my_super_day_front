import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
require('dotenv').config()



const googleKey = process.env.GOOGLE_KEY

const mapStyles = {
    width: '50%',
    height: '50%'
};

function MapContainer(props)  {
        return (


            <Map
                n
                visible={props.data.visible}
                google={props.google}
                zoom={props.zoom}
                style={mapStyles}
                center={{ lat: props.data.latitudeDestination, lng: props.data.longitudeDestination}}
            >

            </Map>

        );

}

export default GoogleApiWrapper({
    apiKey: googleKey
})(MapContainer)