const Qw_1 = {
    question: `В каких случаях Class Component лучше, чем Functional Component?`,
    answer1: `Если компонент имеет состояние или значимые методы.`,
    answer2: `Это одно и тоже.`,
    answer3: `Если компонент имеет свой state.`

};
const Qw_2 = {
    question: `Что такое refs ?`,
    answer1: `'React.JS refs нужен  что бы «достучаться» к конкретному элементу в DOM.`,
    answer2: `'React.JS refs нужен  что бы менять state дочернего компонента`,
    answer3: `'React.JS refs это метод жизненного цикла.`
};
const Qw_3 = {
	question: `Разница между компонентами controlled и uncontrolled?`,
	answer1: `Контролируемый - свой стейт, управляемый React.Неконтролируемый -внутреннее состоянием( textarea)`,
	answer2: `Контролируемый - внутреннее состоянием( textarea).Неконтролируемый -свой стейт, управляемый React`,
	answer3: `Контролируемый - контроллируеться через контрэйнер.Неконтролируемый -не контроллируеться в принципе`

};
const Qw_4 = {
    question: `Как React JS Использует Ключи?`,
    answer1: ` Проводит границу между простыми виртуальными элементами DOM и уникальными.`,
    answer2: ` Использует индекс элемента при переборе массива `,
    answer3: `React  не использует ключи`

};
const Qw_5 = {
    question: `Почему React.Children.map(props.children, () => ), а не props.children.map(() => )?`,
    answer1: ` props.children – объект,а не массив. `,
    answer2: ` props.children – массив,а не объект. `,
    answer3: ` props.children –  итерируемый объект,а не массив. `


};
const Qw_6 = {
    question: `Опишите обработку событий в React.JS`,
    answer1: `Объект события оборачивает в свою обертку - ​SyntheticEvent​ для кроссбраузерности`,
    answer2: `Так же как и в JS`,
    answer3: `Использует кастомный HOC  для оборачиваня события отдельно для каждого браузера`
};
const Qw_7 = {
    question: 'Как заставить компонент React перерендерится?',
    answer1: `1. изменить его props.' 
		 2.this.setState. 
		 3.this.forceUpdate 
		 4.shouldComponentUpdate()`,
	answer2:
		 `1.this.forceUpdate 
		 2.shouldComponentUpdate()`,
	answer3: `1. изменить его props.' 
		 2.this.setState.`
};
const Qw_8 = {
    question: `Что произойдет, если передать функцию в метод setState ?`,
    answer: `'Переданная функция будет вызвана с текущим состоянием в качестве аргумента,`
}
const Qw_9 = {
    question: `Что такое порталы(Portals)?`,
    answer: `Отображают дочерние элементы в узел DOM,
			 который существует вне иерархии DOM родительского компонента.`
};
const Qw_10 = {
    question: `Что такое чистый компонент и когда он должен использоваться ?`,
    answer: `PureComponent автоматически проверяет, должен ли компонент обновляться`

};
const Qw_11 = {
    question: `Что такое поднятие состояния вверх по иерархии в React (Lifting State Up)?`,
    answer: ` Общее состояние должно быть поднято до ближайшего общего 
			предка.`
};
const Qw_12 = {
    question: `Что такое React Reconciliation (Cверка) и как он работает?`,
    answer: `Reconciliation (Cверка) - это процесс, посредством которого React обновляет DOM.`
};
const Qw_13 = {
    question: `При создании HOC,как узнать,что оборачиваемый компонент явяеться реакт компонетом
			,и если нет,как добавить ему новые props?`,

    answer: `if(BaseComponent.prototype.isReactComponent){
			    //add props 
			}`
};
const Qw_14 = {
    question: `Что значит компонент mounted?`,
    answer: `Шаблон компонента соединен с DOM деревом`
};
const Qw_15 = {
    question: `В setState можно передавать объект или функцию.
			В чем разница и что лучше использовать?`,
    answer: `props​ и ​state​ могут изменяться асинхронно. 
			Если мы передадим функцию, то мы точно будет знать, что стейт основывается на предыдущем состоянии`
};
const Qw_16 = {
    question: `Назовите разницу между Презентационным и Контейнер компонентом?`,
    answer: `Презентационный - ui.
			 Контейнер - обладают состоянием, подключены к Flux или Redux'`
};
const Qw_17 = {
    question: `Что такое  Higher-Order компоненты?`,
    answer: `Higher-order component (HOC) - функции, у которых входящий параметр компонент.
			Возвращают новый компонент с добавленным поведением`

};
const Qw_18 = {
    question: `Что нельзя делать в методе render?`,
    answer: `Нельзя изменять состояние компонента`
};

