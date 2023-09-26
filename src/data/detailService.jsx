import {
  cascade,
  cascade_big,
  caret_middle,
  caret_middle_big,
  caret_long,
  caret_long_big,
  asymmetry,
  asymmetry_big,
  ladder,
  ladder_big,
  shag,
  shag_big,
  bob,
  bob_big,
  debut,
  debut_big,
  piksi,
  piksi_big,
  box,
  box_big,
  demibox,
  demibox_big,
  british,
  british_big,
  grunge,
  grunge_big,
  canadian,
  canadian_big,
  undercard,
  undercard_big,
  quiff,
  quiff_big,
  pompadour,
  pompadour_big,
  caesar,
  caesar_big,
} from '../assets';

const haircutWomenData = [
  {
    id: 1,
    link: 'cascade',
    serviceName: 'Каскад',
    price: 3000,
    time: 60,
    image: cascade,
    bigImage: cascade_big,
    description:
      'Одна из самых популярных и универсальных стрижек, которая подходит практически всем типам лица и волос. Она представляет собой слоистую стрижку, где каждый последующий слой волос длиннее предыдущего. Это создает объемный и многослойный эффект, который выглядит очень стильно и современно.',
    history:
      'Каскад - это стрижка, которая появилась в 70-х годах прошлого века. Ее создателем считается американский парикмахер Видал Сассун. Он создал эту стрижку для актрисы Джекки Кеннеди, которая хотела изменить свой образ. Сассун использовал технику каскада, чтобы создать объем и текстуру на волосах актрисы. Эта стрижка стала популярной благодаря своей универсальности и простоте в уходе.',
    features: [
      'Универсальность: Каскад подходит для всех типов лица и любой длины волос.',
      'Создание объема: Многослойная структура стрижки придает волосам дополнительный объем, особенно на тонких и поврежденных волосах.',
      'Легкость укладки: Каскад легко укладывать, так как волосы уже имеют слоистую структуру и легко принимают нужную форму.',
      'Различные варианты укладки: Благодаря своей структуре, каскад позволяет создавать различные варианты укладок, от гладких и прямых до объемных и волнистых.',
      'Подходит для разных образов: Каскад гармонично сочетается с любым стилем одежды и подходит как для работы и учебы, так и для вечерних выходов.',
      'Коррекция формы лица: С помощью каскада можно визуально скорректировать форму лица, например, вытянуть круглое или смягчить квадратное.',
    ],
  },
  {
    id: 2,
    link: 'caret',
    serviceName: 'Каре',
    price: 3000,
    time: 60,
    image: caret_middle,
    bigImage: caret_middle_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 3,
    link: 'long_care',
    serviceName: 'Длинное каре',
    price: 3000,
    time: 60,
    image: caret_long,
    bigImage: caret_long_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 4,
    link: 'asymmetry',
    serviceName: 'Асимметрия',
    price: 3000,
    time: 60,
    image: asymmetry,
    bigImage: asymmetry_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 5,
    link: 'ladder',
    serviceName: 'Лесенка',
    price: 3000,
    time: 60,
    image: ladder,
    bigImage: ladder_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 6,
    link: 'shag',
    serviceName: 'Шэг',
    price: 3000,
    time: 60,
    image: shag,
    bigImage: shag_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 7,
    link: 'bob',
    serviceName: 'Боб',
    price: 3000,
    time: 60,
    image: bob,
    bigImage: bob_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 8,
    link: 'debut',
    serviceName: 'Дебют',
    price: 3000,
    time: 60,
    image: debut,
    bigImage: debut_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 9,
    link: 'piksi',
    serviceName: 'Пикси',
    price: 3000,
    time: 60,
    image: piksi,
    bigImage: piksi_big,
    description: '',
    history: '',
    features: [],
  },
];

const haircutManData = [
  {
    id: 1,
    link: 'box',
    serviceName: 'Бокс',
    price: 3000,
    time: 60,
    image: box,
    bigImage: box_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 2,
    link: 'demibox',
    serviceName: 'Полубокс',
    price: 3000,
    time: 60,
    image: demibox,
    bigImage: demibox_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 3,
    link: 'british',
    serviceName: 'Британка',
    price: 3000,
    time: 60,
    image: british,
    bigImage: british_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 4,
    link: 'grunge',
    serviceName: 'Гранж',
    price: 3000,
    time: 60,
    image: grunge,
    bigImage: grunge_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 5,
    link: 'canadian',
    serviceName: 'Канадка',
    price: 3000,
    time: 60,
    image: canadian,
    bigImage: canadian_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 6,
    link: 'undercard',
    serviceName: 'Андеркат',
    price: 3000,
    time: 60,
    image: undercard,
    bigImage: undercard_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 7,
    link: 'quiff',
    serviceName: 'Квифф',
    price: 3000,
    time: 60,
    image: quiff,
    bigImage: quiff_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 8,
    link: 'pompadour',
    serviceName: 'Помпадур',
    price: 3000,
    time: 60,
    image: pompadour,
    bigImage: pompadour_big,
    description: '',
    history: '',
    features: [],
  },
  {
    id: 9,
    link: 'caesar',
    serviceName: 'Цезарь',
    price: 3000,
    time: 60,
    image: caesar,
    bigImage: caesar_big,
    description: '',
    history: '',
    features: [],
  },
];

export { haircutWomenData, haircutManData };
