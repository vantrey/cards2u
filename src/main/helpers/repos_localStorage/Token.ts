import {CardPackType, CardType, UserFavoriteDecks, UserType} from "../../types/entities";

type JSONObjectType = {
    tokenDeathTime: number,
    token: string | null
    user_id: string
    user: UserType
};

export const repository = {
    saveToken(token: string | null, tokenDeathTime: number) {
        let tokenLS = {
            token, tokenDeathTime
        };
        let stateAsString = JSON.stringify(tokenLS);
        localStorage.setItem("token", stateAsString);
    },
    getToken() {
        let getTokenFromLS: string | null = localStorage.getItem("token");
        if (getTokenFromLS != null) {
            let objGetTokenFromLS = JSON.parse(getTokenFromLS) as JSONObjectType;
            let dateToken = new Date().getTime();
            if (objGetTokenFromLS.tokenDeathTime > dateToken) {
                console.log("Token is valid");
                return objGetTokenFromLS.token
            }
        }
        console.log('token not valid');
        return null
    },
    save_Auth_id(user_id: string | null) {
        let idLS = {
            user_id
        };
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

    save_UserToLS(user: UserType) {

        let users = this._get_UsersFromLS();
        if (users) {
            const existingUser = users.find(u => u._id === user._id);

            if (existingUser) {
                users = users.map(u => {
                    if (user._id === u._id) {
                        return user
                    }
                    return u
                });
            } else {
                users.push(user)
            }

        } else {
            users = [user]
        }
        const userAsString = JSON.stringify(users);
        localStorage.setItem('users', userAsString);
    },

    _get_UsersFromLS() {
        const users: string | null = localStorage.getItem('users');
        if (users) {
            return JSON.parse(users) as Array<UserType>;
        }
        return null;
    },

    get_UserFromLS(userId: string) {
        const users: string | null = localStorage.getItem('users');
        if (users) {
            const usersFromLS = JSON.parse(users) as Array<UserType>;
            const user = usersFromLS.find(u => u._id === userId);
            if (user) return user
        }
        return null;
    },

    get_UserFavoriteDecksFromLS(userId: string) {
        const allFavoriteDecks: string | null = localStorage.getItem('allFavoriteDecks');
        if (allFavoriteDecks) {
            const allFavoriteDecksFromLS = JSON.parse(allFavoriteDecks) as Array<UserFavoriteDecks>;

            const userFavoriteDecks = allFavoriteDecksFromLS.find(ufds => ufds.userId === userId);

            if (userFavoriteDecks) return userFavoriteDecks
        }
        return null;
    },

    _get_AllFavoriteDecksFromLS() {
        const allFavoriteDecks: string | null = localStorage.getItem('allFavoriteDecks');
        if (allFavoriteDecks) {
            return JSON.parse(allFavoriteDecks) as Array<UserFavoriteDecks>;
        }
        return null;
    },

    addUserFavoriteDeck(userId: string, deckColor: string, deckName: string, deck: Array<CardType>) {
        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();
        let updatedUserFavoriteDecks = {} as UserFavoriteDecks;

        if (allFavoriteDecks) {

            const userFavoriteDecks = allFavoriteDecks.find(fd => fd.userId === userId);

            if (userFavoriteDecks) {
                updatedUserFavoriteDecks = {
                    ...userFavoriteDecks,
                    favoriteDecks: [...userFavoriteDecks.favoriteDecks, {deckColor, deckName, deck}]
                } as UserFavoriteDecks;
                allFavoriteDecks.push(updatedUserFavoriteDecks);

            } else {    // if user doesnt have favorite decks
                allFavoriteDecks.push({userId, favoriteDecks: [{deckColor, deckName, deck}]})
            }

        } else {
            allFavoriteDecks = [
                {userId, favoriteDecks: [{deckColor, deckName, deck}]}
            ]
        }

        const updatedAllFavoriteDecksAsString = JSON.stringify(allFavoriteDecks);
        localStorage.setItem('allFavoriteDecks', updatedAllFavoriteDecksAsString);
    },

    delUserFavoriteDeck(userId: string, deckColor: string) {
        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const updatedAllFavoriteDecks = allFavoriteDecks.map(ufds => {
                    if (ufds.userId === userId) {

                        return {
                            ...ufds,
                            favoriteDecks: ufds.favoriteDecks.filter(fd => fd.deckColor === deckColor)
                        }
                    }

                    return ufds
                }
            );

            const updatedAllFavoriteDecksAsString = JSON.stringify(updatedAllFavoriteDecks);
            localStorage.setItem('allFavoriteDecks', updatedAllFavoriteDecksAsString);
        }
    },
};


/*    get_UserFromLS() {
        const getUserLS: string | null = localStorage.getItem('user');
        if (getUserLS) {
            console.log('user is success')
            const objUserFromLS = JSON.parse(getUserLS) as JSONObjectType;
            return objUserFromLS.user
        }
        console.log('not found user');
        return null;
    }*/





