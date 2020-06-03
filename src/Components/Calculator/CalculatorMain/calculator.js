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
import PersonnalFunction from "./PersonnalFunction";
import {parser} from "mathjs";
export default function Calculator() {
    const classes = useStyles();


    const [isCalcul, setIsCalcul] = React.useState(true);
    const [allVariables, setAllVariables] = React.useState(["x = 3","y = 8"]);
    const [allFunctions, setAllFunctions] = React.useState(
        [new PersonnalFunction("f","f(x)=3*x")]
    );

    const parserVar = parser();
    allVariables.map((item, i) =>
        parserVar.evaluate(item)
    );

    allFunctions.map((item, i) =>
        parserVar.evaluate(item.expression)
    );



    function addOneVariable(val) {
        setAllVariables(allVariables.concat(val))
    }

    function addOneFunction(val) {
        setAllFunctions(allFunctions.concat(val))
    }

    function onClickDeleteFunction(i){
        let allFunctionsVar = allFunctions.slice();
        parserVar.remove(allFunctions[i].expression)
        allFunctionsVar.splice(i,1)
        setAllFunctions(allFunctionsVar);
    }

    function onClickDeleteVariable(i){

        let allVariablesVar =allVariables.slice();
        allVariablesVar.splice(i,1)
        setAllVariables(allVariablesVar);


    }


    return (

        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={2} className={classes.gridFunction}>

                <List >
                    <SimpleModal  parserVar={parserVar} allFunctions={allFunctions} isFunction={1} classes={classes}  addOneFunction={addOneFunction} >

                    </SimpleModal>
                    {

                      allFunctions.map((item, i) =>

                            <ListItem className={classes.listVarAndFun}>

                                <ListItemIcon>
                                    <DeleteIcon  onClick={() => {onClickDeleteFunction(i)} }></DeleteIcon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.expression}
                                />
                            </ListItem>)


                    }
                </List>


            </Grid>
            <Grid item xs={8} className={classes.gridCalculator}>
                <Paper elevation={3} className={classes.containerCalculator}>
                    {isCalcul ? <CalculInterface parserVar={parserVar} allFunctions={allFunctions} allVariables={allVariables} setIsCalcul={setIsCalcul} classes={classes}/> : <GraphicInterface/>}
                </Paper>
            </Grid>
            <Grid item xs={2} className={classes.gridVariable}>
                <SimpleModal isFunction={0} classes={classes} addOneVariable={addOneVariable}>

                </SimpleModal>
                {
                    allVariables.map((item,i) =>

                        <ListItem className={classes.listVarAndFun}>

                            <ListItemIcon>
                                <DeleteIcon  onClick={() => {onClickDeleteVariable(i)} }></DeleteIcon>
                            </ListItemIcon>
                            <ListItemText
                                primary={item}
                            />
                        </ListItem>)


                }

            </Grid>


        </Grid>


    );
}