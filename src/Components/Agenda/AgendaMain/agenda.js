//import ' ~ react-agenda / build / styles.css '  ;
//import ' ~ react-datetime / css / react-datetime.css '  ;
import React from "react";
import useStyles from "./style";

import {ReactAgenda, ReactAgendaCtrl, guid, Modal} from 'react-agenda';
import 'moment/locale/fr';



export default function Agenda() {
    const classes = useStyles();


    let colors = {
        'color-1': "rgba(102, 195, 131 , 1)",
        "color-2": "rgba(242, 177, 52, 1)",
        "color-3": "rgba(235, 85, 59, 1)"
    }

    let now = new Date();

    let items = [
        {
            _id: guid(),
            name: 'RDV PDD',
            startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0),
            endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0),
            classes: 'color-1'
        },
        {
            _id: guid(),
            name: 'Projet info',
            startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 14, 0),
            endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 17, 30),
            classes: 'color-2 color-3'

        },
        {
            _id: guid(),
            name: 'Projet info',
            startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 14, 0),
            endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 17, 30),
            classes: 'color-2 color-3'

        },
    ];
    
    let state = {
        items: items,
        selected: [],
        cellHeight: 30,
        showModal: false,
        locale: "fr",
        rowsPerHour: 2,
        numberOfDays: 7,
        startDate: new Date()
    }


    function handleCellSelection(item) {
        console.log('handleCellSelection', item)
    }

    function handleItemEdit(item) {
        console.log('handleItemEdit', item)
    }

    function handleRangeSelection(item) {
        console.log('handleRangeSelection', item)
    }

    return (
    <div className={classes.agenda}>


            <ReactAgenda
                minDate={now}
                maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
                disablePrevButton={false}
                startDate={state.startDate}
                cellHeight={state.cellHeight}
                locale={state.locale}
                items={state.items}
                numberOfDays={state.numberOfDays}
                rowsPerHour={state.rowsPerHour}
                itemColors={colors}
                autoScale={false}

                fixedHeader={true}
                onItemEdit={handleItemEdit}
                onCellSelect={handleCellSelection}
                onRangeSelection={handleRangeSelection}/>
    </div>
    );

}
