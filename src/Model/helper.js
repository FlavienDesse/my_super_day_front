import CheckConnected from "../Controller/CheckConnected";

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
    isConnected() {

        return CheckConnected().then((res) => {
            return res
        })
    },
    deconnected() {
        delete this.currentUser
        window.localStorage.clear();
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