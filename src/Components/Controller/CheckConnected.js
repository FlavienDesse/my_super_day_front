function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        // for Node.js Express back-end
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}
export default function getUserBoard() {
    console.log("lol")
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    fetch(`http://localhost:9000/mysuperday/users/verifyToken`, requestOptions)

        .then(response => {
            response.json()
                .then(data => {


                })
        })
}
