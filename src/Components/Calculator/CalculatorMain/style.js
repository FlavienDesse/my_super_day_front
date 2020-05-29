import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  modalContainerButtonValidate:{
    width:'100%',
    textAlign:"center",
  },

  modalTextField:{
    width:'100%',
  },
  listVarAndFun:{
    textAlign:'left',
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
  },
  button:{
    textTransform:"none !important",
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
},
  container:{
    border:'black solid 1px rounded',
    padding:7,

  },
  AC:{
    backgroundColor:'red',
  },

}));

export default useStyles;





