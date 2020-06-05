import React from "react";

function traductorMain(){
    let langCible = "eng"
    function callTrad() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body :{
                text:"Alors Alex c'est certe un dieu , mais wollah il est bg ce batard"
            }
        };
        fetch(`http://localhost:9000/Traductori?lang=${langCible}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    callTrad();
    return (
        <div>
            Le caca c'est dur mais bon
        </div>
    )
}