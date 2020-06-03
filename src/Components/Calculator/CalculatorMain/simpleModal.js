import React, {useRef} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Alert} from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import PersonnalFunction from "./PersonnalFunction";

export default function SimpleModal(props) {

    const classes = props.classes;
    let refTextFieldFunctions = useRef();
    let refTextFieldVariables = useRef();
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const bodyFun = (
        <div className={classes.modalPop}>
            <h2>Ajouter une function</h2>

            <TextField inputRef={refTextFieldFunctions} variant="outlined" className={classes.modalTextField}/>
            <div className={classes.modalContainerButtonValidate}>
                <Button color="primary" onClick={() => {


                    if (refTextFieldFunctions.current.value.match("\\b^[^() ]+\\((.*)\\) *=.+$")) {

                        let nameNewFunc = refTextFieldFunctions.current.value.match(".*(?=\\()")[0];
                        let alreadyuseName = false;
                        for (var i = 0; i < props.allFunctions.length; i++) {
                            console.log(props.allFunctions[i].name)
                            if (props.allFunctions[i].name === nameNewFunc) {
                                alreadyuseName = true;
                                break;
                            }
                        }
                        console.log(nameNewFunc)
                        if (alreadyuseName) {
                            setErrorMsg("Nom fonction déjà prise")
                            setOpenAlert(true);
                        } else {
                            let func = new PersonnalFunction(nameNewFunc, refTextFieldFunctions.current.value)
                            props.addOneFunction(func);
                            props.parserVar.evaluate( refTextFieldFunctions.current.value)
                            handleClose();
                        }

                    } else {
                        setErrorMsg("Erreur syntaxical")
                        setOpenAlert(true);
                    }

                }
                }>Valider</Button>
                <Collapse in={openAlert}>
                    <Alert onClose={() => {
                        setOpenAlert(false)
                    }} severity="error">
                        {errorMsg}
                    </Alert>
                </Collapse>
            </div>

        </div>
    );

    const bodyVar = (
        <div className={classes.modalPop}>
            <h2 id="simple-modal-title">Ajouter une variable</h2>
            <TextField inputRef={refTextFieldVariables} variant="outlined" className={classes.modalTextField}/>
            <div className={classes.modalContainerButtonValidate}>
                <Button color="primary" onClick={() => {
                    props.addOneVariable(refTextFieldVariables.current.value);
                    props.parserVar.evaluate(refTextFieldVariables.current.value)
                    handleClose();
                }
                }>Valider</Button>
            </div>
        </div>
    );

    return (
        <div>
            <Button color={"primary"} className={classes.modalButton} type="button" variant="contained"
                    onClick={handleOpen}>
                {props.isFunction ? "Ajouter une fonction" : "Ajouter une variable"}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {props.isFunction ? bodyFun : bodyVar}
            </Modal>
        </div>
    );
}