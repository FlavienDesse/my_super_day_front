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
import ModalAddFunctionOrVariable from "./modalAddFunctionOrVariable"
import DeleteIcon from '@material-ui/icons/Delete';
import PersonnalFunction from "./PersonnalFunction";
import PersonnalVariable from "./PersonnalVariable";
import {parser} from "mathjs";

export default function Calculator() {
    const classes = useStyles();


    const [isCalcul, setIsCalcul] = React.useState(true);
    const [allVariables, setAllVariables] = React.useState([new PersonnalVariable("x", "x=78")]);
    const [allFunctions, setAllFunctions] = React.useState(
        [new PersonnalFunction("f", "f(x)=3*x","3*x")]
    );

    var parserVar = parser();


    allFunctions.map((item, i) =>

        parserVar.evaluate(item.expression)
    );

    allVariables.map((item, i) =>
        parserVar.evaluate(item.expression)
    );


    function addOneVariable(val) {
        setAllVariables(allVariables.concat(val))
    }

    function addOneFunction(val) {
        setAllFunctions(allFunctions.concat(val))
    }

    function onClickDeleteFunction(i) {
        let allFunctionsVar = allFunctions.slice();
        parserVar.remove(allFunctions[i].expression)
        allFunctionsVar.splice(i, 1)
        setAllFunctions(allFunctionsVar);
    }

    function onClickDeleteVariable(i) {

        let allVariablesVar = allVariables.slice();
        parserVar.remove(allVariables[i].expression)
        allVariablesVar.splice(i, 1)
        setAllVariables(allVariablesVar);


    }


    return (

        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={2} className={classes.gridFunction}>

                <List>
                    <ModalAddFunctionOrVariable allFunctions={allFunctions} isFunction={1}
                                                classes={classes} parserVar={parserVar}
                                                addOneFunction={addOneFunction}/>


                    {

                        allFunctions.map((item, i) =>

                            <ListItem className={classes.listVarAndFun}>

                                <ListItemIcon>
                                    <DeleteIcon onClick={() => {
                                        onClickDeleteFunction(i)
                                    }}/>
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
                    {isCalcul ?
                        <CalculInterface parserVar={parserVar} allFunctions={allFunctions} allVariables={allVariables}
                                         setIsCalcul={setIsCalcul} classes={classes}/>
                        :

                        <GraphicInterface  setIsCalcul={setIsCalcul} parserVar={parserVar} allFunctions={allFunctions} classes={classes}/>}
                </Paper>
            </Grid>
            <Grid item xs={2} className={classes.gridVariable}>
                <ModalAddFunctionOrVariable parserVar={parserVar}
                                            allVariables={allVariables} isFunction={0} classes={classes}
                                            addOneVariable={addOneVariable}>

                </ModalAddFunctionOrVariable>
                {
                    allVariables.map((item, i) =>

                        <ListItem className={classes.listVarAndFun}>

                            <ListItemIcon>
                                <DeleteIcon onClick={() => {
                                    onClickDeleteVariable(i)
                                }}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.expression}
                            />
                        </ListItem>)


                }

            </Grid>


        </Grid>


    );
}