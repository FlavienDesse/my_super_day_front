import React from "react";
import useStyles from "./style";
import {Line} from 'react-chartjs-2';
import {annotation} from 'chartjs-plugin-annotation'
import Grid from "@material-ui/core/Grid";
import Chart from 'chart.js';


const numDaySinceBirth = 7603
const xValue = []
const Biorythm = () => {
    let label = [];
    let date = new Date();
    const numDayDisplay = 365;
    date.setDate(date.getDate() - numDayDisplay/2);
    for (let i = 0; i < numDayDisplay; i++) {
        date.setDate(date.getDate() + 1);
        let copyDate = new Date(date.getTime());
        let day = copyDate.getUTCDate();
        let month = copyDate.getUTCMonth() + 1;

        label.push(day + '/' + month);
    }


    const classes = useStyles();




    var data = {
        labels: label,

        datasets: [{
            label: "Physique",
            function: function (x) {

                return 100 * Math.sin((2 * Math.PI * ((x % 23)) / 23))

            },
            borderColor: "rgba(192, 0, 0, 1)",
            data: [],
            fill: false
        },
            {
                label: "Emotionnel",
                function: function (x) {


                    return 100 * Math.sin((2 * Math.PI * ((x % 28)) / 28))
                },
                borderColor: "rgba(0, 192, 0, 1)",
                data: [],
                fill: false
            },
            {
                label: "Intellectuel",
                function: function (x) {

                    return 100 * Math.sin((2 * Math.PI * ((x % 33)) / 33))
                },
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
                    let res = numDaySinceBirth + j-15
                    var fct = data.datasets[i].function;
                    var y = fct(res);
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

                    <div style={{width: "100%"}}>
                        <Line data={data} options={{
                            sampleSize: 50000,
                            responsive: true,
                            title: {text: 'Votre biorythme actuel', display: true},
                            annotation: {
                                annotations: [{
                                    drawTime: 'afterDraw', // overrides annotation.drawTime if set
                                    id: 'a-line-1', // optional
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x-axis-0',
                                    value: '15',
                                    borderColor: 'black',
                                    borderWidth: 3,
                                }]
                            },

                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            stepSize: 0.5,
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }
                                ],
                                xAxes: [

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