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
    async isConnected() {


        let user = this.currentUser;
        console.log(user)
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
    async deconnected() {
        delete this.currentUser
        await window.localStorage.clear();
        if (this.callback) {
            this.callback(undefined)
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