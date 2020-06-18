import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '120px !important',
        paddingLeft:'15px'
    },
    grid: {
        '&>:nth-child(-n+2)': {
            borderBottom: '0px solid grey',
        },
        '&>:nth-child(n+3)': {
            paddingTop:'25px'
        },

    },
    gridArrow:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    answer:{
        height:'150px',
    },
    selectLang: {
        width: '100%',

    },
    formControlLang:{
        width: '100%',
    },
    textField: {
        width: '100%',
        height: '100%',
        marginTop:'15px',
    },
    textWantedItem:{

    },


}));

export default useStyles;





