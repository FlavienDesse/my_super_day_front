import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

function Horoscope(props) {
    const classes = useStyles();


    const [allData, setAllData] = React.useState({});
    const [isFinished, setIsFinished] = React.useState(false)


    useEffect(() => {


        fetch(`http://localhost:9000/mysuperday/api/horoscope/getAllType`).then((res) => {

            return res.json()
        }).then((data) => {
            console.log(data)
            setAllData(data)
            setIsFinished(true)
        });
    }, [])
    return (
        <Grid container>


                {
                    isFinished ?

                        allData.map((item =>(
                            <div className={classes.horoscope}>
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

export default Horoscope;