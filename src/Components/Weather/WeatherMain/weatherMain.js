import React, {useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import BoxParticularTown from "./BoxParticularTown/boxParticularTown";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete"
import {authHeader} from "../../../Controller/CheckConnected";


export function Weather() {


    function couleur(temperature) {

        if (temperature >= -18 && (temperature <= -20)) {
            return "rgb(250, 253, 255)";
        } else if ((temperature < -18) && (temperature >= -16)) {
            return "rgb(236, 250, 255)";
        } else if ((temperature < -16) && (temperature >= -14)) {
            return "rgb(218, 245, 255)";
        } else if ((temperature < -14) && (temperature >= -12)) {
            return "rgb(204, 242, 255)";
        } else if ((temperature < -12) && (temperature >= -10)) {
            return "rgb(181, 236, 255)";
        } else if ((temperature < -10) && (temperature >= -8)) {
            return "rgb(162, 232, 255)";
        } else if ((temperature < -8) && (temperature >= -6)) {
            return "rgb(144, 227, 255)";
        } else if ((temperature < -6) && (temperature >= -4)) {
            return "rgb(125, 222, 255)";
        } else if ((temperature < -4) && (temperature >= -2)) {
            return "rgb(107, 218, 255)";
        } else if ((temperature < -2) && (temperature > 0)) {
            return "rgb(89, 213, 255)";
        } else if (temperature === 0) {
            return "rgb(75, 210, 255)";
        } else if ((temperature > 0) && (temperature <= 2)) {
            return "rgb(121, 221, 255)";
        } else if ((temperature > 2) && (temperature <= 4)) {
            return "rgb(148, 228, 255)";
        } else if ((temperature > 4) && (temperature <= 6)) {
            return "rgb(181, 236, 255)";
        } else if ((temperature > 6) && (temperature <= 8)) {
            return "rgb(227, 248, 255)";
        } else if (temperature > 8 && temperature <= 10) {
            return "rgb(255, 253, 214)";
        } else if ((temperature > 10) && (temperature <= 12)) {
            return "rgb(255, 252, 177)";
        } else if ((temperature > 12) && (temperature <= 14)) {
            return "rgb(255, 251, 150)";
        } else if ((temperature > 14) && (temperature <= 16)) {
            return "rgb(253, 238, 67)";
        } else if ((temperature > 16) && (temperature <= 18)) {
            return "rgb(249, 218, 64)";
        } else if ((temperature > 18) && (temperature <= 20)) {
            return "rgb(247, 203, 62)";
        } else if ((temperature > 20) && (temperature <= 22)) {
            return "rgb(244, 187, 60)";
        } else if ((temperature > 22) && (temperature <= 24)) {
            return "rgb(241, 172, 58)";
        } else if ((temperature > 24) && (temperature <= 26)) {
            return "rgb(239, 157, 56)";
        } else if ((temperature > 26) && (temperature <= 28)) {
            return "rgb(234, 131, 52)";
        } else if ((temperature > 28) && (temperature <= 30)) {
            return "rgb(234, 131, 52)";
        } else if ((temperature > 30) && (temperature <= 32)) {
            return "rgb(232, 116, 50)";
        } else if ((temperature > 32) && (temperature <= 34)) {
            return "rgb(230, 106, 49)";
        } else if ((temperature > 34) && (temperature <= 36)) {
            return "rgb(228, 96, 47)";
        } else if ((temperature > 36) && (temperature <= 38)) {
            return "rgb(226, 85, 46)";
        } else if ((temperature > 38) && (temperature <= 40)) {
            return "rgb(225, 75, 44)";
        } else if ((temperature > 40) && (temperature <= 42)) {
            return "rgb(223, 65, 43)";
        } else if ((temperature > 42) && (temperature <= 44)) {
            return "rgb(222, 60, 42)";
        } else if ((temperature > 44) && (temperature <= 46)) {
            return "rgb(221, 55, 42)";
        } else if ((temperature > 46) && (temperature <= 48)) {
            return "rgb(220, 50, 41)";
        } else {
            return "rgb(219, 45, 40)";
        }

    }


    const [selectPredictionsHome, setSelectPredictionsHome] = React.useState([])
    const [lastChoicePrediction, setLastChoicePrediction] = React.useState("")


    const [allDataParticularTown, setAllDataParticularTown] = React.useState([])


    async function addParticularTown(name, pos) {
        var tempAllDataParticularTown = allDataParticularTown.slice()
        tempAllDataParticularTown.push({
            finished: false,
            name: name,
            error: false,
            data: {},
            id: -1,
        });

        async function addToDB() {
            console.log(name)
            const requestOptions = {
                method: 'POST',
                headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
                    address: name,
                }),
            };
            fetch(`${window.url}/mysuperday/api/meteo/addTown`, requestOptions).then((res) => {
                return res.json()
            }).then((data) => {
                tempAllDataParticularTown[pos].id = data.id
            })
        }

        await addToDB();

        await setAllDataParticularTown(tempAllDataParticularTown.slice())

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: encodeURI(name),
            }),
        };
        fetch(`${window.url}/mysuperday/api/meteo/getParticularTown`, requestOptions)
            .then((res) => {

                return res.json()
            })
            .then((data) => {

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


        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
            }),
        };
        fetch(`${window.url}/mysuperday/api/meteo/getAllTown`, requestOptions).then((res) => {
            return res.json()
        }).then((data) => {

            let res = [];
            for (const elem of data) {
                res.push({
                    finished: false,
                    name: elem.name,
                    id: elem.id,
                    error: false,
                    data: {}
                })
            }

            setAllDataParticularTown(res);


            for (let i = 0; i < res.length; i++) {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        address: encodeURI(+res[i].name),
                    }),
                };
                fetch(`${window.url}/mysuperday/api/meteo/getParticularTown`, requestOptions)
                    .then((res) => {

                        return res.json()
                    })
                    .then((data) => {

                        let tempaAlDataParticularTown = res.slice()
                        tempaAlDataParticularTown[i].data = data;
                        tempaAlDataParticularTown[i].finished = true;

                        setAllDataParticularTown(tempaAlDataParticularTown)
                    })
                    .catch(function (e) {

                        let tempaAlDataParticularTown = res.slice()
                        tempaAlDataParticularTown[i].error = true;
                        setAllDataParticularTown(tempaAlDataParticularTown)
                    })
            }

        })


    }, [])

    const classes = useStyles();


    function deleteTown(i) {
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id: allDataParticularTown[i].id,
            }),
        };
        fetch(`${window.url}/mysuperday/api/meteo/deleteTown`, requestOptions).then((res) => {
            return res.json()
        });
        let temp = allDataParticularTown.slice()
        temp.splice(i, 1);
        setAllDataParticularTown(temp)
    }

    function callPredictions(value) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: encodeURI(value),
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


                {
                    allDataParticularTown.map((item, i) =>
                        <BoxParticularTown deleteTown={deleteTown} i={i} couleur={couleur} item={item}
                                           key={i.toString()}>

                        </BoxParticularTown>
                    )
                }


            </Grid>

        </Grid>

    )


}

