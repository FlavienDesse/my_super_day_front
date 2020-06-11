import React from "react";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style";
import FormControl from '@material-ui/core/FormControl'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import "moment/locale/fr";

export default function SignIn() {
    const [errorMessageMail, setErrorMessageMail] = React.useState("");
    const [errorMessagePassword, setErrorMessagePassword] = React.useState("");
    const [errorMessagePasswordRetry, setErrorMessagePasswordRetry] = React.useState("");
    const [errorMessageUsername, setErrorMessageUsername] = React.useState("");
    const [errorMessageAddress, setErrorMessageAddress] = React.useState("");

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const refTextFieldMail = React.useRef();
    const refTextFieldPassword = React.useRef();
    const refTextFieldPasswordRetry = React.useRef();
    const refTextFieldUsername = React.useRef();
    const refTextFieldAddress = React.useRef();


    function callPredictions(e) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify( {
                address:e.target.value,
            }),

        };
        fetch(`http://localhost:9000/users/getAutocomplete`, requestOptions)
            .then(response =>{response.json()
                .then(data => {
                    console.log(data)

                })
            })
    };
   
    
    function callBDD() {

    }

    function verifyLogin() {

        let email = refTextFieldMail.current.value;
        let password = refTextFieldPassword.current.value;
        let passwordRetry = refTextFieldPasswordRetry.current.value;
        let username = refTextFieldUsername.current.value;
        let address = refTextFieldUsername.current.value;

        var pattMail = new RegExp("[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

        var pattPasswordAtLeastOneCharacterMin = new RegExp("[a-z]");
        var pattPasswordAtLeastOneCharacterMax = new RegExp("[A-Z]");
        var pattPasswordAtLeastOneNumber = new RegExp("[0-9]");
        var pattPasswordAtLeastOneSpecialCharacter = new RegExp("[!^$*%@&$()+/-]");
        var pattPasswordSpace = new RegExp(" ");

        let error = false;

        if (pattMail.test(email)) {
            setErrorMessageMail("")
        } else {
            error = true;
            setErrorMessageMail("Addrese mail non valide")
        }

        if (password.length >= 6) {
            if (pattPasswordAtLeastOneCharacterMin.test(password)) {
                if (pattPasswordAtLeastOneCharacterMax.test(password)) {
                    if (pattPasswordAtLeastOneNumber.test(password)) {
                        if (pattPasswordAtLeastOneSpecialCharacter.test(password)) {
                            if (!pattPasswordSpace.test(password)) {
                                if (passwordRetry === password) {
                                    setErrorMessagePassword("")
                                    setErrorMessagePasswordRetry("")
                                } else {
                                    error = true;
                                    setErrorMessagePasswordRetry("Les deux mots de passes sont différents")
                                    setErrorMessagePassword("Les deux mots de passes sont différents")
                                }

                            } else {
                                error = true;
                                setErrorMessagePassword("Votre mot de passe ne doit pas contenir d'espace")
                            }
                        } else {
                            error = true;
                            setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère spécial")
                        }
                    } else {
                        error = true;
                        setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 nombre")
                    }
                } else {
                    error = true;
                    setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère en majuscule")
                }
            } else {
                error = true;
                setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère en minuscule")
            }
        } else {
            error = true;
            setErrorMessagePassword("Votre mot de passe doit contenir au moins 6 caractères")
        }

        if (username.length <= 6) {
            error = true;
            setErrorMessageUsername("Ce champ doit être rempli")
        }


        if (!error) {
            callBDD()
        }


    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <WbSunnyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Créer un compte
                </Typography>
                <FormControl className={classes.form} noValidate method="post">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Pseudo"
                        name="username"
                        autoFocus
                        inputRef={refTextFieldUsername}
                        helperText={errorMessageUsername}
                        error={errorMessageUsername ? true : false}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputRef={refTextFieldMail}
                        helperText={errorMessageMail}
                        error={errorMessageMail ? true : false}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        inputRef={refTextFieldPassword}
                        helperText={errorMessagePassword}
                        error={errorMessagePassword ? true : false}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordRetry"
                        label="Veuillez retaper votre mot de passe"
                        type="password"
                        id="passwordRetry"
                        autoComplete="current-password"
                        inputRef={refTextFieldPasswordRetry}
                        helperText={errorMessagePasswordRetry}
                        error={errorMessagePasswordRetry ? true : false}

                    />
                    <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
                        <KeyboardDatePicker
                            maxDate={new Date()}
                            margin="normal"
                            label="Date de naissance"
                            format="DD/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}>

                        </KeyboardDatePicker>
                    </MuiPickersUtilsProvider>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="address"
                        label="Adresse"
                        id="address"
                        inputRef={refTextFieldAddress}
                        helperText={errorMessageAddress}
                        error={errorMessageAddress ? true : false}
                        onChange={callPredictions }

                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={verifyLogin}
                    >
                        Se connecter
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Dèjà un compte ?"}
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>

        </Container>
    );
}