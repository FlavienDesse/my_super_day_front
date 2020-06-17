import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: '10px',
        backgroundColor: 'lavender',
    },
    buttonClose: {
        transform: 'translate(5px,10px)',
        position: 'absolute',


    },
    day: {
        margin: '0',
    },
    table: {

        [theme.breakpoints.down('lg')]: {
            tableLayout: 'fixed',
            width: '1250px !important',
        },
        '&  td:nth-child(n):not(:last-child) ': {
            borderRight: '2px solid rgba(200,200,200)',
        },
        '&  th:nth-child(n):not(:last-child) ': {
            borderRight: '2px solid rgba(200,200,200)',
        },
        '&  th:nth-child(n):not(:first-child) ': {
            borderBottom: '2px solid rgba(200,200,200)',
        },

    },

    red: {
        color: 'red',
    },

    tabBody: {

        '& > :nth-child(odd)': {
            backgroundColor: theme.palette.primary.light,
        },
    },


    tableCellTemperature: {
        whiteSpace: 'nowrap',
        padding: '0px !important',

    },
    container: {
        padding: '10px 10px 10px 10px',
    },
    title: {
        overflow: 'hidden',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
    },
}));

export default useStyles;





