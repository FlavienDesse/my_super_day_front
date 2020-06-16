import React from "react";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style";
import FormControl from '@material-ui/core/FormControl'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import {useHistory} from "react-navi";
import { Link} from 'react-navi';

export function SignIn({authService}) {

    let history = useHistory()
    const classes = useStyles();
    const refTextFieldUsername = React.createRef();
    const refTextFieldPassword = React.createRef();
    const [errorMessage, setErrorMessage] = React.useState("")


    function callBDD(username, password) {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,

            }),

        };
        fetch(`${window.url}/mysuperday/api/users/signin`, requestOptions)

            .then(response => {
                response.json()
                    .then(data => {
                        if (response.status === 500) {
                            setErrorMessage(data.message)
                        } else if (response.status === 404) {
                            setErrorMessage(data.message)

                        } else if (response.status === 401) {
                            setErrorMessage(data.message)

                        } else {
                            setErrorMessage("")
                            if (data.accessToken) {
                                authService.login(data)

                                history.push("/mysuperday/dashboard")
                            }


                        }

                    })
            })
    }


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
                        id="username"
                        label="Nom"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        inputRef={refTextFieldUsername}

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


                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => callBDD(refTextFieldUsername.current.value, refTextFieldPassword.current.value)}
                    >
                        Se connecter
                    </Button>
                    <Collapse in={errorMessage !== ""}>
                        <Alert severity="error"
                               action={
                                   <IconButton
                                       aria-label="close"
                                       color="inherit"
                                       size="small"
                                       onClick={() => {
                                           setErrorMessage("");
                                       }}
                                   >
                                       <CloseIcon fontSize="inherit"/>
                                   </IconButton>
                               }
                        >
                            {errorMessage}
                        </Alert>
                    </Collapse>
                    <Grid container>
                        <Grid item>
                            <Link href="/mysuperday/users/signup" >
                                {"Pas de compte ?"}
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>

        </Container>
    );
}