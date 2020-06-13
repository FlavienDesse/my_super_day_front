
import CheckConnected from "../Controller/CheckConnected";


export const authService = {

    async login(data) {
        localStorage.setItem('users', JSON.stringify(data))
        this.currentUser = data
        if (this.callback) {
            this.callback(data)
        }
    },
    getCurrentUser() {
        return this.currentUser
    },
    isConnected() {

        return CheckConnected().then((res)=>{
            return res
        })
    }

}
try {
    authService.currentUser = JSON.parse(localStorage.getItem('users'))
}
catch (e) {}