import React, {useState, useEffect} from "react";
import useStyles from "./style";
import {Line} from 'react-chartjs-2';
import classes from './style'
import Grid from "@material-ui/core/Grid";
import Chart from 'chart.js';


const Biorythm = () => {

    const classes = useStyles();

    const [chartData, setChartData] = useState({})

    var data = {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
        datasets: [{
            label: "f(x) = Physique",
            function: function(x) { return 100*Math.sin((2*Math.PI*((x+21252%23))/23)) },
            borderColor: "rgba(192, 0, 0, 1)",
            data: [],
            fill: false
        },
            {
                label: "f(x) = Emotionnel",
                function: function(x) { return 100*Math.sin((2*Math.PI*((x+21252%28))/28))	 },
                borderColor: "rgba(0, 192, 0, 1)",
                data: [],
                fill: false
            },
            {
                label: "f(x) = Intellectuel",
                function: function(x) { return 100*Math.sin((2*Math.PI*((x+21252%33))/33)) },
                borderColor: "rgba(0, 0, 192, 1)",
                data: [],
                fill: false
            }]
    };



    Chart.pluginService.register({
        beforeInit: function(chart) {
            var data = chart.config.data;
            for (var i = 0; i < data.datasets.length; i++) {
                for (var j = 0; j < data.labels.length; j++) {
                    var fct = data.datasets[i].function,
                        x = data.labels[j],
                        y = fct(x);
                    data.datasets[i].data.push(y);
                }
            }
        }
    });




    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                    <div style={{ width: "100%"}}>
                        <Line  data={data} options={{
                            sampleSize:50000,
                            responsive: true,
                            title: {text: 'Votre biorythme actuel', display: true},
                            scales : {
                                yAxes: [
                                    {
                                        ticks: {
                                            stepSize:0.5,
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }
                                ],
                                xAxes:[
                                    {
                                       gridLines: {
                                           display: true
                                       }
                                    }
                                ]
                            }

                        }}/>
                    </div>
                </Grid>

            </Grid>


        </div>
    );
}

export default Biorythm;