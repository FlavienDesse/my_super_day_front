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
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from "@material-ui/lab/Alert";
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from "@material-ui/core/IconButton";

export default function SignIn() {
    const [errorMessageMail, setErrorMessageMail] = React.useState("");
    const [errorMessagePassword, setErrorMessagePassword] = React.useState("");
    const [errorMessagePasswordRetry, setErrorMessagePasswordRetry] = React.useState("");
    const [errorMessageUsername, setErrorMessageUsername] = React.useState("");
    const [errorMessageAddressHome, setErrorMessageAddressHome] = React.useState("");
    const [errorMessageAddressWork, setErrorMessageAddressWork] = React.useState("");


    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const [selectPredictionsHome, setSelectPredictionsHome] = React.useState([]);
    const [selectPredictionsWork, setSelectPredictionsWork] = React.useState([]);


    const [openError, setOpenError] = React.useState(false);
    const [messageErreur,setMessageErreur]= React.useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const refTextFieldMail = React.useRef();
    const refTextFieldPassword = React.useRef();
    const refTextFieldPasswordRetry = React.useRef();
    const refTextFieldUsername = React.useRef();
    const refTextFieldAddressHome = React.useRef();
    const refTextFieldAddressWork = React.useRef();


    function callPredictions(value, isHome) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                address: value,
            }),

        };
        fetch(`http://localhost:9000/mysuperday/users/getAutocomplete`, requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        if (isHome) {
                            setSelectPredictionsHome(data.predictions)
                        } else {
                            setSelectPredictionsWork(data.predictions);
                        }


                    })
            })
    };


    function createAccount(email,password,username,homeAddress,workAddress,birthDate) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password:password,
                username:username,
                homeAddress:homeAddress,
                workAddress:workAddress,
                birthDate:birthDate

            }),

        };
        fetch(`http://localhost:9000/mysuperday/users/signup`, requestOptions)

            .then(response => {

               if(response.status===500){
                   setOpenError(true);
                   setMessageErreur("Erreur interne");
               }

            })
    }

    function verifyLogin() {

        let email = refTextFieldMail.current.value;
        let password = refTextFieldPassword.current.value;
        let passwordRetry = refTextFieldPasswordRetry.current.value;
        let username = refTextFieldUsername.current.value;
        let addressHome = refTextFieldAddressHome.current.value;
        let addressWork = refTextFieldAddressWork.current.value;
        let dateOfBirth = selectedDate;


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

        if (username.length === 0) {
            error = true;
            setErrorMessageUsername("Ce champ doit être rempli")
        }

        if (addressHome.length !== 0) {


        } else {
            error = true;
            setErrorMessageAddressHome("Ce champ doit être rempli")
        }


        if (addressWork.length !== 0) {

        } else {
            error = true;
            setErrorMessageAddressWork("Ce champ doit être rempli")
        }


        if (!error) {

            createAccount(email,password,username,addressHome,addressWork,dateOfBirth);
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
                        error={errorMessageUsername}
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
                        error={errorMessageMail}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="Mot de passe"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        inputRef={refTextFieldPassword}
                        helperText={errorMessagePassword}
                        error={errorMessagePassword}
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
                        error={errorMessagePasswordRetry}

                    />
                    <MuiPickersUtilsProvider  utils={MomentUtils} locale="fr">
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

                    <Autocomplete
                        options={selectPredictionsHome}
                        getOptionLabel={(selectPredictionsHome) => selectPredictionsHome}
                        renderInput={(params) =>
                            <TextField onChange={(e) => callPredictions(e.target.value, true)} {...params}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="address"
                                       label="Adresse du domicile"
                                       id="address"
                                       inputRef={refTextFieldAddressHome}
                                       helperText={errorMessageAddressHome}
                                       error={errorMessageAddressHome}/>
                        }
                    />

                    <Autocomplete
                        options={selectPredictionsWork}
                        getOptionLabel={(selectPredictionsWork) => selectPredictionsWork}
                        renderInput={(params) =>
                            <TextField onChange={(e) => callPredictions(e.target.value, false)} {...params}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="addressWork"
                                       label="Adresse du travail"
                                       id="addressWork"
                                       inputRef={refTextFieldAddressWork}
                                       helperText={errorMessageAddressWork}
                                       error={errorMessageAddressWork}/>
                        }
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={verifyLogin}
                    >
                        Créer un compte
                    </Button>

                    <Collapse in={openError}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpenError(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {messageErreur}
                        </Alert>
                    </Collapse>
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