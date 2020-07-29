import {CardType, UserFavoriteDecksType, UserFavoriteDeckType, UserType} from "../../types/entities";

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
                return objGetTokenFromLS.token
            }
        }
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
            let objGetIDFromLS = JSON.parse(getIDFromLS) as JSONObjectType;
            return objGetIDFromLS.user_id;
        }
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

    _isUnknownUser(userId: string | null) {
        if (!userId) {
            return 'unknown'
        }
        return userId
    },

    get_UserFavoriteDecksFromLS(userId: string | null) {
        userId = this._isUnknownUser(userId);

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

    updateUserFavoriteDeck(userId: string | null, favoriteDeckId: string, deckName: string | null, deck: Array<CardType>) {
        userId = this._isUnknownUser(userId);

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

    delUserFavoriteDeck(userId: string | null, favoriteDeckId: string) {
        userId = this._isUnknownUser(userId);

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
                                    deckName: 'empty',
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

    createUserFavoriteDecks(userId: string | null) {
        userId = this._isUnknownUser(userId);

        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const userFavoriteDecks = allFavoriteDecks.find(ufd => ufd.userId === userId);

            if (!userFavoriteDecks) {

                allFavoriteDecks = [
                    ...allFavoriteDecks,
                    {
                        userId,
                        favoriteDecks: [
                            {favoriteDeckId: 'favoriteDeckSlot0', deckName: 'React Native', deck: [
                                    {
                                        answer: 'a1',
                                        question: 'q1',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a830"
                                    },
                                    {
                                        answer: 'a2',
                                        question: 'q2',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a831"
                                    },
                                    {
                                        answer: 'a3',
                                        question: 'q3',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a832"
                                    },
                                    {
                                        answer: 'a4',
                                        question: 'q4',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a833"
                                    },
                                    {
                                        answer: 'a5',
                                        question: 'q5',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a834"
                                    },
                                    {
                                        answer: 'a6',
                                        question: 'q6',
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a835"
                                    },
                                ]},
                            {favoriteDeckId: 'favoriteDeckSlot1', deckName: 'empty', deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot2', deckName: 'empty', deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot3', deckName: 'empty', deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot4', deckName: 'empty', deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot5', deckName: 'empty', deck: []},
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
                        {favoriteDeckId: 'favoriteDeckSlot0', deckName: 'React Native', deck: [
                                {
                                    answer: 'a1',
                                    question: 'q1',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a830"
                                },
                                {
                                    answer: 'a2',
                                    question: 'q2',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a831"
                                },
                                {
                                    answer: 'a3',
                                    question: 'q3',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a832"
                                },
                                {
                                    answer: 'a4',
                                    question: 'q4',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a833"
                                },
                                {
                                    answer: 'a5',
                                    question: 'q5',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a834"
                                },
                                {
                                    answer: 'a6',
                                    question: 'q6',
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a835"
                                },
                            ]},
                        {favoriteDeckId: 'favoriteDeckSlot1', deckName: 'empty', deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot2', deckName: 'empty', deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot3', deckName: 'empty', deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot4', deckName: 'empty', deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot5', deckName: 'empty', deck: []},
                    ]
                }
            ]
        }
        localStorage.setItem('allFavoriteDecks', JSON.stringify(allFavoriteDecks));
    },

    _setDefaultDeck() {
        let defaultDeck = {
            favoriteDeckId: 'favoriteDeckSlot0',
            deckName: 'React Native',
            deck: [
                {
                    answer: "5",
                    grade: 0,
                    question: "4",
                    shots: 0,
                    _id: "5f0edc15adc449000476a830"
                },

                {
                    answer: "no answerutyjtyj",
                    grade: 0,
                    question: "no question",
                    shots: 0,
                    _id: "5f0c30b4d1c4700004fe4c9e",
                },


                {
                    answer: "no answer",
                    grade: 0,
                    question: "no question",
                    shots: 0,
                    _id: "5f0c2f99d1c4700004fe4c9d"
                },

                {
                    answer: "no answer",
                    grade: 0,
                    question: "no question",
                    shots: 0,
                    _id: "5f0c2f96d1c4700004fe4c9c",
                },

                {
                    answer: "no answer",
                    grade: 0,
                    question: "no question",
                    shots: 0,
                    _id: "5f0c2d9dd1c4700004fe4c9b",
                },

                {
                    answer: "no answer",
                    grade: 0,
                    question: "no question",
                    shots: 0,
                    _id: "5f0c1942d1c4700004fe4c97",
                },

                {
                    answer: "3333",
                    grade: 0,
                    question: "1233",
                    shots: 0,
                    _id: "5f0c179ed1c4700004fe4c96",
                },

                {
                    answer: "123",
                    grade: 0,
                    question: "123",
                    shots: 0,
                    _id: "5f0c0b8ed1c4700004fe4c94"
                }
            ]
        } as UserFavoriteDeckType;

        localStorage.setItem('defaultDeck', JSON.stringify(defaultDeck));
    },

    getDefaultDeck() {
        let defaultDeck: string | null = localStorage.getItem('defaultDeck');

        if (!defaultDeck) {
            this._setDefaultDeck();
            defaultDeck = localStorage.getItem('defaultDeck');
        }

        if (defaultDeck) {
            return JSON.parse(defaultDeck) as UserFavoriteDeckType
        }
    }
};






