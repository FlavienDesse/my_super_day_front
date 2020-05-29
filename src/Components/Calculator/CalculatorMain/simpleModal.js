import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


export default function SimpleModal(props) {
    const classes = props.classes;
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const bodyFun = (
        <div style={modalStyle} className={classes.modalPop}>
            <h2 id="simple-modal-title">Ajouter une function</h2>

            <TextField id="outlined-basic"  variant="outlined" className= {classes.modalTextField}/>
            <div className={classes.modalContainerButtonValidate}>
                <Button color="primary" className={classes.modalButtonValidate} onClick={()=>handleClose()}>Valider</Button>
            </div>

        </div>
    );

    const bodyVar = (
        <div style={modalStyle} className={classes.modalPop}>
            <h2 id="simple-modal-title">Ajouter une variable</h2>
            <TextField id="outlined-basic"  variant="outlined" className= {classes.modalTextField}/>
            <div className={classes.modalContainerButtonValidate}>
                <Button color="primary" className={classes.modalButtonValidate} onClick={()=>handleClose()}>Valider</Button>
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