const Qw_19 = {
    question: `Почему не стоит изменять state напрямую?`,
    answer: `Не будет запущен процесс ре-рендеринга`
};
const Qw_20 = {
    question: `Как изменить state используя динамический ключ?`,
    answer:
        `[event.target.name]:event.target.value`

};
const Qw_21 = {
    question: `Что такое Error Boundaries в React?`,
    answer: `  Позволяет обрабатывать ошибки в дочерних компонентах.`
};
const Qw_22 = {
    question: `'В чем разница между useRef и createRef?`,
    answer: `createRef​ - всегда создает новую ссылку.
			 useRef​ - возвращает одинаковую ссылку на объект`
};
const Qw_23 = {
    question: ` Как  избежать  prop drilling?`,
    answer: `Используя ​Context​ или  ​Redux​ (Flux)`
};
const Qw_24 = {
    question: `Зачем делать eject?`,
    answer: `Для модификации проекта (webpack, babel)`
};
const Qw_25 = {
    question: `Разница между Flux и MVC?`,
    answer:
        `MVC (model view controller)-разделят отображение и данные.
			Flux позволяет решить проблему каскадной модели данных.`
};
const Qw_26 = {
    question: `Как работает проп children?`,
    answer: ` Специальный проп children, который передаст дочерние элементы сразу на вывод`
};
const Qw_27 = {
    question: `Можно создавать анимации в React?`,
    answer: `Можно!  React Transition Group
			 и React Motion.`
};
const Qw_28 = {
    question: `Что не так с этим кодом?
			this.setState((prevProps,props))=>{
			return{
			counter:prevProps.counter+props.counter
			}
			})`,
    answer: `С этим кодом все хорошо.`
};
const Qw_29 = {
    question: `Какой второй опциональный параметр можно передать в метод setState и за что он отвечает?`,
    answer: `Функция означающая что ре-рендеринг завершён.`
};
const Qw_30 = {
    question: `Что такое React Fiber?`,
    answer: `Fiber - базовый алгоритм для рендеринга в React 16.`

};
const Qw_31 = {
    question: `Разница между Flow и PropTypes?`,
    answer: ` Flow​ - статический инструмент для проверки типов.
			 PropTypes​ - проверяет типы входящих параметров в runtime`
};
const Qw_32 = {
    question: `Правда ли, что React делает ре-рендер всех компонентов и
			 дочерних компонентов каждый раз когда вызывается setState?`,
    answer: `По умолчанию - да.`
};
const Qw_33 = {
    question: `Как можно улучшить производительность React приложения?`,
    answer:
        `PureComponent​ для класс компонентов`

};
const Qw_34 = {
    question: `Что можно сделать с помощью хуков, чего невозможно добиться, используя классы?`,
    answer: `Повторно использовать код в компонентах.`
};
const Qw_35 = {
    question: `Являются ли хуки заменой рендер-пропсам и компонентам высшего порядка?`,
    answer:
        ` Нет,но хуки уменьшат вложенность компонентов в вашем дереве.`
};
const Qw_36 = {
    question: `Безопасно ли не указывать функции в списке зависимостей useEffect?`,
    answer: `Лучше объявлять функции нужные эффекту внутри него`
};
const Qw_37 = {
    question: `Как избежать передачи колбэков вниз(Hooks)?`,
    answer: `Передавать вниз функцию dispatch из хука useReducer через контекст`
};
const Qw_38 = {
    question: 'Как React связывает вызовы хуков с компонентом?',
    answer: `Через список ячеек памяти, связанных с каждым компонентом.`

};
const Qw_39 = {
    question: 'Почему нельзя использовать HOC внутри render метода.',
    answer: 'HOC не являеться чистой функцией'
};
const Qw_40 = {
    question: 'Может ли HOC передать оборачиваемому копонету ref?Почему так?',
    answer: `Нет,так как ref это не проп`
};
const Qw_41 = {
    question: 'Что такое Profiler?',
    answer: `Profiler измеряет то, как часто рендерится React-приложение и какова «стоимость» этого.`
};
const Qw_42 = {
    question: 'Почему нельзя использовать  рендер-проп вместе с React.PureComponent?',
    answer: `Использование рендер-пропа может свести на нет преимущество, которое даёт React.PureComponent`
};
const Qw_43 = {
    question: 'Зачем нужен хук useReducer?',
    answer: `useReducer нужен когда nexState зависит от PrevState`
};
const Qw_44 = {
    question: 'Пользовательский хук получает изолированное состояние?',
    answer: ` Каждый вызов хука получает изолированное состояние.`

};
const Qw_45 = {
    question: 'Что такое Context?',
    answer: 'Context - передача props от patent к children, избегая промежуточных компонентов'
};
const Qw_46 = {
    question: 'В каких лучаях не стоит использовать Context ?',
    answer: ` Если нужен доступ  к данным во  компонентах на разных 
			уровнях вложенности`
};
const Qw_47 = {
    question: 'Что такое доступность контента?',
    answer: `Доступность контента нужна людям с огр.возможностями для использования приложений`
};
const Qw_48 = {
    question: 'Назовите основные этапы жизненного цикла компонента',
    answer: `componentWillMount​,render​,componentDidMount​,componentWillReceiveProps​,shouldComponentUpdate​,componentWillUpdate,​componentDidUpdate​,componentWillUnmount​`
}
const Qw_49 = {
    question: ' Что такое JEST?', answer: `JavaScript фреймворк,для юнит тестирования `
};
const Qw_50 = {
    question: ' В чем разница между state и props?',
    answer: ` state- Объект,описывает внутреннее состояние компонента
			'props- набор конфигурации, поступающий от родительского элемента`
};
const Qw_51 = {
    question: ' Что происходит, когда вы вызываете setState?',
    answer: ` 1 соединяет state с измененными полями. На основе нового' 
			2.строит новое дерево React`
};
const Qw_52 = {
    question: ' Когда следует делать асинхронные запросы на сервер в React ?',
    answer: '  componentDidMount Или useEffect '
};
const Qw_53 = {
    question: ' Что такое фрагменты?',
    answer: ' Возвращает группу элементов без родительского DOM элемента'
};
const Qw_54 = {
    question: ' Что делает shouldComponentUpdate и почему он важен?',
    answer: `Решает будет  ре-рендер, или нет,позволяет оптимизировать приложение`
};
const Qw_55 = {
    question: ' Что такое store в Redux?',
    answer: `JavaScript объект, в котором содержится состояние приложения.`
};
const Qw_56 = {
    question: '  Почему не стоит изменять state напрямую?',
    answer: ` Не будет запущен процесс ре-рендеринга `
};

