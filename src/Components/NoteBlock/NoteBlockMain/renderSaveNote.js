import React from "react";
import useStyles from "./style";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Grid from "@material-ui/core/Grid";
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';


function Rendersavenote(props) {
    const classes = useStyles();
    const [isWritable,setIsWritable]=React.useState(true)
    const [saveIsDisabled,setSaveIsDisabled]=React.useState(true)
    const [modifyIsDisabled,setModifyIsDisabled]=React.useState(false)
    const [valueTextField,setValueTextField]=React.useState(props.value)



        return (
        <Grid item xs={12} className={classes.gridContainerSavedNote}>
            <Grid container spacing={0} justify={'center'} alignItems={"center"}>


                <Grid item xs={7}>
                    <TextField  label={props.name} id="outlined-basic" InputProps={{readOnly: isWritable}} multiline={true}  onChange={(e)=>{
                    
                        setValueTextField(e.currentTarget.value)

                    }} value={valueTextField} className={classes.inputSaveFile}
                               variant="outlined" size="small"
                    />
                </Grid>
                <Grid item xs={'auto'} spacing={0}>
                    <IconButton aria-label="save" disabled={saveIsDisabled} onClick={()=>{
                        setModifyIsDisabled(!modifyIsDisabled);
                        setSaveIsDisabled(!saveIsDisabled);
                        setIsWritable(!isWritable);
                    }}>
                        <SaveIcon style={{fontSize: 29}} color={"primary"}/>
                    </IconButton>
                </Grid>
                <Grid item xs={'auto'} spacing={0}>
                    <IconButton aria-label="delete" onClick={()=>props.deleteNote(props.pos)}>
                        <DeleteIcon style={{fontSize: 29}} color={"secondary"}/>
                    </IconButton>
                </Grid>
                <Grid item xs={'auto'} spacing={0}>

                        <IconButton aria-label="save" onClick={()=>{
                            setSaveIsDisabled(!saveIsDisabled);
                            setIsWritable(!isWritable);
                            setModifyIsDisabled(!modifyIsDisabled);
                        }} disabled={modifyIsDisabled}>
                                <EditIcon className={classes.editIcon}/>
                        </IconButton>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Rendersavenote