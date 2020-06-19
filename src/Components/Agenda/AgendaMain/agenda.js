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

function Calendar() {
    const classes = useStyles()
    const [dateStart, setDateStart] = React.useState(new Date())
    const [dateEnd, setDateEnd] = React.useState(new Date())
    const [text, setText] = React.useState("")

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


    const now = new Date()
    const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

    const [events, setEvents] = React.useState([])

    BigCalendar.momentLocalizer(moment)

    const ColoredDateCellWrapper = ({children}) =>
        React.cloneElement(React.Children.only(children), {
            style: {
                backgroundColor: 'pink',
            },
        })


    return (
        <div>
            <BigCalendar
                toolbar={true}
                events={events}
                step={60}
                showMultiDayTimes
                startAccessor={"start"}
                endAccessor={"end"}
                messages={messages}
                components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                }}
                defaultView={"week"}
                //defaultView={"day"}
                views={{month: true, week: true, day: true, agenda: true,}}
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
                            title: text,
                            start: dateStart,
                            end: dateEnd,
                        })

                        setEvents(newEvent)
                    }

                    }>
                        Ajouter
                    </Button>
                </Grid>
            </Grid>


        </div>
    )


}

export default Calendar