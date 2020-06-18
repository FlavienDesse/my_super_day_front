import React, {useEffect} from "react";
import useStyles from './style'
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';


function callTrad(props) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: props.text,
            langCible: props.langCible,
        }),

    };
    fetch(`http://localhost:9000/traducteur`, requestOptions)
        .then(response => {
            response.json()
                .then(data => {
                    props.setTraduction(data.trad);
                })
        })
}

function TraductorMain() {
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

            show: "Allemand",
            id: "ge"
        },
    ];
    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <Paper className={classes.container}>


            <Grid container className={classes.grid} direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
            >
                <Grid item xs={6}>
                    <InputBase
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

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Paper>

)
}

export default TraductorMain;