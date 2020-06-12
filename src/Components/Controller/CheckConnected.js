function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

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

    return fetch(`http://localhost:9000/mysuperday/users/verifyToken`, requestOptions)

        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            if (data.isConnected) {
                return true;
            } else {
                return false;
            }

        })


}