const Qw_57 = {
    question: '  Что такое useState?',
    answer: `Позволяет работать со стейтом в функциональных' +
			компонентах.`
};
const Qw_58 = {
    question: ' Что такое reducer?',
    answer: ' Простая чистая функция, принимающая state и action и модифицирующая state '
};
const Qw_59 = {
    question: ' Что такое mapStateToProps и mapDispatchToProps??',
    answer: ' Функции в Redux,берущие данные из store для ui '
};
const Qw_60 = {
    question: 'Какие типы middleware есть в redux для работы с асинхронностью?',
    answer: ' ThunkRedux, Promise, Saga'
};
const Qw_61 = {
    question: `Что такое prop drilling?`,
    answer: `Передача свойств на прямую от родителя к ребенку через сложную и длинную иерархию компонентов.`
};

const Qw_62 = {
    question: `Как предотвратить рерэндер
			 дочерних компонентов каждый раз когда вызывается setState?`,
    answer: ` Использовать shouldComponentUpdate(nextProps, nextState)​.`
};
const Qw_63 = {
    question: `Как можно улучшить производительность React приложения?`,
    answer:
        ` shouldComponentUpdate​ в класс компонентах`
};
const Qw_64 = {
    question: `Как можно улучшить производительность React приложения?`,
    answer:
        `React.memo()​ - для функциональных компонентов `

};
const Qw_65 = {
    question: `Как можно улучшить производительность React приложения?`,
    answer:
        ` хуки useMemo,useCallback в функциональных компонентах`
};
const Qw_66 = {
    question: `Какие есть ограничения в React?`,
    answer:
        ` React - JavaScript фронтенд библиотека`
};
const Qw_67 = {
    question: `Что такое JSX?`,
    answer:
        ` HTML   внутри JavaScript `
};
const Qw_68 = {
    question: `Что такое Virtual DOM в React?`,
    answer:
        ` Virtual DOM  это объект-копия реального DOM `
};
const Qw_69 = {
    question: `Что такое Props?`,
    answer:
        ` Входящие свойства в компонент`
};
const Qw_70 = {
    question: `Что такое action в Redux?`,
    answer:
        ` Объект, который обязательно должен содержать ключ ​type`
};
const Qw_71 = {
    question: `Как валидировать props в React?`,
    answer:
        ` библиотека - ​PropTypes`
};
const Qw_72 = {
    question: `В чем смысл специального атрибута key?`,
    answer:
        `Для модификации и удаления элементов.Лучше юзать ID`
};


let questionArray = [Qw_1, Qw_2, Qw_3, Qw_4, Qw_5, Qw_6, Qw_7, Qw_8, Qw_9, Qw_10, Qw_11, Qw_12, Qw_13, Qw_14, Qw_15, Qw_16, Qw_17, Qw_18, Qw_19,
    Qw_20, Qw_21, Qw_22, Qw_23, Qw_24, Qw_25, Qw_26, Qw_27, Qw_28, Qw_29, Qw_30, Qw_31, Qw_32, Qw_33, Qw_34, Qw_35, Qw_36, Qw_37, Qw_38, Qw_39,
    Qw_39, Qw_40, Qw_41, Qw_42, Qw_43, Qw_44, Qw_45, Qw_46, Qw_47, Qw_48, Qw_49, Qw_50, Qw_51, Qw_52, Qw_53, Qw_54, Qw_55, Qw_56, Qw_57, Qw_58, Qw_59, Qw_60, Qw_61, Qw_62, Qw_63, Qw_64,
    Qw_66, Qw_67, Qw_68, Qw_69, Qw_70, Qw_71, Qw_72]


export let maxNumber = questionArray.length;
export let cardQuestion;

export const getRandomQuestion = (maxNumber) => {
    let number = Math.floor(Math.random() * (maxNumber));
    return cardQuestion = questionArray[number];
}

getRandomQuestion(maxNumber);

