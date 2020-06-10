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

export default function SignIn() {
    const [errorMessageMail, setErrorMessageMail] = React.useState("");
    const [errorMessagePassword, setErrorMessagePassword] = React.useState("");

    
    function callBDD() {
        return;
    }
    
    
    function verifyLogin() {

        let email = refTextFieldMail.current.value;
        let password = refTextFieldPassword.current.value;


        var pattMail = new RegExp("[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

        var pattPasswordAtLeastOneCharacterMin = new RegExp("[a-z]");
        var pattPasswordAtLeastOneCharacterMax = new RegExp("[A-Z]");
        var pattPasswordAtLeastOneNumber = new RegExp("[0-9]");
        var pattPasswordAtLeastOneSpecialCharacter = new RegExp("[!^$*%@&$()+/-]");
        var pattPasswordSpace = new RegExp(" ");


        if (pattMail.test(email)) {
            setErrorMessageMail("")
        } else {
            setErrorMessageMail("Addrese mail non valide")
        }

        if (password.length >= 6) {
            if (pattPasswordAtLeastOneCharacterMin.test(password)) {
                if (pattPasswordAtLeastOneCharacterMax.test(password)) {
                    if (pattPasswordAtLeastOneNumber.test(password)) {
                        if (pattPasswordAtLeastOneSpecialCharacter.test(password)) {
                            if (!pattPasswordSpace.test(password)) {
                                setErrorMessagePassword("")
                                callBDD();
                            } else {
                                setErrorMessagePassword("Votre mot de passe ne doit pas contenir d'espace")
                            }
                        } else {
                            setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère spécial")
                        }
                    } else {
                        setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 nombre")
                    }
                } else {
                    setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère en majuscule")
                }
            } else {
                setErrorMessagePassword("Votre mot de passe doit contenir au moins 1 caractère en minuscule")
            }
        } else {
            setErrorMessagePassword("Votre mot de passe doit contenir au moins 6 caractères")
        }


    }

    const classes = useStyles();
    const refTextFieldMail = React.useRef();
    const refTextFieldPassword = React.useRef();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <WbSunnyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Se connecter
                </Typography>
                <FormControl className={classes.form} noValidate method="post">
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
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={refTextFieldPassword}
                        helperText={errorMessagePassword}
                        error={errorMessagePassword ? true : false}

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
                                {"Pas de compte ?"}
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>

        </Container>
    );
}