export const repository = {
    saveToken(token: string, tokenDeathTime: number) {
        let tokenLS = {
            token, tokenDeathTime
        }
        let stateAsString = JSON.stringify(tokenLS);
        localStorage.setItem("token", stateAsString);
    },
    getToken() {
        debugger
        let getTokenFromLS: any = localStorage.getItem("token");
        if (getTokenFromLS != null) {
            getTokenFromLS = JSON.parse(getTokenFromLS);
            let dateToken = new Date().getMilliseconds()
            if (getTokenFromLS.tokenDeathTime<dateToken) {
                console.log(getTokenFromLS)
                return getTokenFromLS.token
            }
        }

        return null
    }
}



