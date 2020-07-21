const Qw_1 = {
    question: `Какой из приведённых вариантов не является допустимым значением свойства border-style?`,
    answer1: `dotted`,
    answer2: `glazed`,
    answer3: `solid`

};

const Qw_2 = {
    question: `Что из перечисленного не является допустимым значением длины?`,
    answer1: `cm`,
    answer2: `dm`,
    answer3: `mm`

};

const Qw_3 = {
    question: `В CSS есть 16 основных названий для цвета. Какое из перечисленных названий к ним не принадлежит?`,
    answer1: `fuchsia`,
    answer2: `cyan`,
    answer3: `maroon`

};

const Qw_4 = {
    question: `Каков идеальный порядок следующих селекторов псевдо-классов?`,
    answer1: `:active :hover :link :visited`,
    answer2: `:hover :visited :link :active`,
    answer3: `:link :visited :hover :active`

};

const Qw_5 = {
    question: `Какое из следующих свойств не влияет на модель box?`,
    answer1: `event.target`,
    answer2: `event.currentTarget`,
    answer3: `event.actualTarget`

};

const Qw_6 = {
    question: `Что делает метод event.preventDefault() `,
    answer1: ` Запрещает погружение`,
    answer2: `Прекщает событие`,
    answer3: `Offает поведение элемента по умолчанию`

};

const Qw_7 = {
    question: `Что делает метод event.stopPropagation() `,
    answer1: `Меняет направление события`,
    answer2: `Запрещает погружение/всплытие события`,
    answer3: `Запрещает все события на элементе`

};

const Qw_8 = {
    question: `Как сравнивает оператор '==='?`,
    answer1: `сравнивает строки посимвольно`,
    answer2: `приводит к числу и сравнивает`,
    answer3: `сравнивает без приведения`

};

const Qw_9 = {
    question: `Как сравнивает оператор '=='`,
    answer1: `так же как и '==='`,
    answer2: `приводит к числу и сравнивает`,
    answer3: `приводит к строке и сравнивает`

};

const Qw_10 = {
    question: `Как сравниваются объекты?`,
    answer1: `По значению`,
    answer2: `По ссылке`,
    answer3: `По прототипу`

};

const Qw_11 = {
    question: `Что делает метод toPrimitive для преобразования объекта к примитиву?`,
    answer1: `использует метод typeOf`,
    answer2: `использует метод Object.entries`,
    answer3: `valueOf,a затем toString`

};

const Qw_12 = {
    question: `Для чего используется оператор "!!"?`,
    answer1: `преобразует в преметив`,
    answer2: `приводит  к boolean типу`,
    answer3: `означает логическое 'и'`

};

const Qw_13 = {
    question: `Как записать несколько выражений в одну строку`,
    answer1: `Через оператор ','`,
    answer2: `через команду alert`,
    answer3: `спользуя унарный +`

};

const Qw_14 = {
    question: `Как проверить, является ли значение ложным?`,
    answer1: `Методом typeOf`,
    answer2: `используя '=='`,
    answer3: `используя !!`

};

const Qw_15 = {
    question: `use strict это?`,
    answer1: `Режим валидации`,
    answer2: `Строгий режим`,
    answer3: `Режим динамического редактирования`

};

const Qw_16 = {
    question: `В режиме use strict,значение this по умолчанию являеться: `,
    answer1: `null`,
    answer2: `undefined`,
    answer3: `false`

};

const Qw_17 = {
    question: `Какое значение имеет this?`,
    answer1: `ссылка на текущий объект`,
    answer2: `undefined`,
    answer3: `текущий объект`

};

const Qw_18 = {
    question: `Если определенного свойства нет в объекте,его посик осуществляется в:`,
    answer1: `В его родителе`,
    answer2: `В его прототипе`,
    answer3: `В его потомках`

};

const Qw_19 = {
    question: `Без использовани строго режима,this в глобальной области видимости ссылается на:`,
    answer1: `Текущий объект перед точкой`,
    answer2: `window`,
    answer3: `this это контекст исполнения функции`

};

