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
  monochromeColoring,
  highlighting,
  ombre,
  everydayMakeup,
  eveningMakeup,
  weddingMakeup,
  solarium,
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
      { id: 1, info: 'Универсальность: Каскад подходит для всех типов лица и любой длины волос.' },
      {
        id: 2,
        info: 'Создание объема: Многослойная структура стрижки придает волосам дополнительный объем, особенно на тонких и поврежденных волосах.',
      },
      {
        id: 3,
        info: 'Легкость укладки: Каскад легко укладывать, так как волосы уже имеют слоистую структуру и легко принимают нужную форму.',
      },
      {
        id: 4,
        info: 'Различные варианты укладки: Благодаря своей структуре, каскад позволяет создавать различные варианты укладок, от гладких и прямых до объемных и волнистых.',
      },
      {
        id: 5,
        info: 'Подходит для разных образов: Каскад гармонично сочетается с любым стилем одежды и подходит как для работы и учебы, так и для вечерних выходов.',
      },
      {
        id: 6,
        info: 'Коррекция формы лица: С помощью каскада можно визуально скорректировать форму лица, например, вытянуть круглое или смягчить квадратное.',
      },
    ],
  },
  {
    id: 2,
    link: 'caret',
    serviceName: 'Каре',
    price: 2000,
    time: 45,
    image: caret_middle,
    bigImage: caret_middle_big,
    description:
      'Прическа Каре - это одна из самых популярных и универсальных стрижек для волос. Она имеет множество вариаций и подходит практически всем типам лица и структуре волос. Каре может быть коротким, средним или длинным, с челкой или без.',
    history:
      'История прически Каре уходит своими корнями в древнюю Египетскую цивилизацию, где мужчины и женщины носили короткие стрижки с прямыми краями. В средние века каре стала популярной прической среди европейской знати, особенно в Англии. В XX веке каре пережила настоящий ренессанс благодаря таким иконам стиля, как Одри Хепберн и Жаклин Кеннеди.',
    features: [
      {
        id: 1,
        info: 'Каре подойдет тем, кто хочет обновить свой образ без кардинальных перемен, а также тем, кто ценит удобство и простоту в укладке',
      },
      {
        id: 2,
        info: 'Эта стрижка не требует частого обновления и легко укладывается при помощи фена и щетки-брашинга.',
      },
      {
        id: 3,
        info: 'Для создания идеального каре нужно обратиться к профессиональному стилисту, который подберет подходящую длину, форму и технику стрижки именно для вас',
      },
      {
        id: 4,
        info: 'В зависимости от ваших предпочтений, вы можете выбрать каре с челкой, которая поможет скорректировать форму лица и придать образу свежесть и молодость.',
      },
    ],
  },
  {
    id: 3,
    link: 'long_care',
    serviceName: 'Длинное каре',
    price: 3000,
    time: 60,
    image: caret_long,
    bigImage: caret_long_big,
    description:
      'Прическа Каре - это одна из самых популярных и универсальных стрижек для волос. Она имеет множество вариаций и подходит практически всем типам лица и структуре волос. Каре может быть коротким, средним или длинным, с челкой или без.',
    history:
      'История прически Каре уходит своими корнями в древнюю Египетскую цивилизацию, где мужчины и женщины носили короткие стрижки с прямыми краями. В средние века каре стала популярной прической среди европейской знати, особенно в Англии. В XX веке каре пережила настоящий ренессанс благодаря таким иконам стиля, как Одри Хепберн и Жаклин Кеннеди.',
    features: [
      {
        id: 1,
        info: 'Каре подойдет тем, кто хочет обновить свой образ без кардинальных перемен, а также тем, кто ценит удобство и простоту в укладке',
      },
      {
        id: 2,
        info: 'Эта стрижка не требует частого обновления и легко укладывается при помощи фена и щетки-брашинга.',
      },
      {
        id: 3,
        info: 'Для создания идеального каре нужно обратиться к профессиональному стилисту, который подберет подходящую длину, форму и технику стрижки именно для вас',
      },
      {
        id: 4,
        info: 'В зависимости от ваших предпочтений, вы можете выбрать каре с челкой, которая поможет скорректировать форму лица и придать образу свежесть и молодость.',
      },
    ],
  },
  {
    id: 4,
    link: 'asymmetry',
    serviceName: 'Асимметрия',
    price: 4000,
    time: 75,
    image: asymmetry,
    bigImage: asymmetry_big,
    description:
      'Асимметричная прическа - это стиль прически, который характеризуется неравномерным распределением волос по обеим сторонам лица.',
    history:
      'Этот стиль появился в начале XX века и стал популярен благодаря знаменитостям того времени, таким как Луиза Брукс и Джин Харлоу.',
    features: [
      {
        id: 1,
        info: 'Асимметричные прически могут быть выполнены на коротких, средних и длинных волосах.',
      },
      {
        id: 2,
        info: 'Такие прически могут включать в себя различные элементы, такие как косая челка, неровные края и разные длины волос с каждой стороны лица.',
      },
      {
        id: 3,
        info: 'Одним из преимуществ асимметричной прически является то, что она может помочь скрыть недостатки лица, такие как асимметрия, большой лоб или широкие скулы.',
      },
      {
        id: 4,
        info: 'Кроме того, асимметрия может добавить индивидуальности и стиля любому образу.',
      },
      {
        id: 5,
        info: 'Асимметричные прически требуют регулярной коррекции у парикмахера, чтобы поддерживать их форму и стиль.',
      },
      {
        id: 6,
        info: 'Некоторые люди могут испытывать дискомфорт из-за неравномерного распределения волос по лицу.',
      },
    ],
  },
  {
    id: 5,
    link: 'ladder',
    serviceName: 'Лесенка',
    price: 4200,
    time: 60,
    image: ladder,
    bigImage: ladder_big,
    description:
      '“Лесенка” - это стрижка, при которой волосы имеют разную длину на разных уровнях, создавая эффект “ступенек”. ',
    history:
      'Прическа была популярна в 80-х годах прошлого века, но и сейчас остается востребованной среди женщин разных возрастов.',
    features: [
      {
        id: 1,
        info: 'Особенность этой стрижки заключается в том, что она подходит практически всем, независимо от формы лица и структуры волос.',
      },
      {
        id: 2,
        info: 'Лесенка может быть выполнена на волосах любой длины, но наиболее эффектно выглядит на средней длине.',
      },
      {
        id: 3,
        info: 'Преимущества этой стрижки заключаются в том, что она придает волосам объем и легкость, а также позволяет скрыть некоторые недостатки лица.',
      },
      {
        id: 4,
        info: 'Кроме того, лесенка не требует сложной укладки и подходит для любого типа волос.',
      },
    ],
  },
  {
    id: 6,
    link: 'shag',
    serviceName: 'Шэг',
    price: 3000,
    time: 50,
    image: shag,
    bigImage: shag_big,
    description:
      'Шегги (от англ. shaggy – лохматый, косматый) – это одна из разновидностей каскадной стрижки. От классического каскада шегги отличается тем, что пряди имеют разную длину и не образуют плавных переходов.',
    history:
      'Прическа шегги появилась в 70-х годах XX века. Ее создателем считается английский парикмахер Видал Сассун. Он стремился создать универсальную стрижку, которая подойдет любой женщине и будет хорошо смотреться на разных типах лица.',
    features: [
      {
        id: 1,
        info: 'Шегги стала очень популярной благодаря своей практичности и легкости укладки.',
      },
      {
        id: 2,
        info: 'Она подходит для любых типов волос, включая тонкие и поврежденные. При этом шегги выглядит очень стильно и современно.',
      },
      {
        id: 3,
        info: 'Сегодня шегги остается одной из самых популярных стрижек.',
      },
      {
        id: 4,
        info: 'Она идеально подходит для тех, кто хочет выглядеть модно и стильно, не тратя много времени на укладку.',
      },
    ],
  },
  {
    id: 7,
    link: 'bob',
    serviceName: 'Боб',
    price: 2500,
    time: 45,
    image: bob,
    bigImage: bob_big,
    description:
      'Боб - это универсальная и очень популярная стрижка для женщин. Она имеет несколько вариантов исполнения, которые подходят для разных типов лиц и волос. Боб может быть коротким или длинным, с челкой или без нее.',
    history:
      'Боб был изобретен в начале 20 века, но стал популярен только в 1920-х годах благодаря известной актрисе Ирене Касл. С тех пор боб постоянно меняется и развивается, появляются новые варианты этой стрижки.',
    features: [
      {
        id: 1,
        info: 'Один из самых известных видов боба - это классический боб, который имеет ровную линию среза и короткую длину. Он идеально подходит для прямых волос и овального лица',
      },
      {
        id: 2,
        info: 'Также существует асимметричный боб, который отличается тем, что имеет разную длину с обеих сторон лица. Этот вариант боба подходит для тех, кто хочет добавить немного объема и текстуры своим волосам.',
      },
      {
        id: 3,
        info: 'Еще один интересный вариант боба - это удлиненный боб. Он имеет более длинные волосы сзади и короче спереди, что создает эффект объема. Этот боб подходит для тех, у кого тонкие волосы или круглое лицо.',
      },
      {
        id: 4,
        info: 'Независимо от того, какой вариант боба вы выберете, он всегда будет выглядеть стильно и модно.',
      },
    ],
  },
  {
    id: 8,
    link: 'debut',
    serviceName: 'Дебют',
    price: 3000,
    time: 50,
    image: debut,
    bigImage: debut_big,
    description:
      'Дебют — это элегантная и женственная прическа, которая подходит для любого типа лица и длины волос. Она состоит из пышного начеса на макушке и гладких волос по бокам. ',
    history:
      'Прическа «Дебют» появилась в середине 20-го века и была очень популярна в то время. Она была создана как универсальная прическа, которая подходит для любой формы лица и длины волос. «Дебют» стал очень популярным благодаря своей простоте и элегантности.',
    features: [
      { id: 1, info: 'Дебют может быть выполнен как на прямых, так и на волнистых волосах.' },
      {
        id: 2,
        info: 'Преимуществом этой прически является то, что она выглядит элегантно и женственно.',
      },
      {
        id: 3,
        info: 'Прическа требует определенного ухода и регулярной укладки, но в результате вы получите стильный и элегантный образ.',
      },
    ],
  },
  {
    id: 9,
    link: 'piksi',
    serviceName: 'Пикси',
    price: 2500,
    time: 45,
    image: piksi,
    bigImage: piksi_big,
    description:
      'Пикси - это короткая стрижка, которая характеризуется объемной макушкой и короткими волосами по бокам и сзади.',
    history:
      'Пикси появилась в 1953 году, ее создала известный парикмахер Louise Taft. Она назвала ее “Pixie cut”, потому что эта стрижка делала женщин похожими на волшебных существ - пикси. В 1960-х пикси стала еще более популярной благодаря актрисам, таким как Одри Хепберн и Твигги. В 1980-х пикси снова стала модным трендом, благодаря таким знаменитостям, как Деми Мур и Шер.',
    features: [
      {
        id: 1,
        info: 'Сначала пикси была популярна только среди молодых девушек, но потом ее стали носить и женщины старшего возраста. ',
      },
      {
        id: 2,
        info: 'Пикси подходит для многих типов лиц и возрастов, а также для разных текстур волос.',
      },
      {
        id: 3,
        info: ' Эта стрижка требует минимального ухода и укладки, но при этом выглядит стильно и современно.',
      },
    ],
  },
];

