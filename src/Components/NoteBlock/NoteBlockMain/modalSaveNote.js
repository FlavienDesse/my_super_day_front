import React from "react";
import useStyles from "./style";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Rendersavenote from "./renderSaveNote";
import ModelSaveFile from "./modelSavefile";


function getModalStyle() {
    const top = 50;
    const left = 50 ;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}



export default function SimpleModal(props) {
    let refTitleFieldNote = React.useRef()
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    function addNote(){

        let temp = props.allSaveFile.slice()
        temp.push(new ModelSaveFile(refTitleFieldNote.current.value,props.valueTextFieldNote.value))
        props.setAllSaveFile(temp);
        props.handleClose();
    }


    return (
        <div>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={props.open} onClose={props.handleClose}>
                    <div style={modalStyle} className={classes.paper}>
                        <Grid>
                            <Grid container justify={"center"}>
                            <h3>
                               Titre de la note :
                            </h3>
                            </Grid>

                            <Grid container justify={"center"}>
                                <TextField inputRef={refTitleFieldNote} id="outlined-basic" placeholder={'Titre'} variant="outlined" size="small"
                                />
                            </Grid>
                            <Grid container justify="space-evenly" alignItems="center" className={classes.gridContainerModal}>
                                <Grid item xs={'auto'}>
                                    <Button variant="contained" color="primary" onClick={addNote}>
                                        VALIDER
                                    </Button>
                                </Grid>
                                <Grid item xs={'auto'} >
                                    <Button variant="contained" color="secondary">
                                        ANNULER
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
            </Modal>
        </div>
    );
}