const Qw_20 = {
    question: `В IIFE, функциях, которые создаются в глобальном области видимости, анонимных функциях
     и внутренних функциях методов объекта значением this по умолчанию является:`,
    answer1: `undefined`,
    answer2: `window`,
    answer3: `текущий объект перед точкой`

};

const Qw_21 = {
    question: `Что такое прототип объекта?`,
    answer1: `Прототип — это план (схема или проект) объекта`,
    answer2: `Функция-конструктор проекта`,
    answer3: `Статическое свойство класса`

};

const Qw_22 = {
    question: `Что такое IIFE?`,
    answer1: `Самовызывающаяся функция`,
    answer2: `Функциональное выражение`,
    answer3: `Обычная функция`

};

const Qw_23 = {
    question: `Какое лучшее  использование IIFE?`,
    answer1: `Выполнение функций настройки инициализации`,
    answer2: `Доступ к внутренним данным `,
    answer3: `Использование её как фабричный метод`

};

const Qw_24 = {
    question: `Что создаёт IIFE?`,
    answer1: `Новый объект`,
    answer2: `Новую область видимости`,
    answer3: `Ничего`

};

const Qw_25 = {
    question: `Для чего используется метод Function.prototype.apply?`,
    answer1: `Вызов прототипа объекта`,
    answer2: `Вызов функции- конструктора`,
    answer3: `Привязка объекта к this`

};

const Qw_26 = {
    question: `Функция высшего порядка это?`,
    answer1: `Фабричные методы класса`,
    answer2: `Ф-ии принимаюшие и в-щие объект или ф-ю`,
    answer3: `IIFE`

};

const Qw_27 = {
    question: `Что делает метод Array.prototype.map?`,
    answer1: `фильтрует массив`,
    answer2: `Аналог цикла for`,
    answer3: `возвращает новый массив`

};

const Qw_28 = {
    question: `Как создать объект, не имеющий прототипа?`,
    answer1: `Object.clone  `,
    answer2: `Object.create`,
    answer3: `Object.assign`

};

const Qw_29 = {
    question: `Что такое стрелочные функции (Arrow Functions)`,
    answer1: `Фабричный метод класса`,
    answer2: `Cпособ создания функций`,
    answer3: `Function Declaration`

};

const Qw_30 = {
    question: ` Что такое шаблонные литералы (Template Literals)?`,
    answer1: `regExp`,
    answer2: `Способ создание строки`,
    answer3: `Паттерн проектирования`

};

const Qw_31 = {
    question: `Что такое деструктуризация объекта (Object Destructuring)?`,
    answer1: `Получение значения массива из объекта`,
    answer2: `Получение значения объекта из массива`,
    answer3: `Преобразование объекта в массив`

};

const Qw_32 = {
    question: `Основным методом генератора являеться: `,
    answer1: `Yield()`,
    answer2: `continue()`,
    answer3: `next()`

};

const Qw_33 = {
    question: `Что такое функция обратного вызова (Callback Function)?`,
    answer1: `IIFE`,
    answer2: `Функции высшего порядка`,
    answer3: `Функции отложенного вызова`

};

const Qw_34 = {
    question: `Что такое промисы (Promises)?`,
    answer1: `Callback функции`,
    answer2: `Способ работы с асинхронным кодом`,
    answer3: `Способ работы с синхронным кодом`

};

const Qw_35 = {
    question: `В качестве параметров конструктор промиса принимает:`,
    answer1: `this,reject и передаваемые аргументы`,
    answer2: `arguments,функцию для работы с ним`,
    answer3: `колбэки resolve,reject`

};

const Qw_36 = {
    question: `Что возвращает метод then?`,
    answer1: `Объект`,
    answer2: `Функцию`,
    answer3: `Промис`

};

const Qw_37 = {
    question: `Что такое async/await?`,
    answer1: `Способ работы с генераторами`,
    answer2: `Способ работы с синхронным кодом`,
    answer3: `Альтернатива тестам Jest`

};

