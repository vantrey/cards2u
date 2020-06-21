import {UserType} from "../../types/entities";

type JSONObjectType = {
    tokenDeathTime: number,
    token: string | null
    user_id: string
    user: UserType
}


export const repository = {
    saveToken(token: string | null, tokenDeathTime: number) {
        let tokenLS = {
            token, tokenDeathTime
        }
        let stateAsString = JSON.stringify(tokenLS);
        localStorage.setItem("token", stateAsString);
    },
    getToken() {
        let getTokenFromLS: string | null = localStorage.getItem("token");
        if (getTokenFromLS != null) {
            let objGetTokenFromLS = JSON.parse(getTokenFromLS) as JSONObjectType;
            let dateToken = new Date().getTime()
            if (objGetTokenFromLS.tokenDeathTime > dateToken) {
                console.log("Token is valid")
                return objGetTokenFromLS.token
            }
        }
        console.log('token not valid');
        return null
    },
    save_Auth_id(user_id: string) {
        let idLS = {
            user_id
        }
        let idAsString = JSON.stringify(idLS);
        localStorage.setItem("user_id", idAsString);
    },

    get_Auth_id() {
        let getIDFromLS: string | null = localStorage.getItem("user_id");
        if (getIDFromLS) {
            console.log('id received')
            let objGetIDFromLS = JSON.parse(getIDFromLS) as JSONObjectType;
            return objGetIDFromLS.user_id;
        }
        console.log('login error');
        return null;

    },

    save_UserInLS(user: UserType) {
        const userLS = {
            user
        }
        const userAsString = JSON.stringify(userLS);
        localStorage.setItem('user', userAsString);
    },
    get_UserFromLS() {
        const getUserLS: string | null = localStorage.getItem('user');
        if (getUserLS) {
            console.log('user is success')
            const objUserFromLS = JSON.parse(getUserLS) as JSONObjectType;
            return objUserFromLS.user
        }
        console.log('not found user');
        return null;
    }


}



