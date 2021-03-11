function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});
//Слайдер=====================================================================
// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		/* renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}, */
		
		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/
		// Прогрессбар
		//type: 'progressbar'
	},
	// Скролл
	/*
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	*/

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	/* hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	}, */

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	/* mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	}, */

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	//effect: 'slide',

	/*
	// Эффекты переключения слайдов.
	// Cмена прозрачности
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		crossFade: true
	},
	*/
	/*
	// Эффекты переключения слайдов.
	// Переворот
	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/
	
	// Эффекты переключения слайдов.
	// Куб
	effect: 'cube',

	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	
	
	// Эффекты переключения слайдов.
	// Эффект потока
	/* effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 30,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	}, */
	
	
	// Брейк поинты (адаптив)
	// Ширина экрана
	/* breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		}, 
		992: {
			slidesPerView: 3,
		}
	}, */
	
	
	// Брейк поинты (адаптив)
	// Соотношение сторон
	/* breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	}, */
	

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 3,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Миниатюры (превью)
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/
	/*
	// Передача управления
	controller: {
		control: myTextSlider
	},
	*/

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Виртуальные слайды
	// формирование слайдера
	/*
	virtual: {
		slides: (function () {
			let slide = []
			for (let i = 0; i < 500; i++) {
				slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
			}
			return slide;
		}()),
	},
	*/
	/*
	// Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	*/
	/*
	// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/
});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа
	// перетаскивания\свайпа
	// для дочернего слайдера
	nested: true,
});
*/
/*
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/


/*
// Параметры
// Получение
let qSlides = myImageSlider.slides.length;

// Изменение
myImageSlider.params.speed = 3000;
*/

/*
// Методы
// Обновить слайдер
myImageSlider.update();

// Переключится на слайд 2, скорость 800
myImageSlider.slideTo(2, 800);
*/

/*
// События
// Событие смены слайда
myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
});
*/


/*
// Запуск автоппрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});

*/


/*
// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/

$(document).ready(function() {
	$('.button-menu').click(function (event) {
		$('.button-menu').toggleClass('active');
		$('.button-menu, .ring-menu').toggleClass('is-active');
	});
});

	$(document).ready(function() {
		$('.corner1').click(function (event) {
			$('.corner1').toggleClass('active');
			$('.corner1, .page1__right1, .page1__left1').toggleClass('is-active');
		});
	});

	$(document).ready(function() {
		$('.page2__left2').click(function (event) {
			$('.page2__left2').toggleClass('active');
			$('.page2__left2, .line1, .line2, .line3, .line4, .line5, .corner1-2, .corner2-2, .corner3-2, .page2__left1, .page2__right1, .page2__right2, .corner4-2, .corner5-2, .corner6-2').toggleClass('is-active');
		});
	});

	$(document).ready(function() {
		$('.question-left').click(function (event) {
			$('.question-left').toggleClass('active');
			$('.question-left, .little-roller__roll_2, .little-roller__roll_1, .little-roller__roll_3, .little-roller__roll_4').toggleClass('is-active');
		});
	});

	$(document).ready(function() {
		$('.question-top').click(function (event) {
			$('.question-top').toggleClass('active');
			$('.question-top, .little-roller__roll_2, .little-roller__roll_1, .little-roller__roll_3, .little-roller__roll_4').toggleClass('is-active');
		});
	});

	$(document).ready(function() {
		$('.question-right').click(function (event) {
			$('.question-right').toggleClass('active');
			$('.question-right, .little-roller__roll_2, .little-roller__roll_1, .little-roller__roll_3, .little-roller__roll_4').toggleClass('is-active');
		});
	});

	$(document).ready(function() {
		$('.question-bottom').click(function (event) {
			$('.question-bottom').toggleClass('active');
			$('.question-bottom, .little-roller__roll_2, .little-roller__roll_1, .little-roller__roll_3, .little-roller__roll_4').toggleClass('is-active');
		});
	});


	const select = document.querySelector('select');
const allLang = ['ru', 'ua'];
const langArr = {
	"1": {
		"ru": "Приглашение!",
		"ua": "Запрошення!",
	},
	"2": {
		"ru": "Да-да, именно Вас!!!",
		"ua": "Так-так, саме Вас!!!",
	},
	"3": {
		"ru": "Самая счастливая пара в мире:",
		"ua": "Найщасливіша пара в світі:",
	},
	"4": {
		"ru": "Александр и Наталья",
		"ua": "Олександр і Наталя",
	},
	"5": {
		"ru": "рада пригласить разделить с нами",
		"ua": "рада запросити розділити з нами",
	},
	"6": {
		"ru": "один из важнейших",
		"ua": "один з найважливіших",
	},
	"7": {
		"ru": "и торжественнейших дней",
		"ua": "та визначних днів",
	},
	"8": {
		"ru": "в Нашей жизни!",
		"ua": "у нашому житті!",
	},
	"9": {
		"ru": "Этот день станет красивым началом нашей долгой и счастливой жизни.",
		"ua": "Цей день стане яскравим початком нашого довгого та щасливого життя.",
	},
	"10": {
		"ru": "Торжество, посвящённое этому знаменательному, счастливому дню, не может пройти без близких и дорогих нам людей.",
		"ua": "Святкування, присвячене цьому урочистому, щасливому дню, не може пройти без близьких і дорогих нам людей.",
	},
	"11": {
		"ru": "Разделите с нами нашу радость, выразите добрые пожелания в начале нашего большого совместного пути.",
		"ua": "Розділіть з нами нашу радість, висловіть добрі побажання на початку нашого спільного великого шляху.",
	},
	"12": {
		"ru": "Праздник состоится в ресторане &quot;Прага&quot;",
		"ua": "Святкування відбудеться у ресторані &quot;Прага&quot;",
	},
	"13": {
		"ru": "Время государственной регистрации брака <br> в Центральном ЗАГСе <br> г. Киев - 14:00",
		"ua": "Час державної реєстрації шлюбу <br> в Центральному РАГСі <br> м. Київ - 14:00",
	},
	"14": {
		"ru": "Александр и Наталья",
		"ua": "Олександр і Наталя",
	},
	"title": {
		"ru": "Приглашение на свадьбу",
		"ua": "Запрошення на весілля",
	},
};
select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
};

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['title'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

   }
}
changeLanguage();