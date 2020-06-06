import React from "react";
import Grid from "@material-ui/core/Grid";
import ModalAddGraph from "./modalAddGraph";
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import DeleteIcon from '@material-ui/icons/Delete';

export default function GraphicInterface(props) {

    const classes = props.classes;
    const allDataGraph = props.allDataGraph;
    const setAllDataGraph = props.setAllDataGraph;

    function addData(val) {
        let data = allDataGraph.slice();
        data.push(val);
        setAllDataGraph(data);
    }

    Chart.pluginService.register({
        beforeInit: function (chart) {
            var data = chart.config.data;
            for (var i = 0; i < data.datasets.length; i++) {
                for (var j = 0; j < data.labels.length; j++) {
                    var fct = data.datasets[i].function;

                    let x = data.labels[j];
                    let y = fct(x);
                    data.datasets[i].data.push(y);
                }
            }
        }
    });



    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ModalAddGraph setIsCalcul={props.setIsCalcul} parserVar={props.parserVar} addData={addData}
                               setAllDataGraph={setAllDataGraph}
                               allFunctions={props.allFunctions} classes={classes}>

                </ModalAddGraph>
            </Grid>
            {
                allDataGraph.map((item, i) =>
                    <Grid container className={classes.containerGraph}>
                        <Grid item xs={1}>
                            <DeleteIcon
                                onClick={() => props.deleteGraph(i)}
                            ></DeleteIcon>
                        </Grid>
                        <Grid item xs={11}>
                            <Line data={item} options={{




                            }}>

                            </Line>
                        </Grid>


                    </Grid>
                )
            }
        </Grid>
    )
}