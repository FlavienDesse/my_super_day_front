import React from "react";
import {Polar} from 'react-chartjs-2'
import useStyles from "./style";




const numDaySinceBirth = 7036;

const Widget = () => {
    const classes = useStyles();
    const [chartData,setChartData] = React.useState({});
    var config = {
        data: {
            datasets: [{
                data: [
                    Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth-1) % 23) / 23))),
                    Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth-1) % 28) / 28))),
                    Math.round(100 * Math.sin((2 * Math.PI * ((numDaySinceBirth-1) % 33) / 33)))
                ],
                backgroundColor: [
                    "rgba(192,0,0,0.5)",
                    "rgba(0,192,0,0.5)",
                    "rgba(0,0,192,0.5)",
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                'Physique',
                'Emotionnel',
                'Intellectuel'
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Biorythme du jour'
            },
            scale: {
                ticks: {
                    min:-100,
                    max:100,
                },
                reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
        }
    };


    return (
        <div className={classes.container} >
            <Polar data={config.data} options={config.options}>

            </Polar>
        </div>


    )


}
export default Widget;