import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  buttonAddGraph:{
    width:'100%',
  },
  listVarAndFun:{
    padding:'5px 0px 0px 0px  !important',
  },
  container:{
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
    },
  },
  modalContainerButtonValidate:{
    width:'100%',
    textAlign:"center",
  },

  modalTextField:{
    width:'100%',
  },

  buttonGroup:{
    position:'absolute',
    zIndex:1,
  },

  result:{
    width:'100%',
  },
  modalButton:{
    textTransform:"none !important",
    width:'100%',
  },
  modalPop: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  button:{
    textTransform:"none !important",
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
},
  containerCalculator:{
    border:'black solid 1px rounded',
    padding:7,


  },
  gridCalculator:{
    [theme.breakpoints.down('md')]: {
      order:3,
      width:'100%',
      maxWidth:'none !important',
    },
  },
  gridFunction:{
    [theme.breakpoints.down('md')]: {
      order:1,
      width:'100%',
      maxWidth:'none !important',
    },
  },
  gridVariable:{
    [theme.breakpoints.down('md')]: {
      order:2,
      width:'100%',
      maxWidth:'none !important',
    },
  },
  AC:{
    backgroundColor:'red',
  },

}));

export default useStyles;





