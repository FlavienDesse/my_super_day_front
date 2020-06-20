import React from 'react'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import 'moment/locale/fr'
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker
} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import "moment/locale/fr";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import ModalEdit from "./modalEditEvent";


function Calendar() {
    const classes = useStyles()
    const [dateStart, setDateStart] = React.useState(new Date())
    const [dateEnd, setDateEnd] = React.useState(new Date())
    const [text, setText] = React.useState("")
    const [openModalEvent, setOpenModalEvent] = React.useState(false);
    const [eventDoubleclickOnEvent,setEventDoubleclickOnEvent]= React.useState({});

    moment.locale("fr");


    const messages = {
        allDay: 'journée',
        previous: 'précédent',
        next: 'suivant',
        today: 'aujourd\'hui',
        month: 'mois',
        week: 'semaine',
        day: 'jour',
        agenda: 'agenda',
        work_week: '',
        date: 'date',
        time: 'heure',
        event: 'événement', // Or anything you want
        showMore: total => `+ ${total} événement(s) supplémentaire(s)`
    }


    const [events, setEvents] = React.useState([])

    BigCalendar.momentLocalizer(moment)

    const handleOpen = () => {
        setOpenModalEvent(true);

    };
    const handleClose = () => {
        setOpenModalEvent(false);

    };





    return (
        <div>



            <BigCalendar

                onDoubleClickEvent={(e) => {
                    setEventDoubleclickOnEvent(e)
                    handleOpen()
                }}
                toolbar={true}
                events={events}
                step={60}
                showMultiDayTimes
                startAccessor={"start"}
                endAccessor={"end"}
                messages={messages}
                defaultView={"week"}
                defaultDate={moment().toDate()}
                views={{month: true, week: true, day: true, agenda: true,}}
                style={{height: 500}}
            />

            <Grid container spacing={4} className={classes.gridAddEvent} direction="row" justify="flex-start"
                  alignItems="center">
                <Grid item xs={12} md={3}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="addLabel"
                        label="Veuillez ajouter un libellé"
                        type="text"
                        id="addLabel"
                        onChange={(e) => setText(e.target.value)}

                    />

                </Grid>
                <Grid item xs={12} md={3}>
                    <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
                        <KeyboardDateTimePicker
                            className={classes.timePickerStart}
                            minDate={new Date()}
                            margin="normal"
                            label="Début de l'évènement"
                            format="DD/MM/yyyy , h:mm"
                            onChange={(e) => setDateStart(e)}
                            value={dateStart}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}>

                        </KeyboardDateTimePicker>
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} md={3}>
                    <MuiPickersUtilsProvider utils={MomentUtils} locale="fr">
                        <KeyboardDateTimePicker
                            minDate={dateStart}
                            margin="normal"
                            label="Fin de l'évènement"
                            format="DD/MM/yyyy , h:mm"
                            onChange={(e) => setDateEnd(e)}
                            value={dateEnd}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}>

                        </KeyboardDateTimePicker>
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button color="primary" variant="contained" className={classes.buttonAdd} onClick={() => {
                        let newEvent = events.slice()


                        newEvent.push({
                            id: newEvent.length,
                            pos: newEvent.length,
                            title: text,
                            start: new Date(dateStart),
                            end: new Date(dateEnd),
                        })


                        setEvents(newEvent)
                    }

                    }>
                        Ajouter
                    </Button>
                </Grid>
            </Grid>

            <ModalEdit openModalEvent={openModalEvent} handleClose={handleClose} eventDoubleclickOnEvent={eventDoubleclickOnEvent}  events={events} setEvents={setEvents}/>

        </div>
    )


}

export default Calendar