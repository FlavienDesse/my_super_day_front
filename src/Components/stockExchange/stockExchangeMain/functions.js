import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Share from './share'

const actions = [
    { title: 'BNP'},
    { title: 'Airbus'},
    { title: 'Kerlink'},
    { title: 'Cellectis'},
    { title: 'Air Liquid'},
    ];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        }

    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },


}));



export function ComboBox() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={actions}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ajouter une action" variant="outlined" />}
        />
    );
}




export function FloatingActionButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={()=> props.setAllShare(new Share("lol","lol","lol","lol"))} />
            </Fab>
        </div>
    );
}