const haircutManData = [
  {
    id: 1,
    link: 'box',
    serviceName: 'Бокс',
    price: 1500,
    time: 30,
    image: box,
    bigImage: box_big,
    description:
      'Бокс - это мужская стрижка, которая отличается короткой длиной волос по всей голове. Прическа была названа в честь одноименного вида спорта, так как эту стрижку носили многие боксеры.',
    history:
      'Прическа Бокс появилась в США в начале ХХ века. Она стала очень популярной среди мужчин благодаря своей простоте и практичности. Бокс был создан как стрижка для спортсменов, но со временем стал использоваться и в повседневной жизни.',
    features: [
      {
        id: 1,
        info: 'Бокс подходит для мужчин с круглой или овальной формой лица и прямыми волосами.',
      },
      {
        id: 2,
        info: 'Эта стрижка очень популярна среди мужчин, так как она выглядит аккуратно и требует минимального ухода.',
      },
    ],
  },
  {
    id: 2,
    link: 'demibox',
    serviceName: 'Полубокс',
    price: 1800,
    time: 40,
    image: demibox,
    bigImage: demibox_big,
    description:
      'Полубокс - это еще одна разновидность короткой мужской стрижки. Она отличается от Бокса тем, что волосы на макушке оставляют немного длиннее, создавая более плавный переход к вискам и затылку.',
    history:
      'Полубокс появился в конце 1990-х годов и быстро стал одной из самых популярных мужских стрижек в мире. Его создателем считается американский парикмахер Джош Лавадон, который хотел создать стрижку, сочетающую в себе стиль и практичность. С тех пор Полубокс остается одной из любимых стрижек мужчин всех возрастов и профессий.',
    features: [
      { id: 1, info: 'Полубокс подходит для мужчин с любым типом лица и структурой волос' },
      {
        id: 2,
        info: 'Эта стрижка выглядит очень стильно и аккуратно, а также не требует сложного ухода.',
      },
    ],
  },
  {
    id: 3,
    link: 'british',
    serviceName: 'Британка',
    price: 2000,
    time: 50,
    image: british,
    bigImage: british_big,
    description:
      'Британка — это классическая мужская стрижка, которую часто называют английской. Она характеризуется короткими волосами по бокам и длиннее сверху, а также пробором набок.',
    history:
      'История этой стрижки началась в Великобритании в начале 20 века. Тогда она была популярна среди британских военных и студентов Оксфорда и Кембриджа. Со временем британка стала популярной во всем мире и до сих пор остается одной из самых востребованных стрижек у мужчин.',
    features: [
      { id: 1, info: 'Британка подходит для мужчин с прямыми волосами и овальным лицом.' },
      {
        id: 2,
        info: 'Эта стрижка выглядит очень стильно и аккуратно, а также не требует сложного ухода.',
      },
    ],
  },
  {
    id: 4,
    link: 'grunge',
    serviceName: 'Гранж',
    price: 2500,
    time: 60,
    image: grunge,
    bigImage: grunge_big,
    description:
      'Гранж - это стиль прически, который характеризуется растрепанными волосами и небрежным видом.',
    history:
      'Прическа Гранж появилась в 90-х годах и стала популярной благодаря таким группам, как Nirvana и Pearl Jam. Она была символом бунтарства и непокорности, и до сих пор остается актуальной для тех, кто хочет выделиться из толпы.',
    features: [
      {
        id: 1,
        info: 'Прически в стиле гранж подходят для мужчин с разными формами лица и типами волос.',
      },
      { id: 2, info: 'Прическа требует ухода и ежедневной укладки.' },
    ],
  },
  {
    id: 5,
    link: 'canadian',
    serviceName: 'Канадка',
    price: 1800,
    time: 40,
    image: canadian,
    bigImage: canadian_big,
    description:
      'Канадка - это стрижка для мужчин, которая получила свое название из-за того, что ее часто носили канадские хоккеисты. Она характеризуется короткими волосами по бокам и чуть более длинными сверху.',
    history:
      'Канадка появилась в 70-х годах прошлого века, когда многие канадские хоккеисты начали носить эту стрижку. Она быстро стала популярной не только среди спортсменов, но и среди обычных людей. В настоящее время “канадка” остается одной из самых популярных стрижек для мужчин во всем мире.',
    features: [
      {
        id: 1,
        info: 'Канадка подходит для мужчин с различными формами лица и структурой волос.',
      },
      {
        id: 2,
        info: 'Эту стрижку можно выполнить на волосах любой длины, но лучше всего она смотрится на мужчинах с густыми волосами.',
      },
    ],
  },
  {
    id: 6,
    link: 'undercard',
    serviceName: 'Андеркат',
    price: 2500,
    time: 60,
    image: undercard,
    bigImage: undercard_big,
    description:
      'Андеркат - это мужская стрижка, которая стала популярной в XIX веке. Она характеризуется выбритыми висками и длинными волосами на макушке.',
    history:
      'В XX веке Андеркат стал особенно популярен среди музыкантов и спортсменов, таких как The Beatles, Дэвид Бекхэм и другие. В настоящее время эта стрижка остается одной из самых модных и стильных.',
    features: [
      {
        id: 1,
        info: 'Прическа характеризуется выбритыми висками и затылком и длинными волосами на верхней части головы.',
      },
      { id: 2, info: 'Андеркат подходит для мужчин с квадратной или овальной формой лица.' },
    ],
  },
  {
    id: 7,
    link: 'quiff',
    serviceName: 'Квифф',
    price: 2500,
    time: 50,
    image: quiff,
    bigImage: quiff_big,
    description:
      'Квифф - это мужская стрижка, которая сочетает в себе элементы помпадур и андеркат. Она характеризуется длинными волосами на лбу и короткими на затылке.',
    history:
      'Квифф (от англ. quiff – чуб) – это мужская стрижка в стиле ретро, которая была популярна в середине прошлого века. Эта стрижка стала особенно популярна в 2010-х годах благодаря знаменитостям, таким как Джастин Тимберлейк и Дэвид Бекхэм.',
    features: [
      { id: 1, info: 'Квифф подходит для мужчин с овальным или треугольным лицом.' },
      { id: 2, info: 'Подойдёт тем, кто хочет добавить своему образу немного ретро-шика.' },
    ],
  },
  {
    id: 8,
    link: 'pompadour',
    serviceName: 'Помпадур',
    price: 2500,
    time: 60,
    image: pompadour,
    bigImage: pompadour_big,
    description:
      'Помпадур характеризуется объемной верхней частью волос, которая зачесана назад и вверх.',
    history:
      'Помпадур — это мужская прическа, которая была очень популярна в 18-19 веках. Она характеризуется объемным верхом волос, который зачесывается назад и вверх, создавая форму похожую на ту, что носила французская королева Мария-Антуанетта.',
    features: [
      { id: 1, info: 'Помпадур подходит для мужчин с круглым или овальным лицом.' },
      { id: 2, info: 'Помпадур обычно выполняется на волосах средней длины.' },
      { id: 3, info: 'Подойдёт тем, кто хочет добавить своему образу немного ретро-шика' },
    ],
  },
  {
    id: 9,
    link: 'caesar',
    serviceName: 'Цезарь',
    price: 1800,
    time: 40,
    image: caesar,
    bigImage: caesar_big,
    description:
      'Цезарь - это короткая стрижка, которая характеризуется короткой длиной волос и прямой челкой, которая закрывает лоб.',
    history:
      'Стрижка получила свое название в честь римского императора Гая Юлия Цезаря. Прическа появилась в Древнем Риме во времена правления императора Гая Юлия Цезаря (100-44 гг. до н. э.). Она стала популярной среди его солдат и приближенных, а затем распространилась по всему миру.',
    features: [
      { id: 1, info: 'Цезарь подходит для мужчин с прямоугольной или овальной формой лица.' },
      {
        id: 2,
        info: 'Эта стрижка выглядит очень стильно и аккуратно, а также не требует сложного ухода',
      },
    ],
  },
];

