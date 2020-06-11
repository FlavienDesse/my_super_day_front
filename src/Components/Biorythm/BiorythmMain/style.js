import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    annotationTexte : {
        marginTop: '60px',
        fontWeight:'bold',
        fontSize:'1.5em'
    },
    annotationTextPhysique:{
        color:'red',
    },
    annotationTextEmotionnel:{
        color:'green',
    },
    annotationTextIntellectuel:{
        color:'blue',
    },

}));

export default useStyles;