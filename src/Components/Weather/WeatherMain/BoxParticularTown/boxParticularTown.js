import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import 'moment/locale/fr';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';



function ArrayTemperature(props) {

    return (
        <Grid container>
            <Grid item xs={6}>
                Matin
            </Grid>
            <Grid item xs={6}>
                Soir
            </Grid>
            <Grid item xs={6} style={{color : props.couleur(props.data.temperature.morn),fontWeight:"bold", }}>
                {props.data.temperature.morn}°C
            </Grid>
            <Grid item xs={6}  style={{color : props.couleur(props.data.temperature.morn),fontWeight:"bold", }}>
                {props.data.temperature.eve}°C
            </Grid>
        </Grid>
    )
}




export default function BoxParticularTown(props) {
    moment.locale('fr')
    let data = props.item.finished ? props.item.data.daily : new Array(7).fill(0) ;

    const classes = useStyles();
    const actualDate = moment();
    return (
        <Paper elevation={3} className={classes.paper}>
            <div onClick={()=>props.deleteTown(props.i)} className={classes.buttonClose}>
                <HighlightOffSharpIcon/>
            </div>

            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.table} size="small">
                            <TableHead className={classes.tabHead}>
                                <TableRow>
                                    <TableCell>

                                        <Typography variant="h5" component="h1" className={classes.title}>
                                            {props.item.name}
                                        </Typography>
                                    </TableCell>

                                    {
                                        data.map((item,i)=>(

                                            <TableCell align="center" key={i.toString()}>
                                                <p className={classes.day}>  {i === 0 ? "Aujourd'hui" : actualDate.add(1, 'days').format('dddd').charAt(0).toUpperCase() + actualDate.format('dddd').slice(1)}  </p>
                                                {
                                                    props.item.finished ?
                                                     <img alt={"Chargement"} src={'http://openweathermap.org/img/wn/'+item.weather.icon+'@2x.png'} width='50' height='50'/>
                                                        :
                                                        props.item.error ?
                                                            <span className={classes.red}>  Erreur de chargement</span>
                                                         :
                                                            <CircularProgress size={20} />
                                                }

                                               </TableCell>

                                        ))
                                    }


                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tabBody}>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Température
                                    </TableCell>
                                    {
                                        data.map((item,i)=>(
                                            <TableCell align="center" scope="row" className={classes.tableCellTemperature} key={i.toString()}>
                                                {
                                                    props.item.finished ?
                                                        <ArrayTemperature couleur={props.couleur} data={item}>
                                                        </ArrayTemperature>
                                                        :
                                                        props.item.error ?
                                                            <span className={classes.red}>  Erreur de chargement</span>:
                                                        <CircularProgress size={20} />

                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>


                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Humidité
                                    </TableCell>
                                    {
                                        data.map((item,i)=>(
                                            <TableCell align="center" scope="row" className={classes.tableCellTemperature} key={i.toString()}>
                                                {
                                                    props.item.finished ?
                                                        item.humidity+ " %"
                                                        :
                                                        props.item.error ?
                                                            <span className={classes.red}> Erreur de chargement</span>:
                                                            <CircularProgress size={20} />
                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>


                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nuage
                                    </TableCell>
                                    {
                                        data.map((item,i)=>(
                                            <TableCell align="center" scope="row" className={classes.tableCellTemperature} key={i.toString()}>
                                                {
                                                    props.item.finished ?
                                                        item.cloud + " %"
                                                        :
                                                        props.item.error ?
                                                            <span className={classes.red}>  Erreur de chargement</span>:
                                                            <CircularProgress size={20} />
                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>


                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Vitesse du vent
                                    </TableCell>
                                    {
                                        data.map((item,i)=>(
                                            <TableCell align="center" scope="row" className={classes.tableCellTemperature} key={i.toString()}>
                                                {
                                                    props.item.finished ?
                                                        item.windSpeed + " m/s"
                                                        :
                                                        props.item.error ?
                                                            <span className={classes.red}>  Erreur de chargement</span>:
                                                            <CircularProgress size={20} />
                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>




                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )

}