const hairColoring = [
  {
    id: 1,
    image: monochromeColoring,
    item: 'Однотонное окрашивание',
    description:
      'Этот вид окрашивания подходит для тех, кто хочет изменить свой цвет волос, но не хочет сильно экспериментировать.',
    price: 4000,
    time: 90,
  },
  {
    id: 2,
    image: highlighting,
    item: 'Мелирование',
    description:
      'Окрашивание отдельных прядей волос в более светлый или более темный оттенок. Это позволяет создать эффект выгоревших на солнце волос и добавить объем прическе.',
    price: 3500,
    time: 75,
  },
  {
    id: 3,
    image: ombre,
    item: 'Омбре',
    description:
      'Это вид окрашивания, при котором цвет волос меняется от темного у корней до более светлого на концах. Этот эффект достигается с помощью использования нескольких оттенков краски.',
    price: 4500,
    time: 100,
  },
];

const makeup = [
  {
    id: 1,
    image: everydayMakeup,
    item: 'Повседневный макияж',
    description:
      'Это базовый вид макияжа, который подходит для ежедневного использования. Он включает в себя коррекцию недостатков кожи, нанесение румян, теней для век и помады.',
    price: 1500,
    time: 25,
  },
  {
    id: 2,
    image: eveningMakeup,
    item: 'Вечерний макияж',
    description:
      'Более яркий и выразительный вид макияжа, предназначенный для особых случаев. Он может включать в себя использование ярких теней, накладных ресниц, карандашей для глаз и губ и других декоративных элементов.',
    price: 3000,
    time: 35,
  },
  {
    id: 3,
    image: weddingMakeup,
    item: 'Свадебный макияж',
    description:
      'Особый вид макияжа, который должен быть стойким и красивым на протяжении всего дня. Он обычно включает в себя сочетание повседневного и вечернего макияжа с акцентом на глаза и губы',
    price: 5000,
    time: 40,
  },
];

