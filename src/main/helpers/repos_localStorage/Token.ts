import {CardPackType, CardType, UserFavoriteDecksType, UserType} from "../../types/entities";

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
            const allFavoriteDecksFromLS = JSON.parse(allFavoriteDecks) as Array<UserFavoriteDecksType>;

            const userFavoriteDecks = allFavoriteDecksFromLS.find(ufds => ufds.userId === userId);

            if (userFavoriteDecks) return userFavoriteDecks
        }
        return null;
    },

    _get_AllFavoriteDecksFromLS() {
        const allFavoriteDecks: string | null = localStorage.getItem('allFavoriteDecks');
        if (allFavoriteDecks) {
            return JSON.parse(allFavoriteDecks) as Array<UserFavoriteDecksType>;
        }
        return null;
    },

    updateUserFavoriteDeck(userId: string, favoriteDeckId: string, deckName: string, deck: Array<CardType>) {
        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const updatedAllFavoriteDecks = allFavoriteDecks.map(afd => {
                if (afd.userId === userId) {
                    return {
                        userId,
                        favoriteDecks: afd.favoriteDecks.map(fd => {
                            if (fd.favoriteDeckId === favoriteDeckId) {
                                return {
                                    favoriteDeckId,
                                    deckName,
                                    deck
                                }
                            }
                            return fd
                        })
                    }
                }
                return afd
            });

            const updatedAllFavoriteDecksAsString = JSON.stringify(updatedAllFavoriteDecks);
            localStorage.setItem('allFavoriteDecks', updatedAllFavoriteDecksAsString);
        }
    },

    delUserFavoriteDeck(userId: string, favoriteDeckId: string) {
        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const updatedAllFavoriteDecks = allFavoriteDecks.map(afd => {
                if (afd.userId === userId) {
                    return {
                        userId,
                        favoriteDecks: afd.favoriteDecks.map(fd => {
                            if (fd.favoriteDeckId === favoriteDeckId) {
                                return {
                                    favoriteDeckId,
                                    deckName: '',
                                    deck: []
                                }
                            }
                            return fd
                        })
                    }
                }
                return afd
            });

            const updatedAllFavoriteDecksAsString = JSON.stringify(updatedAllFavoriteDecks);
            localStorage.setItem('allFavoriteDecks', updatedAllFavoriteDecksAsString);
        }
    },

    createUserFavoriteDecks(userId: string) {
        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const userFavoriteDecks = allFavoriteDecks.find(ufd => ufd.userId === userId);

            if (!userFavoriteDecks) {

                allFavoriteDecks = [
                    ...allFavoriteDecks,
                    {
                        userId,
                        favoriteDecks: [
                            {favoriteDeckId: '1', deckName: '', deck: []},
                            {favoriteDeckId: '2', deckName: '', deck: []},
                            {favoriteDeckId: '3', deckName: '', deck: []},
                            {favoriteDeckId: '4', deckName: '', deck: []},
                            {favoriteDeckId: '5', deckName: '', deck: []},
                        ]
                    }
                ]
            }
        }

        if (!allFavoriteDecks) {

            allFavoriteDecks = [
                {
                    userId,
                    favoriteDecks: [
                        {favoriteDeckId: '1', deckName: '', deck: []},
                        {favoriteDeckId: '2', deckName: '', deck: []},
                        {favoriteDeckId: '3', deckName: '', deck: []},
                        {favoriteDeckId: '4', deckName: '', deck: []},
                        {favoriteDeckId: '5', deckName: '', deck: []},
                    ]
                }
            ]
        }
        localStorage.setItem('allFavoriteDecks', JSON.stringify(allFavoriteDecks));
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





