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

			MAIN MODALS

---------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    // Функция для добавления класса
    const addClass = (selector, className) => {
        if (className) {
            document.querySelector(selector)?.classList.add(className);
        }
    };

    // Функция для удаления класса у всех элементов с заданным селектором
    const removeAllClasses = (selector, className) => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.remove(className);
        });
    };

    // Обработчики для кликов
    const handleClick = (triggerSelector, targetSelector, modalClass) => {
        document.querySelector(triggerSelector)?.addEventListener('click', () => {
            if (modalClass) {
                addClass('.main-page__modal', modalClass);
            }
            addClass(targetSelector, 'main-page__modal-item_active');
        });
    };

    handleClick('.main-page__header-personal', '.main-page__authorization', 'main-page__modal_active');
    handleClick('.main-page__title-personal', '.main-page__authorization', 'main-page__modal_active');
    handleClick('.main-page__modal-recall', '.main-page__recovery', '');
    handleClick('.main-page__header-phone', '.main-page__phone', 'main-page__modal_active');

    // Обработчик для "main-page__modal-back"
    document.querySelector('.main-page__modal-back')?.addEventListener('click', () => {
        removeAllClasses('.main-page__recovery', 'main-page__modal-item_active');
    });

    // Обработчик для "main-page__modal-close"
    document.querySelector('.main-page__modal-close')?.addEventListener('click', () => {
        removeAllClasses('.main-page__modal-item_active', 'main-page__modal-item_active');
        removeAllClasses('.main-page__modal', 'main-page__modal_active');
    });
});




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
