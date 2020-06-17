import React, {useEffect, useRef, useState} from "react";
import France from "@svg-maps/france.regions";
import {SVGMap} from "react-svg-map";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Paper from "@material-ui/core/Paper";
import BoxParticularTown from "./BoxParticularTown/boxParticularTown";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete"



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
    const [selectPredictionsHome,setSelectPredictionsHome] = React.useState([])
    const [allDataTown,setAllDataTown]=React.useState({
        Lille_France:{},
        Paris_France:{},
        Dijon_France:{},
        Strasbourg_France:{},
        Bordeaux_France:{},
        Lyon_France:{},
        Ajaccio_France:{},
        Nantes_France:{},
        Orleans_France:{},
        Perpignan_France:{},
        Le_Havre_France:{},
        Brest_France:{},
        Marseille_France:{},
    });
    const [allDataParticularTown,setAllDataParticularTown]=React.useState([
        {
            finished:false,
            name:"Paris , France",
            data:{}
        },
            {
                finished:false,
                name:"Paris , France",
                data:{}
            },

    ]


    )
   useEffect(()=>{
       for (let i =0; i<allDataParticularTown.length;i++){
           fetch("http://localhost:9000/mysuperday/api/meteo?address="+allDataParticularTown[0].name)
               .then( (res)=>{
                 return res.json()
               })
               .then((data)=>{
                   let tempaAlDataParticularTown = allDataParticularTown.slice()
                   tempaAlDataParticularTown[i].data=data;
                   tempaAlDataParticularTown[i].finished=true;
                   setAllDataParticularTown(tempaAlDataParticularTown)
               })
       }
   },[])




    const classes = useStyles();
    const refGridSvg = useRef();
    const [sizeSvg, setSizeSvg] = useState({
        width: 700,
        height: 500,
    });



    function callPredictions(value) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: value,
            }),

        };
        fetch(`http://localhost:9000/mysuperday/api/users/getAutocomplete`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {

                        setSelectPredictionsHome(data.predictions)


                    })
            })
    }


    return (
        <Grid container className={classes.container} justify={"center"}  alignItems="center" spacing={5}>


            <Grid item xs={2} className={classes.addParticularTown}>
                <Autocomplete
                    options={selectPredictionsHome}
                    getOptionLabel={(selectPredictionsHome) => selectPredictionsHome}
                    renderInput={(params) =>
                        <TextField onChange={(e) => callPredictions(e.target.value)} {...params}
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth

                        />
                    }
                />

            </Grid>
            <Grid item xs={1}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Grid>

            <Grid item xs={12}>

                <Paper className={classes.paperParticularTown}>
                    {
                        allDataParticularTown.map((item, i) =>
                            <BoxParticularTown item={item} key={i.toString()} >

                            </BoxParticularTown>
                        )
                    }
                </Paper>

            </Grid>
            <Grid item xs={12} innerRef={refGridSvg}>

                <svg width={sizeSvg.width} height={sizeSvg.height} className={classes.svg}>

                    <SVGMap map={France} onLocationClick={(e)=>null}>

                    </SVGMap>

                </svg>


            </Grid>
        </Grid>

    )


}

export default WeatherMain;