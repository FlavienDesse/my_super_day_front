import React, {useRef} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Alert} from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import PersonnalFunction from "./PersonnalFunction";
import PersonnalVariable from "./PersonnalVariable";

export default function ModalAddFunctionOrVariable(props) {

    const classes = props.classes;
    let parserVar = props.parserVar;
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

    function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
    }


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
                            if (props.allFunctions[i].name === nameNewFunc) {
                                alreadyuseName = true;
                                break;
                            }
                        }
                        if (alreadyuseName) {
                            setErrorMsg("Nom fonction déjà prise")
                            setOpenAlert(true);
                        } else {
                            let func = new PersonnalFunction(nameNewFunc, refTextFieldFunctions.current.value)
                            props.addOneFunction(func);
                            props.parserVar.evaluate(refTextFieldFunctions.current.value)
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
                    let res = replaceAll(refTextFieldVariables.current.value, " ", "");
                    let nameNewVar = res.match(".*[a-zA-Z].*(?==.+)")[0];
                    let alreadyuseName = false;
                    for (var i = 0; i < props.allVariables.length; i++) {
                        if (props.allVariables[i].name === nameNewVar) {
                            alreadyuseName = true;
                            break;
                        }
                    }
                    if (alreadyuseName) {
                        setErrorMsg("Nom fonction déjà prise")
                        setOpenAlert(true);
                    } else {
                        parserVar.evaluate(res)
                        let newVar = new PersonnalVariable(nameNewVar, res)
                        props.addOneVariable(newVar);
                        handleClose();
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

    return (<div>
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