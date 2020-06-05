import React from "react";

function traductorMain(){
    let langCible = ""
    function callTrad() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify( {
                text:"Alors Alex c'est certe un dieu , mais wollah il est bg ce batard",
                langCible:langCible,
            }),

        };
        fetch(`http://localhost:9000/traducteur`, requestOptions)
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

export default traductorMain;