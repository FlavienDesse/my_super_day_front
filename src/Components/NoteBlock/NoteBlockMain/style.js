import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    gridContainer:{
        marginTop:'50px !important',
        marginBottom:'100px !important',
    },
    gridContainerSavedNote:{
        marginTop:'15px !important',
    },
    inputSaveFile:{
        width:'100%',

    },
    gridContainerModal:{
        marginTop:'15px',
    },

    title:{
        textAlign:'center',
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width:350,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    editIcon:{
        fill: 'rgba(255,140,0)'
    }
}));

export default useStyles;





