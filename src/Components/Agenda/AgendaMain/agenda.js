import React from 'react'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import 'moment/locale/fr'  // without this line it didn't work



function Calendar (){


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

    const events= [
        {
            id: 0,
            title: 'All Day Event very long title',
            start: new Date(),
            end:new Date(2020,6,19),
        },

    ]


    BigCalendar.momentLocalizer(moment)

    const ColoredDateCellWrapper = ({ children }) =>
        React.cloneElement(React.Children.only(children), {
            style: {
                backgroundColor: 'pink',
            },
        })


    return (
        <div >
            <BigCalendar
                toolbar={true}
                events={events}
                step={60}
                showMultiDayTimes
                views={allViews}
                messages={messages}
                components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                }}
               // view={"week"}
                views={{ month: true, week: false, day: false, agenda: false, }}
            />
        </div>
        )


}

export default Calendar