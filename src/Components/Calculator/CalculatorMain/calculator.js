import React, {useEffect} from "react";
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
import {authHeader} from "../../../Controller/CheckConnected";

export function Calculator(props) {
    const classes = useStyles();

    const [isFinishedGetDb, setIsFinishedGetDb] = React.useState(false)
    const [isCalcul, setIsCalcul] = React.useState(true);
    const [allVariables, setAllVariables] = React.useState([]);
    const [allFunctions, setAllFunctions] = React.useState(
        []
    );
    const [allDataGraph, setAllDataGraph] = React.useState([]);
    var parserVar = parser();


    allFunctions.map((item, i) =>

        parserVar.evaluate(item.expression)
    );

    allVariables.map((item, i) =>
        parserVar.evaluate(item.expression)
    );

    useEffect(() => {


        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
            }),
        };

        fetch(`${window.url}/mysuperday/api/calculatrice/getVariableFunction`, requestOptions).then((res) => {
            return res.json()
        }).then(function (data) {

                let resultVar = [];
                for (let elem of data.variables) {
                    let nameNewVar = elem.match(".*[a-zA-Z].*(?==.+)")[0];
                    parserVar.evaluate(elem)
                    let newVar = new PersonnalVariable(nameNewVar, elem)
                    resultVar.push(newVar)

                }

                let resultFun = [];
                for (let elem of data.functions) {
                    let nameNewFunc = elem.match("^.?(?=\\()")[0];
                    let isFunc = elem.match("\\b^[^() ]+\\((.*)\\) *=(.+)$");
                    parserVar.evaluate(elem);
                    let valueNewFunc = isFunc[2];
                    let func = new PersonnalFunction(nameNewFunc, elem, valueNewFunc);
                    resultFun.push(func)

                }

                setAllFunctions(resultFun)
                setAllVariables(resultVar)

                setIsFinishedGetDb(true)
            }
        )


    },[])


    function addOneVariable(val) {
        setAllVariables(allVariables.concat(val))
    }

    function addOneFunction(val) {
        setAllFunctions(allFunctions.concat(val))
    }

    function deleteGraph(i) {


        let allDataGraphVar = Object.assign({}, allDataGraph);
        delete allDataGraphVar[i];
        setAllDataGraph(Object.values(allDataGraphVar));
    }

    function onClickDeleteFunction(i,expression) {
        let allFunctionsVar = allFunctions.slice();
        parserVar.remove(allFunctions[i].expression)
        allFunctionsVar.splice(i, 1)
        setAllFunctions(allFunctionsVar);

        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
                variable: expression,
            }),

        };
        fetch(`${window.url}/mysuperday/api/calculatrice/deletefunction`, requestOptions).then((res) => {
            return res.json()
        }).then((data) => {

        })

    }

    function onClickDeleteVariable(i,expression) {

        let allVariablesVar = allVariables.slice();
        parserVar.remove(allVariables[i].expression)
        allVariablesVar.splice(i, 1)
        setAllVariables(allVariablesVar);

        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),
            body: JSON.stringify({
                id_user: encodeURI(JSON.parse(window.localStorage.getItem('users')).id),
                variable: expression,
            }),

        };
        fetch(`${window.url}/mysuperday/api/calculatrice/deleteVariable`, requestOptions).then((res) => {
            return res.json()
        }).then((data) => {

        })

    }


    return (

        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={2} className={classes.gridFunction}>

                <List>
                    <ModalAddFunctionOrVariable isFinishedGetDb={isFinishedGetDb} authService={props.authService}
                                                allFunctions={allFunctions}
                                                isFunction={1}
                                                classes={classes} parserVar={parserVar}
                                                addOneFunction={addOneFunction}/>


                    {

                        allFunctions.map((item, i) =>

                            <ListItem key={i.toString()} className={classes.listVarAndFun}>

                                <ListItemIcon>
                                    <DeleteIcon onClick={() => {

                                        onClickDeleteFunction(i,item.expression)
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
                        <CalculInterface parserVar={parserVar}
                                         allFunctions={allFunctions} allVariables={allVariables}
                                         setIsCalcul={setIsCalcul} classes={classes}/>
                        :

                        <GraphicInterface deleteGraph={deleteGraph} setAllDataGraph={setAllDataGraph}
                                          allDataGraph={allDataGraph} setIsCalcul={setIsCalcul} parserVar={parserVar}
                                          allFunctions={allFunctions} classes={classes}/>}
                </Paper>
            </Grid>
            <Grid item xs={2} className={classes.gridVariable}>
                <ModalAddFunctionOrVariable  isFinishedGetDb={isFinishedGetDb} parserVar={parserVar}
                                            allVariables={allVariables} isFunction={0} classes={classes}
                                            addOneVariable={addOneVariable}>

                </ModalAddFunctionOrVariable>
                {
                    allVariables.map((item, i) =>

                        <ListItem key={i.toString()} className={classes.listVarAndFun}>

                            <ListItemIcon>
                                <DeleteIcon onClick={() => {
                                    onClickDeleteVariable(i,item.expression)
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