/*---------------------------------

			PHONE MASK

---------------------------------*/

$('.form-input--phone').on('input', function () {
	if ($(this).val().trim() !== '') {
		$(this).addClass('form-input--phone--active');
	} else {
		$(this).removeClass('form-input--phone--active');
	}
});

$('.form-input--phone').mask('+7(000) 000 0000');



/*---------------------------------

			MENU-BURGER

---------------------------------*/

function showMenu() {
	// Get button elements
	const headerMenu = document.querySelector(".header__menu");
	const menuHamburger = document.querySelector(".header__burger");

	// Change class
	headerMenu.classList.toggle("header__menu_show");
	menuHamburger.classList.toggle("header__burger_active");
}



/*---------------------------------

	COPY TO CLIPBOARD

---------------------------------*/



document.addEventListener('DOMContentLoaded', () => {
	const copyButtons = document.querySelectorAll('.item-coin__wallet-copy');

	copyButtons.forEach(button => {
		button.addEventListener('click', () => {
			const walletBlock = button.closest('.item-coin__wallet');
			const valueToCopy = walletBlock.querySelector('.item-coin__wallet-value').textContent;

			navigator.clipboard.writeText(valueToCopy)
				.then(() => {
					console.log('Текст скопирован в буфер обмена');
				})
				.catch(err => {
					console.error('Ошибка при копировании: ', err);
				});
		});
	});
});



/*---------------------------------

	CLASS CHANGES WHEN CLICKED

---------------------------------*/



// We get all elements with a class 'main-farms__list'
const elements = document.querySelectorAll('.main-farms__list');

// Add a click event handler to each element
elements.forEach(element => {
	element.addEventListener('click', function () {
		// When you click on an element, we switch the class 'main-farms__list_active'
		this.classList.toggle('main-farms__list_active');
	});
});






/*---------------------------------

		OPEN RIGHT MODAL

---------------------------------*/

function openModal(nameModal, newClass) {
	// Отображаем выбранное модальное окно
	let selectedModals = document.querySelectorAll('.' + nameModal);

	// Проходим по каждому элементу и добавляем класс newClass
	selectedModals.forEach(element => {
		element.classList.add(newClass);
	});

	// Добавляем или удаляем overflow-y: hidden
	document.body.style.overflowY = 'hidden';
}



/*---------------------------------

		CLOSE RIGHT MODAL

---------------------------------*/

function closeModal(nameModal, newClass) {
	// Выбираем все элементы с классом nameModal
	var selectedModals = document.querySelectorAll('.' + nameModal);

	// Проходим по каждому элементу и удаляем класс newClass
	selectedModals.forEach(element => {
		element.classList.remove(newClass);
	});

	// Восстанавливаем overflow-y: auto у body
	document.body.style.overflowY = 'auto';
}





/*---------------------------------

		DROPWOWN LIST

---------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
	var selectDrops = document.querySelectorAll('.select-drop');

	// Добавление обработчиков событий для каждого выпадающего списка
	selectDrops.forEach(function (selectDrop) {
		var inputWrap = selectDrop.querySelector('.select-drop__input-wrap');
		var list = selectDrop.querySelector('.select-drop__list');

		// Отображение/скрытие списка при клике на область ввода
		inputWrap.addEventListener('click', function () {
			selectDrop.classList.toggle('select-drop_active');
		});

		var listItems = selectDrop.querySelectorAll('.select-drop__list-item');

		// Запись выбранного значения в input и скрытие списка при клике на элемент списка
		listItems.forEach(function (listItem) {
			listItem.addEventListener('click', function () {
				var selectedItemValue = listItem.textContent;
				selectDrop.querySelector('.select-drop__input').value = selectedItemValue;
				selectDrop.classList.remove('select-drop_active');
			});
		});
	});

	// Закрытие всех списков при клике вне области выпадающего списка
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.select-drop')) {
			selectDrops.forEach(function (selectDrop) {
				selectDrop.classList.remove('select-drop_active');
			});
		}
	});
});