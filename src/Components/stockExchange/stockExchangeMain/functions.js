import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const actions = [
    { title: 'BNP'},
    { title: 'Airbus'},
    { title: 'Kerlink'},
    { title: 'Cellectis'},
    { title: 'Air Liquid'},
    ];







export default function ComboBox(props) {
    return (
        <Autocomplete
            onChange={(e,newValue)=>props.setGetValueAutoComplete(newValue)}
            id="combo-box-demo"
            options={actions}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ajouter une action" variant="outlined" />}
        />
    );
}



