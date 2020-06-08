import React, {useEffect} from "react";
import useStyles from  './style'


function callTrad(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify( {
            text:props.text,
            langCible:props.langCible,
        }),

    };
    fetch(`http://localhost:9000/traducteur`, requestOptions)
        .then(response =>{response.json()
            .then(data => {
                props.setTraduction(data.trad);
            })
        })
}

function TraductorMain(){
    const classes = useStyles();
    let langCible = "en"
    let text="J'aime la france";
    const [traduction,setTraduction]=React.useState("");

    useEffect(()=>{
        callTrad({
            langCible:langCible,
            text:text,
            setTraduction:setTraduction,
        }
    )}, [langCible, text]
    );


    return (
        <div className={classes.container}>
            Traduction : {traduction}
        </div>
    )
}

export default TraductorMain;