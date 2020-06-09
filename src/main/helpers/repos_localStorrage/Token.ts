export const repository = {
    saveToken(token: string, tokenDeathTime: number) {
        let tokenLS = {
            token, tokenDeathTime
        }
        let stateAsString = JSON.stringify(tokenLS);
        localStorage.setItem("token", stateAsString);
    },
    getToken() {
        let getTokenFromLS: any = localStorage.getItem("token");
        if (getTokenFromLS != null) {
            getTokenFromLS = JSON.parse(getTokenFromLS);
            let dateToken = new Date().getTime()
            if (getTokenFromLS.tokenDeathTime>dateToken) {
                console.log("Token is valid")
                return getTokenFromLS.token
            }
        }

        return null
    }
}



