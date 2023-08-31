import a from "./../images/tracks/1.png";
import b from  "./../images/tracks/2.png";
import c from  "./../images/tracks/3.png";
import d from  "./../images/tracks/4.png";
import e from  "./../images/tracks/5.png";
import f from  "./../images/tracks/6.png";
import g from  "./../images/tracks/7.png";
import h from  "./../images/tracks/8.png";
import i from  "./../images/tracks/9.png";
import j from  "./../images/tracks/10.png";
import k from  "./../images/tracks/11.png";
import l from  "./../images/tracks/12.png";
import m from  "./../images/tracks/13.png";
import n from  "./../images/tracks/14.png";
import o from  "./../images/tracks/15.png";
import p from  "./../images/tracks/16.png";
import q from  "./../images/tracks/17.png";
import r from  "./../images/tracks/18.png";
import s from  "./../images/tracks/19.png";
import t from  "./../images/tracks/20.png";
import u from  "./../images/tracks/21.png";

let state = [
	{
		id: 1,
		path: "гряда Вярямянселькя. Петяярви.",
		screenshot: a,
		track: "https://nakarte.me/#m=12/60.62118/30.06083&l=O&nktl=aPAc1ZXn7Y117tWGQEPHsw",
		distance: 47,
		station: "Новая Охта - Петяярви - Новая Охта",
		there: [
			{
				time: "9:56",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602741&toName=Петяярви&when=завтра"},
					{speedTrain: ""},
				],
				coast: 222,
			}
		],
		back: [
			{
				time: "16:11 17:37 20:07 21:39",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9602741&fromName=Петяярви&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
					{speedTrain: ""},
				],
				coast: 222,
			}
		],

		comments: "Хороший маршрут по экотропам, много черники",
		isTrain: true,
		isCompleted: "Пройден",
		isNew: false,
		isDoubleStation: false,
	},
	{
		id: 2,
		path: "Петяярви - экотропа - Сосново",
		screenshot: b,
		track: "https://nakarte.me/#m=12/60.60005/30.15809&l=O&nktl=8csfIaZqLODHWU_q2nvbuw",
		distance: 66,
		station: "Новая Охта - Петяярви - Сосново - Новая Охта",
		there: [
			{
				time: "9:56",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602741&toName=Петяярви&when=завтра"},
					{speedTrain: ""},
				],
				coast: 222,
			}
		],
		back: [
			{
				time: "17:22, 17:55, 18:56, 20:18, 20:53, 21:50",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=c10890&fromName=Сосново&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
					{speedTrain: ""},
				],
				coast: 187,
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
		isDoubleStation: false,
	},
	{ 
	
		id: 3,
		path: "Станция 54 км - Токсово",
		screenshot: c,
		track: "https://nakarte.me/#m=10/59.90684/30.76447&l=O&nktl=fcUTByJbalstaXbdwrNygQ",
		distance: 52,
		station: "Новая Охта - 54 км - Токсово - Новая Охта",
		there: [
			{
				time: "9:02 9:56 10:50 11:55",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
					{speedTrain: ""},
				],
				coast: "128 - 146",
			}
		],
		back: [
			{
				time: "22:48 - последняя",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603261&fromName=54+км&toId=c21147&toName=Токсово&when=завтра"},
					{speedTrain: ""},
				],
				coast: "54",
			}
		],
		comments: "Можно поехать дальше до Осельков или Кузьмоловского",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
		isDoubleStation: false,
	},
	{

		id: 4,
		path: "Станция 54 км - домой. Вариант 1",
		screenshot: d,
		track: "https://nakarte.me/#m=11/60.11955/30.39148&l=O&nktl=ZCJqldpj6DAEH6FwNY0onA",
		distance: 72,
		station: "Новая Охта - 54 км - домой через бугры",
		there: [
			{

				time: "9:02 9:56 10:50 11:55",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
					{speedTrain: ""},
				],

				coast: "128 - 146",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
		isDoubleStation: false,
	},
	{
		id: 5,
		path: "Станция 54 км - домой. Вариант 2",
		screenshot: e,
		track: "https://nakarte.me/#m=13/60.06457/30.43141&l=O&nktl=OdKtxXFWEFgAngvGsqL0uQ",
		distance: 75,
		station: "Новая Охта - 54 км - домой через Мурино",
		there: [
			{
				time: "9:02 9:56 10:50 11:55",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
					{speedTrain: ""},
				],
				coast: "128 - 146",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
		isDoubleStation: false,
	},
	{
		id: 6,
		path: "Дом - Коркинское озеро - Колтушские высоты",
		screenshot: f,
		track: "https://nakarte.me/#m=11/59.95453/30.63895&l=O&nktl=uvNJc_Z_STULZPruHAbTHA",
		distance: 71,
		station: "",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Хороший маршрут. По асфальту.",
		isTrain: false,
		isCompleted: "Пройден",
		isNew: false,
		isDoubleStation: false,
	},
	{
		id: 7,
		path: "Бор - мыс Киперорт - Выборг",
		screenshot: g,
		track: "https://nakarte.me/#m=10/60.60989/28.85147&l=O&nktl=bjtNFJkJaatDqPJZMUJg_Q",
		distance: 84,
		station: "Ланская / Удельная - Бор - Выборг - Ланская / Удельная",
		there: [
			{
				time: "Ланская - 7:24, Удельная - 8:04",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603444&fromName=Ланская&toId=s9603446&toName=Бор&when=завтра"},
					{speedTrain: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=s9603446&toName=Бор&when=завтра"},
				],
				coast: "112 руб. + 200",
			}
		],
		back: [
			{
				time: "Ласточка - 18:44, 18:55, 19:37, ласточка - 20:44, 20:50, лосточка с местами - 21:38",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603175&fromName=Выборг&toId=s9603444&toName=Ланская&when=завтра"},
					{speedTrain: "https://t.rasp.yandex.ru/search/suburban/?fromId=c969&fromName=Выборг&toId=s9603463&toName=Удельная&when=завтра"},
				],
				coast: "321 руб. - от 566",
			}
		],
		comments: "Дорога после экотропы - асфальт. Самый короткий маршрут если не уезжать с Бора или Приморска. Туда ехать 2ч 32 мин с Удельной или 3ч 14 мин с Ланской ",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 8,
		path: "Бор - мыс Киперорт - Гаврилово",
		screenshot: h,
		track: "https://nakarte.me/#m=11/60.53432/29.02451&l=O&nktl=mtq8goY7pLCFlz_W9WR3gw",
		distance: 85,
		station: "Ланская / Удельная - Бор - Гаврилово - Ланская / Удельная",
		there: [
			{
				time: "Ланская - 7:24, Удельная - 8:04",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=s9603446&toName=Бор&when=завтра"},
					{speedTrain: ""},
				],
				coast: "112 руб. + 200",
			}
		],
		back: [
			{
				time: "16:55, 19:20, 20:01",
				links: [
					{train: "https://t.rasp.yandex.ru/search/?fromId=s9603654&fromName=Гаврилово&toId=s9603463&toName=Удельная&when=завтра"},
					{speedTrain: ""},
				],
				coast: "259",
			}
		],
		comments: "Дорога до Гаврилово - лесные тропы. Маршрут сложный.",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 9,
		path: "Гаврилово - озера - Выборг",
		screenshot: i,
		track: "https://nakarte.me/#m=11/60.71727/29.08163&l=O&nktl=efhG26-2-uOyKiCGiGqW8A",
		distance: 84,
		station: "Ланская / Удельная - Гаврилово - Выборг - Ланская / Удельная",
		there: [
			{
				time: "8:11, 9:43",
				links: [
					{train: "https://t.rasp.yandex.ru/search/?fromId=s9603444&fromName=Ланская&toId=s9603654&toName=Гаврилово&when=завтра"},
					{speedTrain: ""},
				],
				coast: "266",
			}
		],
		back: [
			{
				time: "Ласточка - 18:44, 18:55, 19:37, ласточка - 20:44, 20:50, лосточка с местами - 21:38",
				links: [
					{train: "https://t.rasp.yandex.ru/search/suburban/?fromId=c969&fromName=Выборг&toId=s9603463&toName=Удельная&when=завтра"},
					{speedTrain: ""},
				],
				coast: "321 руб. - от 566",
			}
		],
		comments: "Маршрут чужой. Часть маршрута по лесным тропам. Много озер. Можно уехать на станцию раньше Выборга (Верхнее Черкасово)",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 10,
		path: "Каннельярви - Красногвардейское озеро - Гаврилово",
		screenshot: j,
		track: "https://nakarte.me/#m=12/60.32559/29.36220&l=O&nktl=4CFMC8bX9UBykbdkvD0Kpg",
		distance: "85",
		station: "Ланская / Удельная - Каннельярви - Гаврилово - Ланская",
		there: [
			{
				time: "Ласточка - 8:04, 9:32, 11:34 Ланская - 8:11, 9:43, 10:18",
				links: [
					{train: "https://t.rasp.yandex.ru/search/?fromId=s9603463&fromName=Удельная&toId=c73117&toName=Каннельярви&when=завтра"},
					{speedTrain: ""},
				],
				coast: "169 руб - 191",
			}
		],
		back: [
			{
				time: "16:55, 19:20, 20:01",
				links: [
					{train: "https://t.rasp.yandex.ru/search/?fromId=s9603654&fromName=Гаврилово&toId=s9603463&toName=Удельная&when=завтра"},
					{speedTrain: ""},
				],
				coast: "259",
			}
		],
		comments: "Маршрут в основном по дорогам.",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 11,
		path: "станция 73 км - Красногвардейское озеро - мыс Кюрённиеми - Каннельярви",
		screenshot: k,
		track: "https://nakarte.me/#m=9/60.45993/29.68231&l=O&nktl=6lGXjVLrz6_xL7JLiblDnw",
		distance: 85,
		station: "Ланская - станция 73 км - Каннельярви - Ланская / Удельная",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Нужно переделать. У ДОЛ Зеркальный плохая дорога. Тропа вдоль пляжа - песочная. Тропа в Лужки заболоченная. Дорога 41К-092 - с грунтовка колдобинами",
		isTrain: true,
		isCompleted: "Пройден частично",
		isNew: false,
	},
	{
		id: 12,
		path: "Каннельярви - мыс Кюрённиеми - Каннельярви",
		screenshot: l,
		track: "https://nakarte.me/#m=10/60.36975/29.28680&l=O&nktl=VSEFJx9NaU5d7TLwJoFLEQ",
		distance: 82,
		station: "Каннельярви - Каннельярви",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Самый короткий маршрут. Все по асфальту. Можно уехать с Кулеомоярви если что.",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 13,
		path: "Зеленогорск - Красногвардейское озеро - Рощино",
		screenshot: m,
		track: "https://nakarte.me/#m=15/60.35666/29.39705&l=O&nktl=Jcw5FrTMvewVAoVZp9tW5g",
		distance: 83,
		station: "Зеленогорск - Рощино",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Можно уехать с Каннельярви - 61 км, с Горьковского - 73 км, с Рощино - 83 км. Маршрут по дорогам",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 14,
		path: "Зеленогорск - огибая Гладышевское и Красногвардейское озеро - Каннельярви",
		screenshot: n,
		track: "https://nakarte.me/#m=12/60.31763/29.39729&l=O&nktl=hfgVchttkkvucirZFVYwOQ",
		distance: 72,
		station: "Ланская / Удельная - Зеленогорск. Каннельярви - Ланская",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Машрут по дорогам, Кроме гладышевского озера",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 15,
		path: "Зеленогорск - Гладышевское озеро - Зеленогорск",
		screenshot: o,
		track: "https://nakarte.me/#m=12/60.27337/29.55906&l=O&nktl=VdTo4UW0K3_lSooE8DDFmA",
		distance: 71,
		station: "Ланская / Удельная - Зеленогорск. Зеленогорск - Ланская / Удельная",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "В основном по дорогам, гладыщевское озеро - лесные тропы. Можно не объезжать озеро, а свернуть на 23 км (всего 66 км). Можно уехать с Горьковской на 45 км или из  Рощино на 58 км. В осовном по шоссе",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 16,
		path: "Зеленогорск - Линдуловская роща - Гладышевская экотропа - Гладышевское озеро - Рощино",
		screenshot: p,
		track: "https://nakarte.me/#m=12/60.26206/29.51985&l=O&nktl=oUKltHbdAtY0YPmVXBuLYg",
		distance: 75,
		station: "Зеленогорск - Рощино",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Гладышевская экотропа идет вдоль ручья, может быть не в лучшем состоянии. С половины тропы можно уйти на дорогу. Можно не объезжать вокруг озера. Можно уехать со станции 73 км (маршрут 61 км)",
		isTrain: true,
		isCompleted: "",
		isNew: true,
	},
	{
		id: 17,
		path: "Медное и Пасторское озеро",
		screenshot: q,
		track: "https://nakarte.me/#m=11/60.06073/30.32625&l=O&nktl=5gjXbnro6nKYLidyaDG7sw",
		distance: 88,
		station: "",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Если от полей повернуть направо и ехать через ленту, то километраж получится такой же. На 63 км можно ехать по Советской улице и дальше повернуть на Горское шоссе, а не поворачивать Ленинградскую улицу, тк в Левашово нужно переходить пути сверху по переходу. Половина пути по шоссе",
		isTrain: false,
		isCompleted: "Пройден до медного озера",
		isNew: true,
	},
	{
		id: 18,
		path: "54 км - маяк Сайнасаари - Сосново",
		screenshot: r,
		track: "https://nakarte.me/#m=13/60.56791/30.60637&l=O&nktl=SI03f97E32vbUyT-7Qel7g",
		distance: 69,
		station: "54 КМ - Сосново",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Можно не заезжать на мыс Резной, а вернуться по Центральной улице, затем повернуть на Раздольную улицу, тогда получится 66 км. Дорого туда частично по шоссе, жирным тропам и грунтовой дороге, обратно - по шоссе. (Маршрут с сайта велопитер).",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 19,
		path: "Отрадное - Приозерск",
		screenshot: s,
		track: "https://nakarte.me/#m=11/60.95378/30.24536&l=O&nktl=jUY4J0TGonaw7wm8fOyXyQ",
		distance: 56,
		station: "",
		there: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
					{train: ""},
					{speedTrain: ""},
				],
				coast: "",
			}
		],
		comments: "Начало пути по асфальту, затем по грунту и затем по лесной дороге (жирный пунктир). Если лесная дорога будет плохая можно свернуть на грунтовую дорогу 41К-012 на 21 км, 23 км, 25 км или 30 км. После маяка асфальт, можно поехать не в Приозерск, а на станцию Синево (~10 км, всего ~59 км).",
		isTrain: true,
		isCompleted: "",
		isNew: true,
	},
	{
		id: 20,
		path: "Кузнечное -Каменногорск - Выборг",
		screenshot: t,
		track: "https://nakarte.me/#m=9/60.99868/29.62463&l=O&nktl=eKMxUerrBG1mZeg-jEorEg",
		distance: 105,
		station: "Кузнечное - Выборг",
		there: [
			{
				time: "",
				links: [
{train: ""},
{speedTrain: ""},
],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
{train: ""},
{speedTrain: ""},
],
				coast: "",
			}
		],
		comments: "Маршрут с сайта велопитер. 60 км в начале по грунтовке, затем по лесным дорогам. Маршрут идет вдоль жд ветки, электрички ходят раз в день, днем. ",
		isTrain: true,
		isCompleted: "Не пройден",
		isNew: true,
	},
	{
		id: 21,
		path: "Выборг - Экотропа Карельская тишина - Каменногорск",
		screenshot: u,
		track: "https://nakarte.me/#m=12/60.84859/29.41198&l=O&nktl=K48narWilBFUaoV0nIkmQA",
		distance: 106,
		station: "Выборг - Каменногорск",
		there: [
			{
				time: "",
				links: [
{train: ""},
{speedTrain: ""},
],
				coast: "",
			}
		],
		back: [
			{
				time: "",
				links: [
{train: ""},
{speedTrain: ""},
],
				coast: "",
			}
		],
		comments: "Если стартовать с Каменногорская, то это 70 км",
		isTrain: true,
		isCompleted: "",
		isNew: true,
	},

]
export default state;