import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    body:{
        backgroundColor:' rgb(125,0,125)',
    },
    buttonParticularTown:{
        marginLeft:'15px',
    },

    svg: {
        '& svg [id~=ville]': {
            fill: "#efebe9",
            strokeWidth: 2,
            stroke:'black',
        },
        '& svg :not([id~=ville]):hover': {
            fill: theme.palette.primary.dark,
        },
        "& svg :not([id~=ville]) ": {

            fill:theme.palette.primary.light,
            stroke: 'white',
            strokeWidth: 2,

        },

    },
    paperParticularTown:{
        height:'100%',
        padding:'10px 10px 10px 10px'
    }


}));

export default useStyles;





