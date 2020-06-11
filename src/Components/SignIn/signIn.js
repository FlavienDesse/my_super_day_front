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

    
    function callBDD() {
        return;
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
                        onClick={callBDD}
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