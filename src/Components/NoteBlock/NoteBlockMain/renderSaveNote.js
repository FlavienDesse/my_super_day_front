import React from "react";
import useStyles from "./style";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Grid from "@material-ui/core/Grid";
import EditIcon from '@material-ui/icons/Edit';


function Rendersavenote(props) {
    const classes = useStyles();


    return (
        <Grid item xs={12} className={classes.gridContainerSavedNote}>
            <Grid container spacing={0} justify={'center'} >


                <Grid item xs={7}>
                    <TextField label={props.name} id="outlined-basic" InputProps={{readOnly: true}}   value={props.value} className={classes.inputSaveFile}
                               variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={'auto'} spacing={0}>
                    <IconButton aria-label="save" disabled>
                        <SaveIcon style={{fontSize: 29}} color={"primary"}/>
                    </IconButton>
                </Grid>
                <Grid item xs={'auto'} spacing={0}>
                    <IconButton aria-label="delete">
                        <DeleteIcon style={{fontSize: 29}} color={"secondary"}/>
                    </IconButton>
                </Grid>
                <Grid item xs={'auto'} spacing={0}>
                    <IconButton aria-label="save">
                        <EditIcon style={{fontSize: 29}} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Rendersavenote