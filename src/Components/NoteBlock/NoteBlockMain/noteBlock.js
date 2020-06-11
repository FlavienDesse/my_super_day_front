import React from "react";
import useStyles from "./style";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Rendersavenote from "./renderSaveNote";
import SimpleModal from "./modalSaveNote";
import ModelSavefile from "./modelSavefile";


function NoteBlock(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [allSaveFile, setAllSaveFile] = React.useState([new ModelSavefile("note pour demain", 'demain à la maison')]);
    const refTextFieldNote = React.useRef();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <div className={classes.container}>
            <SimpleModal  allSaveFile={allSaveFile} valueTextFieldNote={refTextFieldNote.current} setAllSaveFile={setAllSaveFile} handleOpen={handleOpen} handleClose={handleClose} open={open}>
            </SimpleModal>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.title}>
                    <Paper variant={'outlined'} color={"primary"}>
                        Generation d'une nouvelle note
                    </Paper>
                </Grid>
                <Grid container item xs={12} spacing={0} justify={'center'} alignItems={"center"}
                      className={classes.gridContainer}>
                    <Grid item xs={7}>
                        <TextField inputRef={refTextFieldNote} id="outlined-basic" placeholder={'Nouvelle note'}
                                   multiline={true} rows={3} className={classes.inputSaveFile} variant="outlined"
                                   size="small"

                        />
                    </Grid>
                    <Grid item xs={'auto'} spacing={0}>
                        <IconButton aria-label="save">
                            <SaveIcon onClick={() => handleOpen()}  style={{fontSize: 29}} color={"primary"}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={'auto'} spacing={0}>
                        <IconButton aria-label="delete">
                            <DeleteIcon onClick={() => refTextFieldNote.current.value = ""} style={{fontSize: 29}}
                                        color={"secondary"}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.title}>
                    <Paper variant={'outlined'} color={"primary"}>
                        Consultation des notes
                    </Paper>
                </Grid>
                {
                    allSaveFile.map((item, i) => 
                            <Rendersavenote  name={item.name} value={item.value}>

                            </Rendersavenote>

                    )

                }

            </Grid>
        </div>);


}

export default NoteBlock;