import React from "react";
import useStyles from './style'
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import {authHeader} from "../../../Controller/CheckConnected";


export function TraductorMain() {
    const classes = useStyles();
    const [traduction, setTraduction] = React.useState("");
    const [textWanted, setTextWanted] = React.useState("")
    const [lang, setLang] = React.useState("")
    const language = [
        {

            show: "Francais",
            id: "fr"
        },
        {
            show: "Anglais",
            id: "en"
        },
        {
            show: "Allemand",
            id: "de"
        },
        {
            show: "Italien",
            id: "it"
        },
        {
            show: "Espagnol",
            id: "es"
        },
        {
            show: "Portugais",
            id: "pt"
        },
        {
            show: "Russe",
            id: "ru"
        },
        {
            show: "Roumain",
            id: "ro"
        },
        {
            show: "Arabe",
            id: "ar"
        },
        {
            show: "Turc",
            id: "tr"
        },
        {
            show: "Chinois",
            id: "zh"
        },
        {
            show: "Japonais",
            id: "ja"
        },
        {
            show: "Coréen",
            id: "ko"
        },
        {
            show: "Vietnamien",
            id: "vi"
        },
        {
            show: "Danois",
            id: "da"
        },
        {
            show: "Néerlandais",
            id: "nl"
        },
        {
            show: "Finnois",
            id: "fi"
        },
        {
            show: "Islandais",
            id: "is"
        },
        {
            show: "Norvégien",
            id: "no"
        },
        {
            show: "Suédois",
            id: "sv"
        },
        {
            show: "Ukrainien",
            id: "uk"
        },
        {
            show: "Polonais",
            id: "pl"
        },
        {
            show: "Grec",
            id: "el"
        },
        {
            show: "Hongrois",
            id: "hu"
        },
        {
            show: "Lituanien",
            id: "lt"
        },
        {
            show: "Letton",
            id: "lv"
        },
        {
            show: "Estonien",
            id: "et"
        },
        {
            show: "Croate",
            id: "hr"
        },
        {
            show: "Tchèque",
            id: "cs"
        },
        {
            show: "Slovaque",
            id: "sk"
        },
        {
            show: "Serbe",
            id: "sr"
        },
        {
            show: "Slovène",
            id: "sl"
        },
        {
            show: "Latin",
            id: "la"
        },
        {
            show: "Hébreu",
            id: "he"
        },
        {
            show: "Espéranto",
            id: "eo"
        },
        {
            show: "Arménien",
            id: "hy"
        },
        {
            show: "Albanais",
            id: "sq"
        },
    ];


    function callTrad(props) {
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                text: textWanted,
                langCible: lang,
            }),

        };
        fetch(`${window.url}/mysuperday/api/traducteur/getTraduction`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        setTraduction(data.trad)
                    })
            })
    }


    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <div>
            <Paper className={classes.container}>


                <Grid container className={classes.grid} direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                >
                    <Grid item xs={6}>
                        <InputBase
                            onChange={(e) => setTextWanted(e.target.value)}
                            placeholder={"Entrez votre texte à traduire"}
                            multiline
                            className={classes.textField}
                            defaultValue=""
                            inputProps={{'aria-label': 'naked'}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <FormControl variant="filled" className={classes.formControlLang}>
                                    <Select
                                        className={classes.selectLang}
                                        onChange={handleChange}
                                    >
                                        {
                                            language.map((item, i) => (

                                                <MenuItem value={item.id}> {item.show} </MenuItem>


                                            ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.answer}>
                                {traduction}
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>


            </Paper>
            <div className={classes.divButtonTranslate}>
                <Button variant="contained" color="primary" onClick={callTrad}
                        className={classes.buttonTranslate}> TRADUIRE </Button>
            </div>

        </div>
    )
}

