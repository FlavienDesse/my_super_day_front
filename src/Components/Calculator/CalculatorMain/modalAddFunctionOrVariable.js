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
            <h2>Ajouter une fonction</h2>

            <TextField inputRef={refTextFieldFunctions} variant="outlined" className={classes.modalTextField}/>
            <div className={classes.modalContainerButtonValidate}>
                <Button color="primary" onClick={() => {

                    let isFunc = refTextFieldFunctions.current.value.match("\\b^[^() ]+\\((.*)\\) *=(.+)$")
                    if (isFunc) {

                        let nameNewFunc = refTextFieldFunctions.current.value.match("^.?(?=\\()")[0];
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

                            try {
                                parserVar.evaluate(refTextFieldFunctions.current.value)
                                let tryFunc = parserVar.get(nameNewFunc)
                                tryFunc(1);
                                let valueNewFunc = isFunc[2];
                                let func = new PersonnalFunction(nameNewFunc, refTextFieldFunctions.current.value,valueNewFunc)
                                props.addOneFunction(func);
                                setOpenAlert(false);
                                handleClose();
                            }
                            catch (e) {
                                setErrorMsg("Erreur de syntaxe")
                                setOpenAlert(true);
                            }

                        }

                    } else {
                        setErrorMsg("Erreur de syntaxe")
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
                    if (refTextFieldVariables.current.value.match(".*[a-zA-Z].*=.+$")) {
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
                           try{
                               parserVar.evaluate(res)
                               let newVar = new PersonnalVariable(nameNewVar, res)
                               props.addOneVariable(newVar);
                               setOpenAlert(false);
                               handleClose();
                           }
                           catch (e) {
                               setErrorMsg("Erreur de syntaxe")
                               setOpenAlert(true);
                           }


                        }
                    }else {
                        setErrorMsg("Erreur de syntaxe")
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