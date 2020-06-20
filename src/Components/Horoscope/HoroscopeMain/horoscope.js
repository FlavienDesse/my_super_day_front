import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";
import {authHeader} from "../../../Controller/CheckConnected";

export function Horoscope() {
    const classes = useStyles();


    const [allData, setAllData] = React.useState({});
    const [isFinished, setIsFinished] = React.useState(false)


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: Object.assign({}, authHeader(), {'Content-Type': 'application/json'}),

        };

        fetch(`${window.url}/mysuperday/api/horoscope/getAllType`,requestOptions).then((res) => {

            return res.json()
        }).then((data) => {
            setAllData(data)
            setIsFinished(true)
        });
    }, [])
    return (
        <Grid container className={classes.container}>


                {
                    isFinished ?

                        allData.map((item =>(
                            <div className={classes.horoscope} key={item.sunsign}>
                                <Grid item xs={12}  className={classes.titleHoroscope}>

                                        {item.sunsign}

                                </Grid>
                                <Grid item xs={12}>
                                    {item.horoscope}
                                </Grid>
                            </div>
                        )))



                        :
                        <CircularProgress/>
                }



        </Grid>
    );
}