const solariumService = [
  {
    id: 1,
    image: solarium,
    item: 'Горизонтальный солярий',
    description:
      'Солярий используется для получения искусственного загара. Он также может быть полезен для лечения некоторых заболеваний, связанных с кожей. Однако, следует помнить, что чрезмерное использование солярия может привести к негативным последствиям для здоровья.',
    price: 20,
    time: 3,
  },
];

const cosmetology = [
  {
    id: 1,
    item: 'Чистка лица',
    description: 'Процедура, которая помогает удалить загрязнения и ороговевшие клетки кожи.',
    price: 1000,
    time: 30,
  },
  {
    id: 2,
    item: 'Пилинг',
    description:
      'Процедура, при которой используются различные химические вещества для удаления ороговевших клеток кожи.',
    price: 1500,
    time: 45,
  },
  {
    id: 3,
    item: 'Массаж лица',
    description:
      'Процедура, при которой используются различные химические вещества для удаления ороговевших клеток кожи.',
    price: 1500,
    time: 45,
  },
  {
    id: 4,
    item: 'Увлажнение кожи',
    description:
      'Процедура, , при которой на кожу наносятся специальные средства, которые помогают удерживать влагу в коже.',
    price: 1200,
    time: 25,
  },
  {
    id: 5,
    item: 'Лечение акне',
    description:
      'Процедуры, которые помогают уменьшить воспаление и очистить поры от избыточного кожного сала.',
    price: 2500,
    time: 60,
  },
  {
    id: 6,
    item: 'Лазерная эпиляция',
    description: 'Процедура, которая позволяет избавиться от нежелательных волос на теле.',
    price: 3000,
    time: 45,
  },
];

