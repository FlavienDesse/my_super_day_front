import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {authHeader} from "../../Controller/CheckConnected";

export function FormDialog(props) {
    const refTextFieldTitle = React.createRef();

    const [open, setOpen] = React.useState(false);
    let textField = "";
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        addToDB();
        setOpen(false);
    };




    async function addToDB() {
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
                value: props.lastChoice,
                title: refTextFieldTitle.current.value,
            }),
        };
        await fetch(`${window.url}/mysuperday/api/trajet/addFav`, requestOptions)
    }


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Ajouter aux favoris
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ajouter un favori</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez entrer un titre pour cette adresse
                    </DialogContentText>
                    <TextField
                        required={true}
                        autoFocus
                        margin="dense"
                        id="name"
                        type="email"
                        fullWidth
                        label={"Entrer un titre"}
                        inputRef={refTextFieldTitle}>

                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Enregister
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}