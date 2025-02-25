// Инициализация Swiper с адаптивными настройками
var swiper = new Swiper('.swiper-container', {
  // Включаем пагинацию
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  // Включаем навигационные кнопки
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Автопрокрутка (по желанию)
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  // Включаем бесконечную прокрутку
  loop: true,
  
  // Настройки адаптива
  breakpoints: {
      // Когда экран >= 1024px (ПК)
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      // Когда экран >= 768px (планшеты)
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      // Когда экран >= 320px (телефоны)
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      }
  }
});
