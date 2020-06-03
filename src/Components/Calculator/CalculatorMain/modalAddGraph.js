import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PersonnalVariable from "./PersonnalVariable";
import Collapse from "@material-ui/core/Collapse";
import {Alert} from "@material-ui/lab";

export default function ModalAddGraph(props) {
    const classes = props.classes;
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div>
            <Button color={"primary"} className={classes.buttonAddGraph} type="button" variant="contained"
                    onClick={handleOpen}>
                Ajouter un graphique
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modalPop}>
                    <h2 id="simple-modal-title">Ajouter un graphique</h2>
                    <div className={classes.modalContainerButtonValidate}>
                        <Button color="primary" onClick={() => {
                            handleClose()
                        }}>Valider</Button>
                        <Collapse in={openAlert}>
                            <Alert onClose={() => {
                                setOpenAlert(false)
                            }} severity="error">
                                {errorMsg}
                            </Alert>
                        </Collapse>
                    </div>
                </div>
            </Modal>
        </div>
    );
}