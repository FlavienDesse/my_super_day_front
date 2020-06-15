function authHeader() {
    const user = JSON.parse(window.localStorage.getItem('users'));

    if (user && user.accessToken) {
        // for Node.js Express back-end
        return {'x-access-token': user.accessToken};
    } else {
        return {};
    }
}

export default function getUserBoard() {

    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${window.url}/mysuperday/api/users/verifyToken`, requestOptions)

        .then(response => {
               return response.json()
                    .then(data => {
                        console.log(data)
                        if(response.status===403 ||response.status===401||response.status===500 ){
                            return false;
                        }
                        return true;
                    })
            }
        )


}
