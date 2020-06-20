import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {KeyboardDateTimePicker, MuiPickersUtilsProvider, validate} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import React from "react";
import useStyles from "./style";
import Modal from "@material-ui/core/Modal";


export default function ModalEdit(props) {

    const classes = useStyles()
    let eventDoubleclickOnEvent = props.eventDoubleclickOnEvent
    const [dateStartEdit, setDateStartEdit] = React.useState(new Date())
    const [dateEndEdit, setDateEndEdit] = React.useState(new Date())
    const [isTextFieldOnError,setIsTextFieldOnError] = React.useState(false)

    const [textEdit, setTextEdit] = React.useState("")

    function deleteEvent(){
        let temp = props.events.slice();
        temp.splice(eventDoubleclickOnEvent.pos,1)
        props.setEvents(temp)
        props.handleClose();
    }


    function checkIfValid() {

        if(textEdit===""){
            setIsTextFieldOnError(true)
        }else {




            props.events[eventDoubleclickOnEvent.pos]={
                id:  props.events[eventDoubleclickOnEvent.pos].id,
                pos:  props.events[eventDoubleclickOnEvent.pos].pos,
                title: textEdit,
                start: new Date(dateStartEdit),
                end: new Date(dateEndEdit),
            }
            props.handleClose();
        }


    }


    return (
        <Modal
            open={props.openModalEvent}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.paper}>
                <h2 id="simple-modal-title">Editer l'évènement</h2>
                <Grid container spacing={4} className={classes.gridAddEvent} direction="row" justify="flex-start"
                      alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            onClick={()=>setIsTextFieldOnError(false)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="addLabel"
                            label={eventDoubleclickOnEvent.title}
                            type="text"
                            id="addLabel"
                            onChange={(e) => setTextEdit(e.target.value)}
                            error={isTextFieldOnError}
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
                            <KeyboardDateTimePicker
                                className={classes.timePickerStart}
                                minDate={new Date()}
                                margin="normal"
                                label="Début de l'évènement"
                                format="DD/MM/yyyy , h:mm"
                                onChange={(e) => setDateStartEdit(e)}
                                value={dateStartEdit}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}>

                            </KeyboardDateTimePicker>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
                            <KeyboardDateTimePicker
                                minDate={dateStartEdit}
                                margin="normal"
                                label="Fin de l'évènement"
                                format="DD/MM/yyyy , h:mm"
                                onChange={(e) => setDateEndEdit(e)}
                                value={dateEndEdit}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}>

                            </KeyboardDateTimePicker>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" className={classes.buttonAdd} onClick={() => {
                          checkIfValid()
                        }

                        }>
                            Valider
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" variant="contained" className={classes.buttonAdd} onClick={() => {
                           deleteEvent()
                        }

                        }>
                            Supprimer
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Modal>

    )
}