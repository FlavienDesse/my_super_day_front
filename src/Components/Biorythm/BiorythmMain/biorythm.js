import React, {useState, useEffect} from "react";
import useStyles from "./style";
import {Line} from 'react-chartjs-2';
import classes from './style'
import Grid from "@material-ui/core/Grid";
import Chart from 'chart.js';

const numDaySinceBirth = 7602
const xValue = []
const Biorythm = () => {
    let label = [];
    let date = new Date();
    date.setDate(date.getDate()-15)
    for (let i = 0 ; i <30 ; i++ ){
        date.setDate(date.getDate()+1);
        let copyDate = new Date(date.getTime());
        let day  = copyDate.getUTCDate();
        let month = copyDate.getMonth()+1;
        let year = copyDate.getFullYear()+1;

        xValue.push({
            day : day,
            month : month,
            year : year
        })
        label.push(day + '/' + month );
    }


    const classes = useStyles();

    const [chartData, setChartData] = useState({})



    var getDaysInMonth = function(month,year) {
        // Here January is 1 based
        //Day 0 is the last day in the previous month
        return new Date(year, month+1, 0).getDate();
        // Here January is 0 based
        // return new Date(year, month+1, 0).getDate();
    };


    function numDiffDay(day,month,year) {
        const actualDate = new Date();
        const actualDay = actualDate.getDay();
        const actualMonth = actualDate.getMonth()+1;
        if (Math.abs(actualDay - day)<16){
            return(day-actualDay)
        }
        else {
            if (actualMonth - month == 1|| actualMonth - month == -11){
                return (-getDaysInMonth(month,year)+Math.abs(actualDay-day))
            }
            else if(actualMonth - month== -1|| actualMonth - month == 11){ /*condition non nécessaire mais mieux pour expliquer */
                return(getDaysInMonth(month,year)-Math.abs(actualDay-day))
            }

        }





    }

    var data = {
        labels: label,
        datasets: [{
            label: "Physique",
            function: function(x) {

                return 100*Math.sin((2*Math.PI*((x%23))/23))

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

                    let day = xValue[j].day;
                    let month = xValue[j].month;
                    let year = xValue[j].year;
                    let res = numDaySinceBirth + numDiffDay(day, month, year)

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