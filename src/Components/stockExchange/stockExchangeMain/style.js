import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '50px',
    },

    data:{
        borderRight:'2px dashed grey',
    },

    shareTitle: {
        height: '20px',
        color: "black",
        fontFamily: "Verdana",
        fontSize: 30,
        marginLeft: "30px",
    },

    infoTitle:{
        marginBottom: "-10px",
        height: '30px',
        color: "grey",
        marginLeft: "30px",
        fontWeight: "bold",
        fontFamily: "Verdana",
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





