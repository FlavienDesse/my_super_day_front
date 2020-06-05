import React, {useState, useEffect} from "react";
import useStyles from "./style";
import {Line} from 'react-chartjs-2';
import classes from './style'
import Grid from "@material-ui/core/Grid";
import Chart from 'chart.js';

const numDaySinceBirth = 2700

const Biorythm = () => {
    let label = [];
    let date = new Date();
    date.setDate(date.getDate()-15)
    for (let i = 0 ; i <30 ; i++ ){
        date.setDate(date.getDate()+1);
        let copyDate = new Date(date.getTime());
        let day  = copyDate.getUTCDate();
        let month = copyDate.getMonth()+1;

        label.push(day + '/' + month);
    }


    const classes = useStyles();

    const [chartData, setChartData] = useState({})

    function numDiffDay(day,month,year) {
        if (Math.abs(jour_actuel - day)<16){
            return(day-jour_actuel)
        }
        else {
            if (mois_actuel - month == 1|| mois_actuel - month == -11){
                return (-getDaysInMonth(month,year)+Math.abs(jour_actuel-day))
            }
            else if(mois_actuel - month== -1|| mois_actuel - month == 11){ /*condition non nécessaire mais mieux pour expliquer */
                return(getDaysInMonth(month,year)-Math.abs(jour_actuel-day))
            }

        }





    }

    var data = {
        labels: label,
        datasets: [{
            label: "Physique",
            function: function(x) {

                let day = x.match("[0-9]+(?=\\/)");
                let month = x.match("(?<=\\/)[0-9]+");

                let numberDiffDay = 0


                let res=numDaySinceBirth+numDiffDay
                //console.log(res)
                return 100*Math.sin((2*Math.PI*((res%23))/23))

            },
            borderColor: "rgba(192, 0, 0, 1)",
            data: [],
            fill: false
        },
            {
                label: "Emotionnel",
                function: function(x) {

                    let res=x+numDaySinceBirth-new Date().getDay()
                    return 100*Math.sin((2*Math.PI*((res%28))/28))
                },
                borderColor: "rgba(0, 192, 0, 1)",
                data: [],
                fill: false
            },
            {
                label: "Intellectuel",
                function: function(x) {
                    let res=x+numDaySinceBirth-new Date().getDay()
                    return 100*Math.sin((2*Math.PI*((res%33))/33))
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