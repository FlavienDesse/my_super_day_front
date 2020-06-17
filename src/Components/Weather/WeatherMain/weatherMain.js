import React, {useEffect, useRef, useState} from "react";
import France from "@svg-maps/france.regions";
import {SVGMap} from "react-svg-map";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import BoxParticularTown from "./BoxParticularTown/boxParticularTown";
import ModelWeather from "./Model/ModelWeather";



France.locations.push({
    name: "Paris",
    id: "ville paris",
    path: 'M305,150 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Lyon",
    id: "ville lyon",
    path: 'M370,350 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Bordeaux",
    id: "ville bordeaux",
    path: 'M170,370 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Brest",
    id: "ville brest",
    path: 'M20,170 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Lille",
    id: "ville lille",
    path: 'M325,30 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Marseille",
    id: "ville marseille",
    path: 'M420,470 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Strasbourg",
    id: "ville strasbourg",
    path: 'M520,170 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Le Havre",
    id: "ville havre",
    path: 'M210,110 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Perpignan",
    id: "ville perpignan",
    path: 'M330,500 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Orléans",
    id: "ville orléans",
    path: 'M275,220 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Nantes",
    id: "ville nantes",
    path: 'M130,260 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Dijon",
    id: "ville dijon",
    path: 'M400,260 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
}, {
    name: "Ajaccio",
    id: "ville ajaccio",
    path: 'M570,550 a12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0',
})

function WeatherMain() {
    const classes = useStyles();
    const refGridSvg = useRef();
    const [sizeSvg,setSizeSvg]= useState({
        width:700,
        height:500,
    });

    const [allParticularTown,setAllParticularTown]=React.useState([
        new ModelWeather("Paris",10,15,75,3,2,21),


    ])


    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} innerRef={refGridSvg}>

                <svg width={sizeSvg.width} height={sizeSvg.height} className={classes.svg}>

                    <SVGMap map={France} onLocationClick={(e)=>null}>

                    </SVGMap>

                </svg>

            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paperParticularTown}>
                   {
                       allParticularTown.map((item,i)=>
                           <BoxParticularTown item={item}>

                           </BoxParticularTown>
                       )
                   }
                </Paper>

            </Grid>

        </Grid>

    )


}

export default WeatherMain;