const massage = [
  {
    id: 1,
    item: 'Классический массаж',
    description:
      'Один из самых популярных видов массажа, который используется для расслабления мышц, улучшения кровообращения и снятия стресса.',
    price: 2000,
    time: 45,
  },
  {
    id: 2,
    item: 'Спортивный массаж',
    description:
      'Спортивный массаж отличается от классического тем, что он более интенсивный и направлен на расслабление мышц после физических нагрузок.',
    price: 2500,
    time: 45,
  },
  {
    id: 3,
    item: 'Арома-массаж',
    description:
      'Вид массажа, при котором используются эфирные масла для улучшения настроения, снижения стресса и улучшения общего самочувствия.',
    price: 3000,
    time: 60,
  },
  {
    id: 4,
    item: 'Массаж головы',
    description:
      'Этот вид массажа направлен на снижение уровня головных болей, успокаивает, расслабляет и помогает улучшить рост волос.',
    price: 1000,
    time: 25,
  },
  {
    id: 5,
    item: 'Тайский массаж',
    description:
      'Массаж включает в себя использование различных техник, таких как растяжка, массаж глубоких тканей и акупрессура.',
    price: 3500,
    time: 70,
  },
  {
    id: 6,
    item: 'Стоун-массаж',
    description:
      'Уникальная техника массажа, основанная на использовании горячих и холодных камней. Улучшает кровообращение, снимет стресс и напряжение.',
    price: 4000,
    time: 90,
  },
];

const tattooing = [
  {
    id: 1,
    item: 'Татуаж бровей',
    description:
      'Нанесение специальных пигментов для создания стойкого и долговременного макияжа. В результате брови выглядят более яркими и выразительными.',
    price: 7000,
    time: 90,
  },
  {
    id: 2,
    item: 'Татуаж губ',
    description:
      'Ваши губы будут выглядеть более яркими и объемными, а их форма и цвет сохраняются на длительное время.',
    price: 10000,
    time: 120,
  },
  {
    id: 3,
    item: 'Татуаж век',
    description:
      'С помощью этой процедуры можно скорректировать форму, увеличить или уменьшить глаза.',
    price: 8500,
    time: 100,
  },
];

export {
  haircutWomenData,
  haircutManData,
  hairColoring,
  makeup,
  solariumService,
  cosmetology,
  massage,
  tattooing,
};
