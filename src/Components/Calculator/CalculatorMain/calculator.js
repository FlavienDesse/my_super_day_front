import React from "react";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import CalculInterface from "./calculInterface";
import GraphicInterface from './graphicInterface';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SimpleModal from "./simpleModal"
import DeleteIcon from '@material-ui/icons/Delete';
export default function Calculator() {
    const classes = useStyles();


    const [isCalcul, setIsCalcul] = React.useState(true);
    const [allVariables,setAllVariables] =React.useState();
    const [allFunctions,setAllFunctions] =React.useState();
    function addOneVariable(val) {
        setAllVariables(allVariables.concat(val))
    }

    function addOneFunction(val) {
        setAllFunctions(allFunctions.concat(val))
    }

    return (

        <Grid container spacing={1}  >
            <Grid item xs={2}>
                <div className={classes.demo}>
                    <List >
                        <SimpleModal isFunction={1} classes={classes}>

                        </SimpleModal>
                            <ListItem>
                                <ListItemIcon>
                                    <DeleteIcon></DeleteIcon>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>

                    </List>
                </div>
            </Grid>
            <Grid item xs={8}>
                <Paper elevation={3} className={classes.container}>
                    {isCalcul ? <CalculInterface setIsCalcul={setIsCalcul} classes={classes}/> : <GraphicInterface/>}
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <SimpleModal isFunction={0} classes={classes}>

                </SimpleModal>
                <ListItem className={classes.listVarAndFun}>
                    <ListItemIcon>
                        <DeleteIcon></DeleteIcon>
                    </ListItemIcon>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>

            </Grid>



        </Grid>


);
}