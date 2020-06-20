import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    agenda: {
        marginTop: '50px',
    },
    gridAddEvent: {
        marginTop: '15px',
    },
    buttonAdd: {
        width: '50%',
    },
    timePickerStart: {
        textOverflow: 'ellipsis',
    },

    paper: {
        position: 'absolute',
        textAlign:'center',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
    },
}));

export default useStyles;





