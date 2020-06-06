import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import {Alert} from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";


export default function ModalAddGraph(props) {
    let checkBox = {}

    props.allFunctions.map((item, i) =>
            checkBox["checked" + i] = false

    );
    const classes = props.classes;
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [stateCheckBox, setStateCheckBox] = React.useState(checkBox);
    const [minValueX, setMinValueX] = React.useState(0);
    const [maxValueX, setMaxValueX] = React.useState(0);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setStateCheckBox({...stateCheckBox, [event.target.name]: event.target.checked});
    };

    function addGraph() {
        let oneFunSelected=false;
        let numberValue = 10;
        let data = {}
        data["datasets"] = [];
        let i = 0;
        data["labels"] = Array.from(Array(numberValue+1), (d, i) => (maxValueX - minValueX) / numberValue * i);
        for (const item of props.allFunctions){
            if (stateCheckBox["checked" + i]) {
                oneFunSelected =true;
                const func = props.allFunctions[i];
                const f = props.parserVar.get(item.name)

                data["datasets"].push({
                        label: func.expression,
                        function: function (x) {
                            return f(x);
                        },
                        fill: false,
                        data: [],
                        borderColor: "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + 1 + ")",
                    }
                )
            }
            i=i+1;
        }
        if(oneFunSelected){

            props.addData(data);
            return (true);
        }
        else {
            setErrorMsg("Veuillez choisir au moins une fonction")
            setOpenAlert(true)
            return (false);

        }


    }


    return (
        <Grid container>
            <Grid item xs={6} >
                <Button color={"primary"} type="button"  className={classes.buttonModalAddGaph} variant="contained"
                        onClick={handleOpen}>
                    Ajouter un graphique
                </Button>
            </Grid>
            <Grid item xs={6}>

                <Button color={"primary"} className={classes.buttonModalAddGaph} type="button" variant="contained"
                        onClick={() => props.setIsCalcul(true)}>
                    Calcul
                </Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modalPop}>

                    <h2 id="simple-modal-title">Ajouter un graphique</h2>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                error={false}
                                label="Min"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setMinValueX(e.target.value)}
                                value={minValueX}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                error={false}
                                label="Max"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setMaxValueX(e.target.value)}
                                value={maxValueX}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                >
                                    <Typography className={classes.heading}>Veuillez selectionner les
                                        fonctions</Typography>
                                </ExpansionPanelSummary>
                                <Grid container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start">


                                    {props.allFunctions.map((value, i) =>
                                        <Grid item xs={12}>

                                            <FormControlLabel
                                                control={<Checkbox checked={stateCheckBox["checked" + i]}
                                                                   onChange={handleChange} name={"checked" + i}/>}
                                                label={value.expression}
                                            />
                                        </Grid>
                                    )}

                                </Grid>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>

                    <div className={classes.modalContainerButtonValidate}>
                        <Button color="primary" onClick={() => {
                            if(addGraph()) {
                                setOpenAlert(false)
                                handleClose()
                            }




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
        </Grid>
    );
}