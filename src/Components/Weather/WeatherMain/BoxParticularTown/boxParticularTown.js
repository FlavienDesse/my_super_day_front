import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ModelWeather from "../Model/ModelWeather";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment';
import moment from "moment";
import 'moment/locale/fr';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

function ArrayTemperature() {
    return (
       <Grid container>
           <Grid item xs={6} >
               Matin
           </Grid>
           <Grid item xs={6}>
               Aprèm
           </Grid>
           <Grid item xs={6}>
                    15
           </Grid>
           <Grid item xs={6}>
                    26
           </Grid>
       </Grid>
    )
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function BoxParticularTown(props) {
    moment.locale('fr')
    //  https://bdoalex.com/api/meteo?lng=3&lat=50

    const classes = useStyles();
    const actualDate = moment();
    const modelWeather = props.item
    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <TableContainer>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="h5" component="h1" className={classes.title}>
                                            {modelWeather.nameTown}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">aujourd'hui</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                    <TableCell align="center">{actualDate.add(1, 'days').format('dddd')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Température
                                    </TableCell>
                                    <TableCell align="center" scope="row"  className={classes.tableCellTemperature} >
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"    className={classes.tableCellTemperature} >
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"   className={classes.tableCellTemperature}>
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"   className={classes.tableCellTemperature} >
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"  className={classes.tableCellTemperature}>
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"   className={classes.tableCellTemperature} >
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                    <TableCell align="center" scope="row"   className={classes.tableCellTemperature} >
                                        <ArrayTemperature>
                                        </ArrayTemperature>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )

}