const Qw_38 = {
    question: `Использование ключевого слова «async» перед функцией заставляет ее:`,
    answer1: `Вернуть другую функцию`,
    answer2: `Работать асинхронно`,
    answer3: `Вернуть промис`

};

const Qw_39 = {
    question: `Ключевое слово «await» можно использовать только внутри:`,
    answer1: `Синхронной функции`,
    answer2: `Внутри объекта`,
    answer3: `Асинхронной функции`

};

const Qw_40 = {
    question: `Как работает rest оператор?`,
    answer1: `Забирает данные массива`,
    answer2: `Забирает данные объекта`,
    answer3: `Помещает параметры ф-ии в массив`

};

const Qw_41 = {
    question: `Что такое параметры по умолчанию (Default Parameters)?`,
    answer1: `объект arguments`,
    answer2: `Неперечисляемые св-ва объекта`,
    answer3: `Инициализация  переменных по умолчанию`

};

const Qw_42 = {
    question: `Как проверить, является ли значение NaN?`,
    answer1: `typeOfNaN()`,
    answer2: `isNaN()`,
    answer3: `thisNaN()`

};

const Qw_43 = {
    question: ` Как проверить, является ли значение массивом?`,
    answer1: `Array.isArray()`,
    answer2: `TypeOf()`,
    answer3: `Array.thisArray()`

};

const Qw_44 = {
    question: `Что такое AJAX?`,
    answer1: `технология, для взаимодействовать с сервером`,
    answer2: `Вид пользовательского интрефейса`,
    answer3: `Язык запросов`

};

const Qw_45 = {
    question: `Что делает метод Object.freeze?`,
    answer1: `Определяет, был ли объект заморожен`,
    answer2: `Запрещает добавление св-в  объекту`,
    answer3: `Запрещает перечисление св-в объекта`

};

const Qw_46 = {
    question: `Для чего нужен методом hasOwnProperty?`,
    answer1: `Проверяет наличие св-ва в объекте/ прототипе`,
    answer2: `Проверяет наличие св-ва в объекте`,
    answer3: `Проверяет наличе свойства в конструкторе`

};

const Qw_47 = {
    question: `Что такое запоминание или мемоизация (Memoization)?`,
    answer1: `Запоминание значения по умолчанию`,
    answer2: `Запоминание первого результата`,
    answer3: `Запоминание ранее вычисленных р-тов`

};

const Qw_48 = {
    question: `Для чего используется ключевое слово «new»?`,
    answer1: `Создание класса`,
    answer2: `СоЗдание объекта`,
    answer3: `Создание прототипа`

};

const Qw_49 = {
    question: `Что означает ключевое слово const?`,
    answer1: `Запрещает всплытие переменой`,
    answer2: `Делает переменную иммьютабельной`,
    answer3: `Делает переменную глобальной`

};

const Qw_50 = {
    question: `Что делает дерректива yield?`,
    answer1: `Делегирует выполнение другому генератору`,
    answer2: `Принимает или возвращает значение`,
    answer3: `Принимает и возвращает значение`

};



let questionArray = [Qw_1, Qw_2, Qw_3, Qw_4, Qw_5, Qw_6, Qw_7, Qw_8, Qw_9, Qw_10, Qw_11, Qw_12, Qw_13, Qw_14, Qw_15, Qw_16, Qw_17, Qw_18, Qw_19,
    Qw_20, Qw_21, Qw_22, Qw_23, Qw_24, Qw_25, Qw_26, Qw_27, Qw_28, Qw_29, Qw_30, Qw_31, Qw_32, Qw_33, Qw_34, Qw_35, Qw_36, Qw_37, Qw_38, Qw_39,
    Qw_39, Qw_40, Qw_41, Qw_42, Qw_43, Qw_44, Qw_45, Qw_46, Qw_47, Qw_48, Qw_49, Qw_50]


export let maxNumber = questionArray.length;
export let cardQuestion;

export const getRandomQuestion = (maxNumber) => {
    let number = Math.floor(Math.random() * (maxNumber));
    return cardQuestion = questionArray[number];
}

getRandomQuestion(maxNumber);

