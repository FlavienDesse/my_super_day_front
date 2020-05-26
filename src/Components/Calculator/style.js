import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
},
  container:{
    padding:2,
    width:350,
  },
  AC:{
    backgroundColor:'red',
  },

}));

export default useStyles;





