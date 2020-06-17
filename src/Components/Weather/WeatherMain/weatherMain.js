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

/*
let temperature =0;

function couleur (temperature) {

    let couleurRGB = "rgb(0,0,0)";
switch (temperature) {
    case ((temperature >= -18)) :{
        couleurRGB= "rgb(250, 253, 255)";
        };
        break;
    case ((temperature <-18) && (temperature >= -16)) :{
        couleurRGB= "rgb(236, 250, 255)";
    };
        break;
    case ((temperature <-16) && (temperature >= -14)) :{
        couleurRGB= "rgb(218, 245, 255)";
    };
        break;
    case ((temperature <-14) && (temperature >= -12)) :{
        couleurRGB= "rgb(204, 242, 255)";
    };
        break;
    case ((temperature <-12) && (temperature >= -10)) :{
        couleurRGB= "rgb(181, 236, 255)";
    };
        break;
    case ((temperature <-10) && (temperature >= -8)) :{
        couleurRGB= "rgb(162, 232, 255)";
    };
        break;
    case ((temperature <-8) && (temperature >= -6)) :{
        couleurRGB= "rgb(144, 227, 255)";
    };
        break;
    case ((temperature <-6) && (temperature >= -4)) :{
        couleurRGB= "rgb(125, 222, 255)";
    };
        break;
    case ((temperature <-4) && (temperature >= -2)) :{
        couleurRGB= "rgb(107, 218, 255)";
    };
        break;
    case ((temperature <-2) && (temperature > 0)) :{
        couleurRGB= "rgb(89, 213, 255)";
    };
        break;
    case (temperature = 0) :{
        couleurRGB= "rgb(75, 210, 255)";
    };
        break;
    case ((temperature > 0) && (temperature <= 2)) :{
        couleurRGB= "rgb(121, 221, 255)";
    };
        break;
    case ((temperature > 2) && (temperature <= 4)) :{
        couleurRGB= "rgb(148, 228, 255)";
    };
        break;
    case ((temperature > 4) && (temperature <=6)) :{
        couleurRGB= "rgb(181, 236, 255)";
    };
        break;
    case ((temperature > 6) && (temperature <= 8)) :{
        couleurRGB= "rgb(227, 248, 255)";
    };
        break;
    case ((temperature > 😎 && (temperature <= 10)) :{
        couleurRGB= "rgb(255, 253, 214)";
    };
        break;
    case ((temperature > 10) && (temperature <= 12)) :{
        couleurRGB= "rgb(255, 252, 177)";
    };
        break;
    case ((temperature > 12) && (temperature <= 14)) :{
        couleurRGB= "rgb(255, 251, 150)";
    };
        break;
    case ((temperature > 14) && (temperature <= 16)) :{
        couleurRGB= "rgb(253, 238, 67)";
    };
        break;
    case ((temperature > 16) && (temperature <= 18)) :{
        couleurRGB= "rgb(249, 218, 64)";
    };
        break;
    case ((temperature > 18) && (temperature <= 20)) :{
        couleurRGB= "rgb(247, 203, 62)";
    };
        break;
    case ((temperature > 20) && (temperature <= 22)) :{
        couleurRGB= "rgb(244, 187, 60)";
    };
        break;
    case ((temperature > 22) && (temperature <= 24)) :{
        couleurRGB= "rgb(241, 172, 58)";
    };
        break;
    case ((temperature > 24) && (temperature <=26)) :{
        couleurRGB= "rgb(239, 157, 56)";
    };
        break;
    case ((temperature > 26) && (temperature <= 28)) :{
        couleurRGB= "rgb(234, 131, 52)";
    };
        break;
    case ((temperature > 28) && (temperature <= 30)) :{
        couleurRGB= "rgb(234, 131, 52)";
    };
        break;
    case ((temperature > 30) && (temperature <= 32)) :{
        couleurRGB= "rgb(232, 116, 50)";
    };
        break;
    case ((temperature > 32) && (temperature <= 34)) :{
        couleurRGB= "rgb(230, 106, 49)";
    };
        break;
    case ((temperature > 34) && (temperature <=36)) :{
        couleurRGB= "rgb(228, 96, 47)";
    };
        break;
    case ((temperature > 36) && (temperature <= 38)) :{
        couleurRGB= "rgb(226, 85, 46)";
    };
        break;
    case ((temperature > 38) && (temperature <= 40)) :{
        couleurRGB= "rgb(225, 75, 44)";
    };
        break;
    case ((temperature > 40) && (temperature <= 42)) :{
        couleurRGB= "rgb(223, 65, 43)";
    };
        break;
    case ((temperature > 42) && (temperature <= 44)) :{
        couleurRGB= "rgb(222, 60, 42)";
    };
        break;
    case ((temperature > 44) && (temperature <=46)) :{
        couleurRGB= "rgb(221, 55, 42)";
    };
        break;
    case ((temperature > 46) && (temperature <= 48)) :{
        couleurRGB= "rgb(220, 50, 41)";
    };
        break;
    case ((temperature > 48) ) :{
        couleurRGB= "rgb(219, 45, 40)";
    };
        break;

    default:
        console.log("erreur");

        return(couleurRGB);
}
    }
 */


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
    const [selectPredictionsHome, setSelectPredictionsHome] = React.useState([])
    const [lastChoicePrediction, setLastChoicePrediction] = React.useState("")

    const [allDataTown, setAllDataTown] = React.useState({
        Lille_France: {},
        Paris_France: {},
        Dijon_France: {},
        Strasbourg_France: {},
        Bordeaux_France: {},
        Lyon_France: {},
        Ajaccio_France: {},
        Nantes_France: {},
        Orleans_France: {},
        Perpignan_France: {},
        Le_Havre_France: {},
        Brest_France: {},
        Marseille_France: {},
    });
    const [allDataParticularTown, setAllDataParticularTown] = React.useState([
            {
                finished: false,
                name: "Paris , France",
                error: false,
                data: {}
            },
            {
                finished: false,
                name: "Lille , France",
                error: false,
                data: {}
            },

        ]
    )

    async function addParticularTown(name, pos) {
        var tempAllDataParticularTown = allDataParticularTown.slice()
        tempAllDataParticularTown.push({
            finished: false,
            name: name,
            error: false,
            data: {}
        });

        await setAllDataParticularTown(tempAllDataParticularTown.slice())


        fetch("http://localhost:9000/mysuperday/api/meteo?address=" + name)
            .then((res) => {

                return res.json()
            })
            .then((data) => {
                console.log(data)
                tempAllDataParticularTown[pos].data = data;
                tempAllDataParticularTown[pos].finished = true;

                setAllDataParticularTown(tempAllDataParticularTown)

            })
            .catch(function (e) {


                tempAllDataParticularTown[pos].error = true;
                setAllDataParticularTown(tempAllDataParticularTown)
            })
    }

    useEffect(() => {
        for (let i = 0; i < allDataParticularTown.length; i++) {
            fetch("http://localhost:9000/mysuperday/api/meteo?address=" + allDataParticularTown[i].name)
                .then((res) => {

                    return res.json()
                })
                .then((data) => {

                    let tempaAlDataParticularTown = allDataParticularTown.slice()
                    tempaAlDataParticularTown[i].data = data;
                    tempaAlDataParticularTown[i].finished = true;

                    setAllDataParticularTown(tempaAlDataParticularTown)
                })
                .catch(function (e) {

                    let tempaAlDataParticularTown = allDataParticularTown.slice()
                    tempaAlDataParticularTown[i].error = true;
                    setAllDataParticularTown(tempaAlDataParticularTown)
                })
        }
    }, [])


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
            .catch(function (e) {

            })
    }


    return (
        <Grid container className={classes.container} justify={"center"} alignItems="center" spacing={5}>


            <Grid item xs={3} className={classes.addParticularTown}>
                <Autocomplete
                    onChange={(e, newValue) => setLastChoicePrediction(newValue)}
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
                <Fab color="primary" aria-label="add" onClick={(e) => {
                    if (lastChoicePrediction.length > 0) {
                        addParticularTown(lastChoicePrediction, allDataParticularTown.length)
                    }


                }}>
                    <AddIcon/>
                </Fab>
            </Grid>

            <Grid item xs={12}>

                <Paper className={classes.paperParticularTown}>
                    {
                        allDataParticularTown.map((item, i) =>
                            <BoxParticularTown item={item} key={i.toString()}>

                            </BoxParticularTown>
                        )
                    }
                </Paper>

            </Grid>
            <Grid item xs={12} innerRef={refGridSvg}>

                <svg width={sizeSvg.width} height={sizeSvg.height} className={classes.svg}>

                    <SVGMap map={France} onLocationClick={(e) => null}>

                    </SVGMap>

                </svg>


            </Grid>
        </Grid>

    )


}

export default WeatherMain;