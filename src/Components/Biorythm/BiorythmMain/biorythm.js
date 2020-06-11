import React, {useEffect} from "react";
import useStyles from "./style";
import {Line} from 'react-chartjs-2';
import {annotation} from 'chartjs-plugin-annotation'
import Grid from "@material-ui/core/Grid";
import Chart from 'chart.js';


const Biorythm = () => {
    let label = [];
    let date = new Date();
    const [chartData, setChartData] = React.useState({});

    const numDaySinceBirth = 7603
    let numDayDisplay = 30;

    date.setDate(date.getDate() - numDayDisplay / 2);
    for (let i = 0; i < numDayDisplay; i++) {

        date.setDate(date.getDate() + 1);
        let copyDate = new Date(date.getTime());
        let day = copyDate.getUTCDate();
        let month = copyDate.getUTCMonth() + 1;

        label.push(day + '/' + month);

    }


    const classes = useStyles();


    const chart = () => {
        setChartData({
            labels: label,

            datasets: [{
                pointRadius: 0,
                label: "Physique",
                function: function (x) {

                    return 100 * Math.sin((2 * Math.PI * ((x % 23)) / 23))

                },
                borderColor: "rgba(192, 0, 0, 1)",
                data: [],
                fill: false
            },
                {
                    pointRadius: 0,
                    label: "Emotionnel",
                    function: function (x) {


                        return 100 * Math.sin((2 * Math.PI * ((x % 28)) / 28))
                    },
                    borderColor: "rgba(0, 192, 0, 1)",
                    data: [],
                    fill: false
                },
                {
                    pointRadius: 0,
                    label: "Intellectuel",
                    function: function (x) {

                        return 100 * Math.sin((2 * Math.PI * ((x % 33)) / 33))
                    },
                    borderColor: "rgba(0, 0, 192, 1)",
                    data: [],
                    fill: false
                }]
        })
    };


    Chart.pluginService.register({

        beforeUpdate: function (chart) {
            var data = chart.config.data;
            for (var i = 0; i < data.datasets.length; i++) {
                for (var j = 0; j < data.labels.length; j++) {
                    let res = numDaySinceBirth + j - numDayDisplay / 2
                    var fct = data.datasets[i].function;
                    var y = fct(res);
                    data.datasets[i].data.push(y);
                }
            }
        }
    });
    useEffect(() => {
        chart();
    }, []);


    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                <Grid item md={8} sm={12}>

                    <Line style={{width: "100%"}} data={chartData} options={{
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
                                value: Math.round(numDayDisplay / 2 - 1),
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


                </Grid>
                <Grid item md={4}  sm={12} className={classes.annotationTexte}>

                    <p>Votre biorythme <span className={classes.annotationTextPhysique}> Physique </span> est à <span
                        className={classes.annotationTextPhysique}> {Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth - 1) % 23) / 23)))}%</span>
                    </p>
                    <p>Votre biorythme <span className={classes.annotationTextEmotionnel}> Emotionnel </span>est à <span
                        className={classes.annotationTextEmotionnel}> {Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth - 1) % 28) / 28)))}%</span>
                    </p>
                    <p>Votre biorythme <span className={classes.annotationTextIntellectuel}> Intellectuel </span> est
                        à <span
                            className={classes.annotationTextIntellectuel}> {Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth - 1) % 33) / 33)))}%</span>
                    </p>
                </Grid>
            </Grid>


        </div>

    );
}

export default Biorythm;