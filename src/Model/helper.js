import {CheckConnected} from "../Controller/CheckConnected";

export const authService = {

    async login(data) {
        window.localStorage.setItem('users', JSON.stringify(data))
        this.currentUser = data
        if (this.callback) {
            this.callback(data)
        }
    },
    getCurrentUser() {
        return this.currentUser
    },
    clear(){
        delete this.currentUser;
        localStorage.setItem('users',JSON.stringify({
            accessToken:"null"
        }))
    },
    async isConnected() {


        let user = this.currentUser;
        if(user){
            if (user.accessToken === "null") {
                delete this.currentUser
                return false
            } else {
                let res = await CheckConnected()
                return res;
            }
        }
        else {
            delete this.currentUser
            return false;
        }

    },


    subscribe(callback) {
        this.callback = callback
        return () => {
            this.callback = undefined
        }
    }

}
try {
    authService.currentUser = JSON.parse(window.localStorage.getItem('users'))
} catch (e) {
}