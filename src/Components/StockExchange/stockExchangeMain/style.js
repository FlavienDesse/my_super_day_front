import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


    gridItem: {
        marginTop:'20px'
    },

    data:{
        borderRight:'2px dashed grey',
    },

    shareTitle: {
        height: '20px',
        color: "#3f51b5",
        fontFamily: "Verdana",
        fontSize: 30,
        marginLeft: "30px",
        marginTop:"0px",
    },

    infoTitle:{
        marginBottom: "-10px",
        height: '30px',
        color: "grey",
        marginLeft: "30px",
        fontWeight: "bold",
        fontFamily: "Verdana",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    paper: {
      backgroundColor: "#EDEDED"
    },

    infoNumber:{
        marginTop: "-10px",
        height: '30px',
        color: "black",
        marginLeft: "30px",
        fontWeight: "bold",
        fontFamily: "Verdana",
    },

    green: {
        color: "green"
    },
    red: {
        color: "red"
    }

}));

export default useStyles;





