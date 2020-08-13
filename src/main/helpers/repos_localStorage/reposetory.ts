import {
    CardType,
    CurrentAnalyticsType,
    UserFavoriteDecksType,
    UserFavoriteDeckType,
    UserType
} from "../../types/entities";

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
                                    ...fd,
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
                                    deck: [],
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
                            {
                                favoriteDeckId: 'favoriteDeckSlot0', deckName: 'React Native', cardsCount: 5, deck: [
                                    {
                                        answer: 'Если компонент имеет состояние или значимые методы',
                                        question: 'В каких случаях Class Component лучше, чем Functional Component?',
                                        wrongAnswers: ['В случаях,когда вопрос касаеться производительности', 'Это вопрос религиозный'],
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
                                        answer: 'React.JS refs нужен  что бы «достучаться» к конкретному элементу в DOM.',
                                        question: 'Что такое refs ?',
                                        wrongAnswers: ['Метод жизненного цикла', 'Метонд инициирующий перерндер компоненты'],
                                        cardsPack_id: '0',
                                        grade: 0,
                                        rating: 0,
                                        shots: 0,
                                        type: '',
                                        created: '',
                                        updated: '',
                                        __v: 0,
                                        user_id: '',
                                        _id: "5f0edc15adc449000476a831",
                                    },
                                    {
                                        answer: `Контролируемый компонент обладает своим стейтом,' 
                                            ' управляемый React.Неконтролируемый  обладает внутренним состоянием`,
                                        question: 'Разница между компонентами controlled и uncontrolled?',
                                        wrongAnswers: ['У контролируемого есть методы жизненного цикла', 'В неконтролируемом,нельзя принудительно вызвать метод render'],
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
                                        answer: `Твк, чтобы провести границу между простыми виртуальными элементами DOM и теми,
		 что являются уникальными.`
                                        ,
                                        question: 'Как React JS Использует Ключи?',
                                        wrongAnswers: ['Использует в качестве ключей индекс массива,и просто сравнивает их', 'React не использует ключи'],
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
                                        answer: 'Потому,что props.children может быть совершенно любым типом данных',
                                        question: 'Почему React.Children.map(props.children, () => ), а не props.children.map(() => )?`',
                                        wrongAnswers: ['Так как props.children всегда приметив,перебрать не получиться без преобразования', 'Вобще никакой разницы'],
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
                                    // {
                                    //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                    //     question: 'Опишите обработку событий в React.JS',
                                    //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a835"
                                    // }, {
                                    //     answer: 'Изменить его props,или использовать метод this.setState',
                                    //     question: 'Как заставить компонент React перерендерится самым простым способом?',
                                    //     wrongAnswers: ['Вызывть метод componentDidMount()', ' Использовать componentWillUnmount()'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a836"
                                    // }, {
                                    //     answer: '\'Переданная функция будет вызвана с текущим состоянием в качестве аргумента',
                                    //     question: 'Что произойдет, если передать функцию в метод setState ?',
                                    //     wrongAnswers: ['Переданная функция будет вызвана со старым состоянием', 'Данный вызов  приведёт к ошибке'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a837"
                                    // }, {
                                    //     answer: `Порталы отображают дочерние элементы в узел DOM,
                                    //        который существует вне иерархии DOM родительского компонента`,
                                    //     question: 'Что такое порталы(Portals)?',
                                    //     wrongAnswers: [`Порталы отображают дочерние элементы в узел DOM,
                                    //        который существует в пределах иерархии DOM родительского
                                    //        компонента,в любом направлении`, `Порталы отображают любые элементы в узел DOM,
                                    //        который существует влюбом месте приложения`],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a838"
                                    // }, {
                                    //     answer: `'Тоже самое, что и Component, кроме того, что автоматически за вас реализует метод
                                    //         shouldComponentUpdate.`,
                                    //     question: ' Что такое Pure Components?',
                                    //     wrongAnswers: ['это базовый класс всех компонентов React"', 'React.PureComponent - это компонент, у которого нет метода render.'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a839"
                                    // }, {
                                    //     answer: `Общее состояние нескольких компонент,которое должно быть поднято до ближайшего общего
                                    //         предка`,
                                    //     question: 'Что такое поднятие состояния вверх по иерархии в React (Lifting State Up)?',
                                    //     wrongAnswers: ['Иными словами,всё помещаеться в общий store,всего приложения', `Обновление состояния дочерних компонентов`],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a840"
                                    // }, {
                                    //     answer: 'React предназначен для работы с "view" частью',
                                    //     question: 'Какую часть шаблона проектирования MVC реализует React.js?',
                                    //     wrongAnswers: ['React - это полноценный MVC-фреймворк', 'React является «контроллером» с точки зрения MVC'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a841"
                                    // }, {
                                    //     answer: 'В React вы не должны использовать какой-либо шаблонизатор. Для рендеринга HTML используется JSX (расширение синтаксиса JS)',
                                    //     question: 'Какой шаблонизатор можно использовать в React?',
                                    //     wrongAnswers: [' EJS', 'HBS'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a842"
                                    // }, {
                                    //     answer: 'shouldComponentUpdate',
                                    //     question: 'Какой метод компонента следует использовать для кастомной логики для реагирования на изменения?',
                                    //     wrongAnswers: ['componentWillUpdate', 'getSnapshotBeforeUpdate'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a843"
                                    // }, {
                                    //     answer: 'функцую обратного вызова для получения нового состояния',
                                    //     question: 'Что можно передать как второй аргумент в метод setState?',
                                    //     wrongAnswers: ['свойства, которые должны быть обновлены', 'предыдущее состояние'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a844"
                                    // }, {
                                    //     answer: 'key',
                                    //     question: 'Какой атрибут обязателен при рендеринге компонентов списка?',
                                    //     wrongAnswers: ['Id', 'index'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a845"
                                    // }, {
                                    //     answer: ' constructor',
                                    //     question: ' Какой метод любого React компонента вызывается первым?',
                                    //     wrongAnswers: ['render', 'componentDidMount'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a846"
                                    // }, {
                                    //     answer: 'Нет. React использует немного другой синтаксис.: onClick={activateLasers}',
                                    //     question: ` Будет ли следующий код обработки события клика работать в React?
                                    //     <button onclick="deleteUser()">
                                    //     Delete user
                                    //        </button>`,
                                    //     wrongAnswers: ['Да. Это правильный синтаксис React.js для обработки событий кликов.',
                                    //         `Этот код впринципе неправильно написан,так как тэг button должен быть самозакрывающийся`],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a847"
                                    // }, {
                                    //     answer: 'метод componentWillReceiveProps объявлен как deprecated',
                                    //     question: 'Какое из этих утверждений относительно props истины?',
                                    //     wrongAnswers: [' React автоматически проверяет переданны ли необходимые props',
                                    //         'дочерний компонент наследует props родительского компонента'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a848"
                                    // }, {
                                    //     answer: 'Используюя метод ReactDOM.render',
                                    //     question: 'Как создать компонент React без наследования класса React.Component?',
                                    //     wrongAnswers: ['Это невозможно. Все компоненты React должны наследовать React.Component', 'Используюя метод React.createElement'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a849"
                                    // }, {
                                    //     answer: `Основными компонентами Flux являются Dispatcher,Stores,Views,Actions`,
                                    //     question: 'Какие факты о Flux истины?',
                                    //     wrongAnswers: [' Flux является частью React', 'React приложение нельзя писать без Flux'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a850"
                                    // }, {
                                    //     answer: ' Это переменная, которая содержит содержимое между открывающим и закрывающим тегами компонента.',
                                    //     question: 'Что такое props.children?',
                                    //     wrongAnswers: ['Это переменная, которая содержит ссылки на дочерние компоненты.', 'Это хранилище ключ-значение всех props, переданных дочерним компонентам'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a851"
                                    // }, {
                                    //     answer: 'text/babel',
                                    //     question: 'Что необходимо прописать в теге script чтобы JSX корректно обрабатывался?',
                                    //     wrongAnswers: ['text/javascript', 'babel/text'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a852"
                                    // }, {
                                    //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                    //     question: 'Опишите обработку событий в React.JS',
                                    //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a853"
                                    // }, {
                                    //     answer: 'var Test = React.createClass ({});',
                                    //     question: 'Где правильно создан компонент?',
                                    //     wrongAnswers: ['var Test = React.createClass ();', 'var Test = React.Class ({});'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a854"
                                    // }, {
                                    //     answer: 'Не более 1',
                                    //     question: 'Сколько родительских элементов можно вывести одновременно?',
                                    //     wrongAnswers: ['Неограниченное количество', 'Не более 3'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a855"
                                    // }, {
                                    //     answer: 'Да, можно',
                                    //     question: 'Можно ли писать не используя Babel?',
                                    //     wrongAnswers: ['Нет, нельзя', 'Можно,но используя альтернативы к примеру Dart от Google'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a856"
                                    // }, {
                                    //     answer: `{this.props.weight}`,
                                    //     question: `Как обратится к свойству weight?
                                    //         <Test weight="203" height="182" />`,
                                    //     wrongAnswers: ['{this.weight}', '{this.prop.weight}'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a857"
                                    // }, {
                                    //     answer: 'Состояния можно изменять, свойства нельзя',
                                    //     question: 'Чем свойства отличаются от состояний?',
                                    //     wrongAnswers: ['Состояния для работы со значениями, свойства для работы с функциями', 'Свойства для работы со значениями, состояния для работы с функциями'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a858"
                                    // }, {
                                    //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                    //     question: 'Опишите обработку событий в React.JS',
                                    //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a859"
                                    // }, {
                                    //     answer: `if(BaseComponent.prototype.isReactComponent){
                                    //          //add props
                                    //                      }`,
                                    //     question: `При создании HOC,как узнать,что оборачиваемый компонент явяеться реакт компонетом
                                    // ,и если нет,как добавить ему новые props?`,
                                    //     wrongAnswers: [`if(WrappedComponent.prototype.isReactComponent){
                                    //                               //add props }`
                                    //         , 'Как обычно передать сверху-вниз'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a860"
                                    // }, {
                                    //     answer: ' Reconciliation (Cверка) - это процесс, посредством которого React обновляет DOM',
                                    //     question: 'Что такое React Reconciliation (Cверка) ?',
                                    //     wrongAnswers: ['Процесс обновления состояния компонент', 'Сверка данных в приложении и тех что пришли с сервера'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a861"
                                    // }, {
                                    //     answer: 'Шаблон компонента соединен с DOM деревом',
                                    //     question: 'Что значит компонент mounted?',
                                    //     wrongAnswers: ['Шаблон компонента соединен с  Virtual DOM деревом', 'Идёт процесс монтирования компоненты в DOM '],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a862"
                                    // }, {
                                    //     answer: 'Если мы передадим функцию, то мы точно будет знать, что стейт основывается на предыдущем состоянии',
                                    //     question: `В setState можно передавать объект или функцию.
                                    //               В чем разница и что лучше использовать?`,
                                    //     wrongAnswers: ['Объект,так как props и state  изменяются строго синхронно', 'Без разницы'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a863"
                                    // }, {
                                    //     answer: `Презентационный - Нужен для создания интерфейса.
                                    //                 Работает на входящих параметрах.
                                    //        Контейнер - обладают состоянием, подключен к Flux или Redux`,
                                    //     question: 'Назовите разницу между Презентационным и Контейнер компонентом?',
                                    //     wrongAnswers: [`Контейнер-Нужен для создания интерфейса.
                                    //                 Работает на входящих параметрах.Презентационный-обладают состоянием, подключен к Flux или Redux`,
                                    //         'В React  все компоненты исключительно являются контэйнерами,так, как это удобно'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a864"
                                    // }, {
                                    //     answer: `Higher-order component (HOC) - функции, у которых входящий параметр компонент.
                                    //          Возвращают новый компонент с добавленным поведением`,
                                    //     question: 'Что такое  Higher-Order компоненты?',
                                    //     wrongAnswers: ['Это аналог Pure Component', 'Класс от которого наследуются все компоненты в приложении'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a865"
                                    // }, {
                                    //     answer: 'Нельзя изменять состояние компонента',
                                    //     question: 'Что нельзя делать в методе render?',
                                    //     wrongAnswers: ['Проводить деструктуризацию входящих пропсов', 'Использовать методы  компоненты'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a866"
                                    // }, {
                                    //     answer: 'Не будет запущен процесс ре-рендеринга',
                                    //     question: 'Почему не стоит изменять state напрямую',
                                    //     wrongAnswers: [`Потому что запуститься бесконечный рэндер', 'Будет перерэндерено все дерево Virtual DOM
                                    //     ,что скажется на производительности`],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a867"
                                    // }, {
                                    //     answer: '[event.target.name]:event.target.value',
                                    //     question: 'Как изменить state используя динамический ключ?',
                                    //     wrongAnswers: ['[event.currentTarget.name]:event.target.value',
                                    //         '[event.currentTarget.name]:event.currentTarget.value'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a868"
                                    // }, {
                                    //     answer: 'Позволяет обрабатывать ошибки в дочерних компонентах',
                                    //     question: 'Что такое Error Boundaries в React?',
                                    //     wrongAnswers: ['Позволяет  обрабатывать ошибки в родительской компонененте', 'Ошибка рэндеринга в React приложении'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a869"
                                    // }, {
                                    //     answer: `createRef - всегда создает новую ссылку. Используется в class компонентах
                                    //     useRef - возвращает одинаковую ссылку на объект`,
                                    //     question: 'В чем разница между useRef и createRef?',
                                    //     wrongAnswers: [`useRef-всегда создает новую ссылку. Используется в class компонентах
                                    //   createRef-возвращает одинаковую ссылку на объект  `,
                                    //         '1-работает только с Virtual DOM,второй только с DOM деревом'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a870"
                                    // },{
                                    //     answer: `Используя Context или  Redux (Flux)`,
                                    //     question: 'Как  избежать  prop drilling?',
                                    //     wrongAnswers: [`Какждый раз создавать локальное состояние,использовать меньше контэйнерных компонент,иметь минимальную вложенность приложения и как можно реже прокидывать пропсы `,
                                    //         'Использовать MVC паттерн'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a871"
                                    // },{
                                    //     answer: `Для модификации проекта (webpack, babel)`,
                                    //     question: 'Зачем делать eject?',
                                    //     wrongAnswers: [`Для избежания падения производительности приложения  `,
                                    //         'Для эффективного тестирования компонент приложения'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a872"
                                    // },{
                                    //     answer: `С этим кодом все хорошо. Изменяем state на основе прошлого состояния и входящих
                                    //       параметров`,
                                    //     question: `Что не так с этим кодом?
                                    //          this.setState((prevProps,props))=>{
                                    //                    return{
                                    //      counter:prevProps.counter+props.counter
                                    //             }
                                    //                  })`,
                                    //     wrongAnswers: [`Вместо prevProps,нужно было указать state  `,
                                    //         'в setState  нужно было передать функцию,что бы работать с текущими пропсами'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a873"
                                    // },{
                                    //     answer: `Повторно использовать код в компонентах`,
                                    //     question: 'Что можно сделать с помощью хуков, чего невозможно добиться, используя классы?',
                                    //     wrongAnswers: [`На хуках приложение работает быстрее,за счёт отсутствия методов жизненого цикла
                                    //       `,
                                    //         'С хуками  не ненужно больше использовать локальное состояние в компоненте'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a874"
                                    // },{
                                    //     answer: ` Простая чистая функция, принимающая state и action и модифицирующая state`,
                                    //     question: 'Что такое reducer?',
                                    //     wrongAnswers: [`Простая чистая функция, принимающая state и action и не модифицирующая state `,
                                    //         'Компонент высшего порядка в которой производяться  запросы с есревера,делаются все сторонние эффекты'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a875"
                                    // },{
                                    //     answer: `Нет.`,
                                    //     question: 'Можно ли использовать хуки и внутри классового компонента?',
                                    //     wrongAnswers: [`Да  `,
                                    //         'Можно,только если классовый компонент являеться контэйнером'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a876"
                                    // },{
                                    //     answer: `Оба подхода всё ещё имеют право на жизнь `,
                                    //     question: `Являются ли хуки заменой рендер-пропсам и компонентам высшего порядка?`,
                                    //     wrongAnswers: [`Да,хуки уменьшают вложенность,и полностью способны заменить HOC и рэндер-пропсы  `,
                                    //         'Нет,хуки выполняют совсем иную роль'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a877"
                                    // },{
                                    //     answer: `Безопасно,если  объявить функции нужные эффекту внутри него`,
                                    //     question: 'Безопасно ли не указывать функции в списке зависимостей useEffect?',
                                    //     wrongAnswers: [`Да,безопасно  `,
                                    //         '`Безопасно,если  объявить функции нужные эффекту сразу после эффекта'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a878"
                                    // },{
                                    //     answer: `Через список ячеек памяти, связанных с каждым компонентом`,
                                    //     question: 'Как React связывает вызовы хуков с компонентом?',
                                    //     wrongAnswers: [`Через useContext  `,
                                    //         'С помощью store'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a879"
                                    // },{
                                    //     answer: `Каждый вызов хука получает изолированное состояние`,
                                    //     question: 'Пользовательский хук получает изолированное состояние',
                                    //     wrongAnswers: [`Состояние для всех пользовательских хуков не изалировано  `,
                                    //         'Да только если его вызов будет обёрнуть в useMemo'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a880"
                                    // },{
                                    //     answer: `useReducer нужен когда следующее состояние зависит от предыдущего`,
                                    //     question: 'Зачем нужен хук useReducer?',
                                    //     wrongAnswers: [`Что бы пользоваться сохранённым в редьюссере сосоянием  в любой  месте приложения  `,
                                    //         'Позволяет сохранять данные минуя экшены'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a881"
                                    // },{
                                    //     answer: `Позволяет работать со стейтом в функциональных компонентах`,
                                    //     question: 'Что такое useState?',
                                    //     wrongAnswers: [`Хук позволяющий запускать сторонние эффекты,напримеры логирование  `,
                                    //         'Хук исполльзующий глобальное сосотояние приложения'],
                                    //     cardsPack_id: '0',
                                    //     grade: 0,
                                    //     rating: 0,
                                    //     shots: 0,
                                    //     type: '',
                                    //     created: '',
                                    //     updated: '',
                                    //     __v: 0,
                                    //     user_id: '',
                                    //     _id: "5f0edc15adc449000476a882"
                                    // },
                                ]
                            },
                            {favoriteDeckId: 'favoriteDeckSlot1', deckName: 'empty', cardsCount: 0, deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot2', deckName: 'empty', cardsCount: 0, deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot3', deckName: 'empty', cardsCount: 0, deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot4', deckName: 'empty', cardsCount: 0, deck: []},
                            {favoriteDeckId: 'favoriteDeckSlot5', deckName: 'empty', cardsCount: 0, deck: []},
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
                        {
                            favoriteDeckId: 'favoriteDeckSlot0', deckName: 'React Native', cardsCount: 5, deck: [
                                {
                                    answer: 'Если компонент имеет состояние или значимые методы',
                                    question: 'В каких случаях Class Component лучше, чем Functional Component?',
                                    wrongAnswers: ['В случаях,когда вопрос касаеться производительности', 'Это вопрос религиозный'],
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
                                    answer: 'React.JS refs нужен  что бы «достучаться» к конкретному элементу в DOM.',
                                    question: 'Что такое refs ?',
                                    wrongAnswers: ['Метод жизненного цикла', 'Метонд инициирующий перерндер компоненты'],
                                    cardsPack_id: '0',
                                    grade: 0,
                                    rating: 0,
                                    shots: 0,
                                    type: '',
                                    created: '',
                                    updated: '',
                                    __v: 0,
                                    user_id: '',
                                    _id: "5f0edc15adc449000476a831",
                                },
                                {
                                    answer: `Контролируемый компонент обладает своим стейтом,' 
                                            ' управляемый React.Неконтролируемый  обладает внутренним состоянием`,
                                    question: 'Разница между компонентами controlled и uncontrolled?',
                                    wrongAnswers: ['У контролируемого есть методы жизненного цикла', 'В неконтролируемом,нельзя принудительно вызвать метод render'],
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
                                    answer: `Твк, чтобы провести границу между простыми виртуальными элементами DOM и теми,
		 что являются уникальными.`
                                    ,
                                    question: 'Как React JS Использует Ключи?',
                                    wrongAnswers: ['Использует в качестве ключей индекс массива,и просто сравнивает их', 'React не использует ключи'],
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
                                    answer: 'Потому,что props.children может быть совершенно любым типом данных',
                                    question: 'Почему React.Children.map(props.children, () => ), а не props.children.map(() => )?`',
                                    wrongAnswers: ['Так как props.children всегда приметив,перебрать не получиться без преобразования', 'Вобще никакой разницы'],
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
                                // {
                                //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                //     question: 'Опишите обработку событий в React.JS',
                                //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a835"
                                // }, {
                                //     answer: 'Изменить его props,или использовать метод this.setState',
                                //     question: 'Как заставить компонент React перерендерится самым простым способом?',
                                //     wrongAnswers: ['Вызывть метод componentDidMount()', ' Использовать componentWillUnmount()'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a836"
                                // }, {
                                //     answer: '\'Переданная функция будет вызвана с текущим состоянием в качестве аргумента',
                                //     question: 'Что произойдет, если передать функцию в метод setState ?',
                                //     wrongAnswers: ['Переданная функция будет вызвана со старым состоянием', 'Данный вызов  приведёт к ошибке'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a837"
                                // }, {
                                //     answer: `Порталы отображают дочерние элементы в узел DOM,
                                //            который существует вне иерархии DOM родительского компонента`,
                                //     question: 'Что такое порталы(Portals)?',
                                //     wrongAnswers: [`Порталы отображают дочерние элементы в узел DOM,
                                //            который существует в пределах иерархии DOM родительского
                                //            компонента,в любом направлении`, `Порталы отображают любые элементы в узел DOM,
                                //            который существует влюбом месте приложения`],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a838"
                                // }, {
                                //     answer: `'Тоже самое, что и Component, кроме того, что автоматически за вас реализует метод
                                //             shouldComponentUpdate.`,
                                //     question: ' Что такое Pure Components?',
                                //     wrongAnswers: ['это базовый класс всех компонентов React"', 'React.PureComponent - это компонент, у которого нет метода render.'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a839"
                                // }, {
                                //     answer: `Общее состояние нескольких компонент,которое должно быть поднято до ближайшего общего
                                //             предка`,
                                //     question: 'Что такое поднятие состояния вверх по иерархии в React (Lifting State Up)?',
                                //     wrongAnswers: ['Иными словами,всё помещаеться в общий store,всего приложения', `Обновление состояния дочерних компонентов`],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a840"
                                // }, {
                                //     answer: 'React предназначен для работы с "view" частью',
                                //     question: 'Какую часть шаблона проектирования MVC реализует React.js?',
                                //     wrongAnswers: ['React - это полноценный MVC-фреймворк', 'React является «контроллером» с точки зрения MVC'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a841"
                                // }, {
                                //     answer: 'В React вы не должны использовать какой-либо шаблонизатор. Для рендеринга HTML используется JSX (расширение синтаксиса JS)',
                                //     question: 'Какой шаблонизатор можно использовать в React?',
                                //     wrongAnswers: [' EJS', 'HBS'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a842"
                                // }, {
                                //     answer: 'shouldComponentUpdate',
                                //     question: 'Какой метод компонента следует использовать для кастомной логики для реагирования на изменения?',
                                //     wrongAnswers: ['componentWillUpdate', 'getSnapshotBeforeUpdate'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a843"
                                // }, {
                                //     answer: 'функцую обратного вызова для получения нового состояния',
                                //     question: 'Что можно передать как второй аргумент в метод setState?',
                                //     wrongAnswers: ['свойства, которые должны быть обновлены', 'предыдущее состояние'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a844"
                                // }, {
                                //     answer: 'key',
                                //     question: 'Какой атрибут обязателен при рендеринге компонентов списка?',
                                //     wrongAnswers: ['Id', 'index'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a845"
                                // }, {
                                //     answer: ' constructor',
                                //     question: ' Какой метод любого React компонента вызывается первым?',
                                //     wrongAnswers: ['render', 'componentDidMount'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a846"
                                // }, {
                                //     answer: 'Нет. React использует немного другой синтаксис.: onClick={activateLasers}',
                                //     question: ` Будет ли следующий код обработки события клика работать в React?
                                //         <button onclick="deleteUser()">
                                //         Delete user
                                //            </button>`,
                                //     wrongAnswers: ['Да. Это правильный синтаксис React.js для обработки событий кликов.',
                                //         `Этот код впринципе неправильно написан,так как тэг button должен быть самозакрывающийся`],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a847"
                                // }, {
                                //     answer: 'метод componentWillReceiveProps объявлен как deprecated',
                                //     question: 'Какое из этих утверждений относительно props истины?',
                                //     wrongAnswers: [' React автоматически проверяет переданны ли необходимые props',
                                //         'дочерний компонент наследует props родительского компонента'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a848"
                                // }, {
                                //     answer: 'Используюя метод ReactDOM.render',
                                //     question: 'Как создать компонент React без наследования класса React.Component?',
                                //     wrongAnswers: ['Это невозможно. Все компоненты React должны наследовать React.Component', 'Используюя метод React.createElement'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a849"
                                // }, {
                                //     answer: `Основными компонентами Flux являются Dispatcher,Stores,Views,Actions`,
                                //     question: 'Какие факты о Flux истины?',
                                //     wrongAnswers: [' Flux является частью React', 'React приложение нельзя писать без Flux'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a850"
                                // }, {
                                //     answer: ' Это переменная, которая содержит содержимое между открывающим и закрывающим тегами компонента.',
                                //     question: 'Что такое props.children?',
                                //     wrongAnswers: ['Это переменная, которая содержит ссылки на дочерние компоненты.', 'Это хранилище ключ-значение всех props, переданных дочерним компонентам'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a851"
                                // }, {
                                //     answer: 'text/babel',
                                //     question: 'Что необходимо прописать в теге script чтобы JSX корректно обрабатывался?',
                                //     wrongAnswers: ['text/javascript', 'babel/text'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a852"
                                // }, {
                                //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                //     question: 'Опишите обработку событий в React.JS',
                                //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a853"
                                // }, {
                                //     answer: 'var Test = React.createClass ({});',
                                //     question: 'Где правильно создан компонент?',
                                //     wrongAnswers: ['var Test = React.createClass ();', 'var Test = React.Class ({});'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a854"
                                // }, {
                                //     answer: 'Не более 1',
                                //     question: 'Сколько родительских элементов можно вывести одновременно?',
                                //     wrongAnswers: ['Неограниченное количество', 'Не более 3'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a855"
                                // }, {
                                //     answer: 'Да, можно',
                                //     question: 'Можно ли писать не используя Babel?',
                                //     wrongAnswers: ['Нет, нельзя', 'Можно,но используя альтернативы к примеру Dart от Google'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a856"
                                // }, {
                                //     answer: `{this.props.weight}`,
                                //     question: `Как обратится к свойству weight?
                                //             <Test weight="203" height="182" />`,
                                //     wrongAnswers: ['{this.weight}', '{this.prop.weight}'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a857"
                                // }, {
                                //     answer: 'Состояния можно изменять, свойства нельзя',
                                //     question: 'Чем свойства отличаются от состояний?',
                                //     wrongAnswers: ['Состояния для работы со значениями, свойства для работы с функциями', 'Свойства для работы со значениями, состояния для работы с функциями'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a858"
                                // }, {
                                //     answer: 'Объект события оборачивает в свою обертку - SyntheticEvent для кроссбраузерности',
                                //     question: 'Опишите обработку событий в React.JS',
                                //     wrongAnswers: ['Обработка идёт в рамках нативного JS', 'Использает React.HOC для обработки'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a859"
                                // }, {
                                //     answer: `if(BaseComponent.prototype.isReactComponent){
                                //              //add props
                                //                          }`,
                                //     question: `При создании HOC,как узнать,что оборачиваемый компонент явяеться реакт компонетом
                                //     ,и если нет,как добавить ему новые props?`,
                                //     wrongAnswers: [`if(WrappedComponent.prototype.isReactComponent){
                                //                                   //add props }`
                                //         , 'Как обычно передать сверху-вниз'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a860"
                                // }, {
                                //     answer: ' Reconciliation (Cверка) - это процесс, посредством которого React обновляет DOM',
                                //     question: 'Что такое React Reconciliation (Cверка) ?',
                                //     wrongAnswers: ['Процесс обновления состояния компонент', 'Сверка данных в приложении и тех что пришли с сервера'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a861"
                                // }, {
                                //     answer: 'Шаблон компонента соединен с DOM деревом',
                                //     question: 'Что значит компонент mounted?',
                                //     wrongAnswers: ['Шаблон компонента соединен с  Virtual DOM деревом', 'Идёт процесс монтирования компоненты в DOM '],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a862"
                                // }, {
                                //     answer: 'Если мы передадим функцию, то мы точно будет знать, что стейт основывается на предыдущем состоянии',
                                //     question: `В setState можно передавать объект или функцию.
                                //                   В чем разница и что лучше использовать?`,
                                //     wrongAnswers: ['Объект,так как props и state  изменяются строго синхронно', 'Без разницы'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a863"
                                // }, {
                                //     answer: `Презентационный - Нужен для создания интерфейса.
                                //                     Работает на входящих параметрах.
                                //            Контейнер - обладают состоянием, подключен к Flux или Redux`,
                                //     question: 'Назовите разницу между Презентационным и Контейнер компонентом?',
                                //     wrongAnswers: [`Контейнер-Нужен для создания интерфейса.
                                //                     Работает на входящих параметрах.Презентационный-обладают состоянием, подключен к Flux или Redux`,
                                //         'В React  все компоненты исключительно являются контэйнерами,так, как это удобно'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a864"
                                // }, {
                                //     answer: `Higher-order component (HOC) - функции, у которых входящий параметр компонент.
                                //              Возвращают новый компонент с добавленным поведением`,
                                //     question: 'Что такое  Higher-Order компоненты?',
                                //     wrongAnswers: ['Это аналог Pure Component', 'Класс от которого наследуются все компоненты в приложении'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a865"
                                // }, {
                                //     answer: 'Нельзя изменять состояние компонента',
                                //     question: 'Что нельзя делать в методе render?',
                                //     wrongAnswers: ['Проводить деструктуризацию входящих пропсов', 'Использовать методы  компоненты'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a866"
                                // }, {
                                //     answer: 'Не будет запущен процесс ре-рендеринга',
                                //     question: 'Почему не стоит изменять state напрямую',
                                //     wrongAnswers: [`Потому что запуститься бесконечный рэндер', 'Будет перерэндерено все дерево Virtual DOM
                                //         ,что скажется на производительности`],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a867"
                                // }, {
                                //     answer: '[event.target.name]:event.target.value',
                                //     question: 'Как изменить state используя динамический ключ?',
                                //     wrongAnswers: ['[event.currentTarget.name]:event.target.value',
                                //         '[event.currentTarget.name]:event.currentTarget.value'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a868"
                                // }, {
                                //     answer: 'Позволяет обрабатывать ошибки в дочерних компонентах',
                                //     question: 'Что такое Error Boundaries в React?',
                                //     wrongAnswers: ['Позволяет  обрабатывать ошибки в родительской компонененте', 'Ошибка рэндеринга в React приложении'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a869"
                                // }, {
                                //     answer: `createRef - всегда создает новую ссылку. Используется в class компонентах
                                //         useRef - возвращает одинаковую ссылку на объект`,
                                //     question: 'В чем разница между useRef и createRef?',
                                //     wrongAnswers: [`useRef-всегда создает новую ссылку. Используется в class компонентах
                                //       createRef-возвращает одинаковую ссылку на объект  `,
                                //         '1-работает только с Virtual DOM,второй только с DOM деревом'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a870"
                                // },{
                                //     answer: `Используя Context или  Redux (Flux)`,
                                //     question: 'Как  избежать  prop drilling?',
                                //     wrongAnswers: [`Какждый раз создавать локальное состояние,использовать меньше контэйнерных компонент,иметь минимальную вложенность приложения и как можно реже прокидывать пропсы `,
                                //         'Использовать MVC паттерн'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a871"
                                // },{
                                //     answer: `Для модификации проекта (webpack, babel)`,
                                //     question: 'Зачем делать eject?',
                                //     wrongAnswers: [`Для избежания падения производительности приложения  `,
                                //         'Для эффективного тестирования компонент приложения'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a872"
                                // },{
                                //     answer: `С этим кодом все хорошо. Изменяем state на основе прошлого состояния и входящих
                                //           параметров`,
                                //     question: `Что не так с этим кодом?
                                //              this.setState((prevProps,props))=>{
                                //                        return{
                                //          counter:prevProps.counter+props.counter
                                //                 }
                                //                      })`,
                                //     wrongAnswers: [`Вместо prevProps,нужно было указать state  `,
                                //         'в setState  нужно было передать функцию,что бы работать с текущими пропсами'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a873"
                                // },{
                                //     answer: `Повторно использовать код в компонентах`,
                                //     question: 'Что можно сделать с помощью хуков, чего невозможно добиться, используя классы?',
                                //     wrongAnswers: [`На хуках приложение работает быстрее,за счёт отсутствия методов жизненого цикла
                                //           `,
                                //         'С хуками  не ненужно больше использовать локальное состояние в компоненте'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a874"
                                // },{
                                //     answer: ` Простая чистая функция, принимающая state и action и модифицирующая state`,
                                //     question: 'Что такое reducer?',
                                //     wrongAnswers: [`Простая чистая функция, принимающая state и action и не модифицирующая state `,
                                //         'Компонент высшего порядка в которой производяться  запросы с есревера,делаются все сторонние эффекты'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a875"
                                // },{
                                //     answer: `Нет.`,
                                //     question: 'Можно ли использовать хуки и внутри классового компонента?',
                                //     wrongAnswers: [`Да  `,
                                //         'Можно,только если классовый компонент являеться контэйнером'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a876"
                                // },{
                                //     answer: `Оба подхода всё ещё имеют право на жизнь `,
                                //     question: `Являются ли хуки заменой рендер-пропсам и компонентам высшего порядка?`,
                                //     wrongAnswers: [`Да,хуки уменьшают вложенность,и полностью способны заменить HOC и рэндер-пропсы  `,
                                //         'Нет,хуки выполняют совсем иную роль'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a877"
                                // },{
                                //     answer: `Безопасно,если  объявить функции нужные эффекту внутри него`,
                                //     question: 'Безопасно ли не указывать функции в списке зависимостей useEffect?',
                                //     wrongAnswers: [`Да,безопасно  `,
                                //         '`Безопасно,если  объявить функции нужные эффекту сразу после эффекта'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a878"
                                // },{
                                //     answer: `Через список ячеек памяти, связанных с каждым компонентом`,
                                //     question: 'Как React связывает вызовы хуков с компонентом?',
                                //     wrongAnswers: [`Через useContext  `,
                                //         'С помощью store'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a879"
                                // },{
                                //     answer: `Каждый вызов хука получает изолированное состояние`,
                                //     question: 'Пользовательский хук получает изолированное состояние',
                                //     wrongAnswers: [`Состояние для всех пользовательских хуков не изалировано  `,
                                //         'Да только если его вызов будет обёрнуть в useMemo'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a880"
                                // },{
                                //     answer: `useReducer нужен когда следующее состояние зависит от предыдущего`,
                                //     question: 'Зачем нужен хук useReducer?',
                                //     wrongAnswers: [`Что бы пользоваться сохранённым в редьюссере сосоянием  в любой  месте приложения  `,
                                //         'Позволяет сохранять данные минуя экшены'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a881"
                                // },{
                                //     answer: `Позволяет работать со стейтом в функциональных компонентах`,
                                //     question: 'Что такое useState?',
                                //     wrongAnswers: [`Хук позволяющий запускать сторонние эффекты,напримеры логирование  `,
                                //         'Хук исполльзующий глобальное сосотояние приложения'],
                                //     cardsPack_id: '0',
                                //     grade: 0,
                                //     rating: 0,
                                //     shots: 0,
                                //     type: '',
                                //     created: '',
                                //     updated: '',
                                //     __v: 0,
                                //     user_id: '',
                                //     _id: "5f0edc15adc449000476a882"
                                // },
                            ]
                        },
                        {favoriteDeckId: 'favoriteDeckSlot1', deckName: 'empty', cardsCount: 0, deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot2', deckName: 'empty', cardsCount: 0, deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot3', deckName: 'empty', cardsCount: 0, deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot4', deckName: 'empty', cardsCount: 0, deck: []},
                        {favoriteDeckId: 'favoriteDeckSlot5', deckName: 'empty', cardsCount: 0, deck: []},
                    ]
                }
            ]
        }
        localStorage.setItem('allFavoriteDecks', JSON.stringify(allFavoriteDecks));
    },
    setAnalytics(userId: string | null, favoriteDeckId: string, currentAnalytics: CurrentAnalyticsType) {
        userId = this._isUnknownUser(userId);

        let allFavoriteDecks = this._get_AllFavoriteDecksFromLS();

        if (allFavoriteDecks) {

            const updatedAllFavoriteDecks = allFavoriteDecks.map(afd => {
                if (afd.userId === userId) {
                    return {
                        userId,
                        favoriteDecks: afd.favoriteDecks.map(fd => {
                            if (fd.favoriteDeckId === favoriteDeckId) {
                                let processedAnalytics = {
                                    ...currentAnalytics,
                                    faults: currentAnalytics.faults + currentAnalytics.restCards
                                } as CurrentAnalyticsType
                                let bestAnalytics = fd.analytics ? fd.analytics.bestAnalytics : null

                                if (bestAnalytics) {
                                    bestAnalytics = (processedAnalytics.rightAnswers / processedAnalytics.totalCardCount * 100) >
                                    (bestAnalytics.rightAnswers / bestAnalytics.totalCardCount * 100)
                                        ? processedAnalytics : bestAnalytics
                                } else {
                                    bestAnalytics = processedAnalytics
                                }
                                return {
                                    ...fd,
                                    analytics: fd.analytics ?
                                        {
                                            ...fd.analytics,
                                            bestAnalytics,
                                            prevAnalytics: processedAnalytics
                                        } :
                                        {
                                            bestAnalytics,
                                            prevAnalytics: processedAnalytics
                                        }

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
    }
};






