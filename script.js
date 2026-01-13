/**
 * Vortex Games - Standalone Main Page
 * Автономная главная страница без переходов на другие страницы
 */

// Данные игр
const gamesData = [
  {
    id: 'hero-cyberpunk',
    title: 'Cyberpunk 2077',
    description: 'Станьте легендой Найт-Сити в культовой RPG от CD Projekt RED.',
    price: 41.38,
    originalPrice: 59.99,
    image: 'https://gamemag.ru/images/cache/News/News168480/b48eae8a89-2_2780x1200.jpg',
    tags: ['RPG', 'Открытый мир', 'Sci-Fi'],
    rating: 4.5,
    releaseDate: '2020-12-10'
  },
  {
    id: '1',
    title: 'Monster Hunter Wilds',
    description: 'Новое поколение легендарного симулятора охоты на монстров.',
    price: 69.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2246340/header.jpg',
    tags: ['Охота', 'Экшен-RPG', 'Кооператив'],
    rating: 4.7,
    releaseDate: '2025-02-28'
  },
  {
    id: '2',
    title: 'Sid Meier\'s Civilization VII',
    description: 'Революционная глава в истории самой известной глобальной стратегии.',
    price: 69.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1295660/header.jpg',
    tags: ['Стратегия', 'Пошаговая', '4X'],
    rating: 4.6,
    releaseDate: '2025-02-11'
  },
  {
    id: '3',
    title: 'Kingdom Come: Deliverance II',
    description: 'Масштабная историческая RPG о мести и преданности в средневековой Богемии.',
    price: 59.99,
    image: 'https://avatars.mds.yandex.net/get-mpic/12591611/2a00000194da192c1d9bdbeca99221caf1dc/orig',
    tags: ['Средневековье', 'RPG', 'Реализм'],
    rating: 4.8,
    releaseDate: '2025-02-04'
  },
  {
    id: '4',
    title: 'Black Myth: Wukong',
    description: 'Визуально ошеломляющая экшен-RPG по мотивам китайской мифологии.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg',
    tags: ['Souls-like', 'Мифология', 'Экшен'],
    rating: 4.8,
    releaseDate: '2024-08-20'
  },
  {
    id: '5',
    title: 'Elden Ring',
    description: 'Мастерский сплав сложного геймплея Souls и свободы огромного мира.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
    tags: ['Открытый мир', 'RPG', 'Сложная'],
    rating: 4.9,
    releaseDate: '2022-02-25'
  },
  {
    id: '6',
    title: 'Baldur\'s Gate 3',
    description: 'Эталонная партийная RPG с невероятной свободой выбора.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg',
    tags: ['Пошаговая', 'RPG', 'Фэнтези'],
    rating: 4.9,
    releaseDate: '2023-08-03'
  },
  {
    id: '7',
    title: 'Ghost of Tsushima',
    description: 'Кинематографичное приключение самурая в открытом мире Японии.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg',
    tags: ['Самураи', 'Экшен', 'Открытый мир'],
    rating: 4.9,
    releaseDate: '2024-05-16'
  },
  {
    id: '8',
    title: 'Helldivers 2',
    description: 'Интенсивный командный шутер о борьбе за управляемую демократию.',
    price: 39.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg',
    tags: ['Кооператив', 'Шутер', 'Фантастика'],
    rating: 4.7,
    releaseDate: '2024-02-08'
  },
  {
    id: '9',
    title: 'Red Dead Redemption 2',
    description: 'Кинематографический вестерн о закате эпохи Дикого Запада.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    tags: ['Вестерн', 'Открытый мир', 'Сюжетная'],
    rating: 4.8,
    releaseDate: '2019-12-05'
  },
  {
    id: '10',
    title: 'Hogwarts Legacy',
    description: 'Воплощение мечты каждого фаната «Гарри Поттера» в формате RPG.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg',
    tags: ['Магия', 'Фэнтези', 'Открытый мир'],
    rating: 4.7,
    releaseDate: '2023-02-10'
  },
  {
    id: '11',
    title: 'God of War Ragnarök',
    description: 'Финал скандинавских приключений Кратоса и Атрея.',
    price: 59.99,
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg',
    tags: ['Экшен', 'Мифология', 'Приключения'],
    rating: 4.8,
    releaseDate: '2024-09-19'
  },
  {
    id: '12',
    title: 'Alan Wake 2',
    description: 'Мрачный хоррор-детектив, переопределивший жанр повествования.',
    price: 49.99,
    image: 'https://yandex-images.clstorage.net/5pbQp6130/9d578cKkxt3/kbIpfFPxfyGfc4Kn5U6fNWWcJlXqqSCRd8T1ZQAUMGY4MK9s7kQQoDDsu9SxtsURZ0v9g4Zn86kjxoLl3IKKcwBx-i_T4qsxS_ZTYDNbW6d3D6YQaa783T7JrisKnalstnlp_3mRhLJ1PGjNLbJFwXdTpJnctaK99BpWNoYSFP6fYHBklzC8ahd-x_5iTFOn4tmvlmJldZP-BC3oAhpqKbC3JTw8m825o7VmBiZmhY2zH2-eX_okf_eW37LEk1T1m-6w4h08f6Ha9gawLsKf5W_Z5RrgZLFYv0lnbwoRb2b9-G90_taD_io-6c6kYAwBOpcnFtp173VwVda8ztKddt5gvCUSdrbm1_IENSIMEmziHK9W7aR2G_xErmXNGanl9nakPD5UyHlquiULYGgND7_R45PTNKQ4vZrXuIYbnjscpjusX3b8ZR72jr-vRdcvZ5VnECJkep61SmflgFynLHgxpvo_kcxxJbMkS-cjBM37lyTT2bOsevWWV_4IFBQ5nul4ph-3OuqXssPxKwIY7KXV755o57LXeApt5s2UKSY8_-0y-lvGNWqzaACpqIYBNVHi055wprU_X931C1KaMl7t8iQR8TPmGr3K9iMMG25t3CWRZq2xGX2DIyRInChvcrkvcTvcSbAtOmVHb2DITLPdI5Efdyx2P5qXdYqVHb7TbTlpGn-67ZT3RfaqAh5vIRYoFyjrsZv1BeUiS9hiLna_JTs5HE6543KsiWvqgYgyWWAfGT2tuXVSU3sMWhx6EGG84pK4PODV-wVwYAPR46nZYdCgpnnY_8vm7AUcaiH2OKd-d1AOPSDxKAEgb8tF_55oHJEw7_Xynh6wyBWfsJmp8C1fdT5vWr5LP6JPGuMuHeiX7-N9k_bAr-dNVavuPXul975SDn2tMeADbywMTP9XYREb8qw4P9AcfMxdU7PX5rFjlv_17tJ9wjHvzRhmaNBgXSrldtv4wS7uRc',
    tags: ['Хоррор', 'Детектив', 'Психологическая'],
    rating: 4.7,
    releaseDate: '2023-10-27'
  },
  // Игры "Скоро в продаже"
  {
    id: 'upcoming-gta6',
    title: 'Grand Theft Auto VI',
    description: 'Долгожданное продолжение легендарной серии от Rockstar Games.',
    price: 149.99,
    image: 'https://e3.365dm.com/25/04/1600x900/skynews-money-blog-gta_6879575.jpg?20250408092611',
    tags: ['Экшен', 'Открытый мир', 'Криминал'],
    rating: 0,
    releaseDate: '2025-10-15',
    upcoming: true
  },
  {
    id: 'upcoming-elder-scrolls-6',
    title: 'The Elder Scrolls VI',
    description: 'Новая глава легендарной RPG серии от Bethesda.',
    price: 69.99,
    image: 'https://i.ytimg.com/vi/AcAcJCpHfWg/maxresdefault.jpg',
    tags: ['RPG', 'Открытый мир', 'Фэнтези'],
    rating: 0,
    releaseDate: '2026-03-01',
    upcoming: true
  },
  {
    id: 'upcoming-hollow-knight-silksong',
    title: 'Hollow Knight: Silksong',
    description: 'Долгожданное продолжение культовой метроидвании.',
    price: 29.99,
    image: 'https://yastatic.net/naydex/yandex-search/IuXF71L54/89a34bnqO/zonv_HjkkoeJg7JRGxERvSKgS7DBcl9l-mCH1hDkZASOgteOwSMSrM8wCJKnmVBIt9QsnRHpw6fyRj638R4G8qoFFuQcUCM7ORsD1bextQmOpXewxTcCQaZlTzw',
    tags: ['Метроидвания', 'Инди', 'Платформер'],
    rating: 0,
    releaseDate: '2025-06-01',
    upcoming: true
  }
];

// Валюты
const currencies = {
  USD: { symbol: '$', rate: 1, position: 'before' },
  EUR: { symbol: '€', rate: 0.92, position: 'before' },
  KZT: { symbol: '₸', rate: 510, position: 'after' },
  RUB: { symbol: '₽', rate: 97.5, position: 'after' },
  JPY: { symbol: '¥', rate: 149.8, position: 'before' }
};

// Состояние приложения
let cart = [];
let wishlist = new Set();
let currentCurrency = localStorage.getItem('currency') || 'USD';
let currentFilter = 'new';

// DOM элементы
const gamesGrid = document.getElementById('gamesGrid');
const recommendationsGrid = document.getElementById('recommendationsGrid');
const recommendationsScroll = document.getElementById('recommendationsScroll');
const recommendationsPrev = document.getElementById('recommendationsPrev');
const recommendationsNext = document.getElementById('recommendationsNext');
const cartBadge = document.getElementById('cartBadge');
const currencyButton = document.getElementById('currencyButton');
const currencySelector = document.querySelector('.currency-selector');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  initCurrencySelector();
  renderRecommendations();
  renderGames();
  updateHeroPrice();
  updateCartBadge();
  initEventListeners();
});

// Загрузка из localStorage
function loadFromStorage() {
  const savedCart = localStorage.getItem('vortex_cart_standalone');
  if (savedCart) {
    const cartIds = JSON.parse(savedCart);
    cart = cartIds.map(id => gamesData.find(g => g.id === id)).filter(Boolean);
  }
  
  const savedWishlist = localStorage.getItem('vortex_wishlist_standalone');
  if (savedWishlist) {
    wishlist = new Set(JSON.parse(savedWishlist));
  }
}

// Сохранение в localStorage
function saveCart() {
  localStorage.setItem('vortex_cart_standalone', JSON.stringify(cart.map(g => g.id)));
}

function saveWishlist() {
  localStorage.setItem('vortex_wishlist_standalone', JSON.stringify([...wishlist]));
}


// Форматирование цены
function formatPrice(priceUSD) {
  const currency = currencies[currentCurrency];
  const convertedPrice = priceUSD * currency.rate;
  const formattedNumber = Math.round(convertedPrice).toLocaleString();
  
  return currency.position === 'before' 
    ? `${currency.symbol}${formattedNumber}`
    : `${formattedNumber} ${currency.symbol}`;
}

// Инициализация селектора валют
function initCurrencySelector() {
  const symbol = currencies[currentCurrency]?.symbol || '$';
  currencyButton.querySelector('.currency-selector__code').textContent = symbol;
  
  document.querySelectorAll('.currency-selector__option').forEach(opt => {
    opt.classList.remove('currency-selector__option--active');
    if (opt.dataset.currency === currentCurrency) {
      opt.classList.add('currency-selector__option--active');
    }
  });
}

// Обновление цены в hero секции
function updateHeroPrice() {
  const heroPriceEl = document.getElementById('heroPrice');
  if (heroPriceEl) {
    heroPriceEl.textContent = formatPrice(41.38);
  }
}

// Получение игр по фильтру
function getGamesByFilter(filter, limit = 8) {
  const availableGames = gamesData.filter(g => !g.upcoming);
  const upcomingGames = gamesData.filter(g => g.upcoming);
  
  switch (filter) {
    case 'best':
      return [...availableGames].sort((a, b) => b.rating - a.rating).slice(0, limit);
    case 'upcoming':
      return upcomingGames.slice(0, limit);
    case 'new':
    default:
      return [...availableGames].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, limit);
  }
}

// Получение рекомендаций (случайная выборка)
function getRecommendedGames(limit = 8) {
  const availableGames = gamesData.filter(g => !g.upcoming);
  const shuffled = [...availableGames].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, limit);
}

// Форматирование даты релиза
function formatReleaseDate(dateString) {
  const date = new Date(dateString);
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Создание карточки игры
function createGameCard(game) {
  const discount = game.originalPrice 
    ? Math.round(((game.originalPrice - game.price) / game.originalPrice) * 100) 
    : null;
  
  const isWishlisted = wishlist.has(game.id);
  const isUpcoming = game.upcoming === true;
  
  return `
    <article class="game-card ${isUpcoming ? 'game-card--upcoming' : ''}" data-id="${game.id}">
      <div class="game-card__image-wrapper">
        <img src="${game.image}" alt="${game.title}" class="game-card__image">
        <div class="game-card__overlay">
          ${isUpcoming ? `
            <span class="game-card__coming-soon">Скоро</span>
          ` : `
            <button class="game-card__action game-card__action--cart" data-action="cart" title="Добавить в корзину">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          `}
          <button class="game-card__action game-card__action--wishlist ${isWishlisted ? 'game-card__action--active' : ''}" data-action="wishlist" title="В избранное">
            <span class="material-symbols-outlined">${isWishlisted ? 'favorite' : 'favorite_border'}</span>
          </button>
        </div>
        ${discount ? `<span class="game-card__discount">-${discount}%</span>` : ''}
        ${isUpcoming ? `<span class="game-card__upcoming-badge">Скоро в продаже</span>` : ''}
      </div>
      <div class="game-card__content">
        <h3 class="game-card__title" title="${game.title}">${game.title}</h3>
        <div class="game-card__tags">
          ${game.tags.slice(0, 3).map(tag => `<span class="game-card__tag">${tag}</span>`).join('')}
        </div>
        <div class="game-card__footer">
          <div class="game-card__price-group">
            ${isUpcoming ? `
              <span class="game-card__price game-card__price--current">от ${formatPrice(game.price)}</span>
            ` : `
              ${game.originalPrice ? `<span class="game-card__price game-card__price--original">${formatPrice(game.originalPrice)}</span>` : ''}
              <span class="game-card__price game-card__price--current">${formatPrice(game.price)}</span>
            `}
          </div>
          <div class="game-card__rating">
            ${isUpcoming ? `
              <span class="game-card__release-date">${formatReleaseDate(game.releaseDate)}</span>
            ` : `
              <span>${game.rating}</span>
              <span class="material-symbols-outlined">star</span>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

// Рендер рекомендаций
function renderRecommendations() {
  const games = getRecommendedGames(8);
  recommendationsGrid.innerHTML = games.map(game => createGameCard(game)).join('');
  attachCardListeners(recommendationsGrid);
}

// Рендер основной сетки игр
function renderGames(filter = currentFilter) {
  currentFilter = filter;
  const games = getGamesByFilter(filter, 8);
  gamesGrid.innerHTML = games.map(game => createGameCard(game)).join('');
  attachCardListeners(gamesGrid);
}

// Прикрепление обработчиков к карточкам
function attachCardListeners(container) {
  container.querySelectorAll('.game-card').forEach(card => {
    const gameId = card.dataset.id;
    const game = gamesData.find(g => g.id === gameId);
    
    // Клик на карточку - показываем уведомление (нет перехода)
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-action]')) return;
      showNotification(`${game.title} — подробная страница недоступна в этой версии`);
    });
    
    const cartBtn = card.querySelector('[data-action="cart"]');
    if (cartBtn) {
      cartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (game.upcoming) {
          showNotification('Эта игра ещё не вышла');
        } else {
          addToCart(game);
        }
      });
    }
    
    const wishlistBtn = card.querySelector('[data-action="wishlist"]');
    if (wishlistBtn) {
      wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(gameId);
      });
    }
  });
}


// Корзина
function addToCart(game) {
  const existingItem = cart.find(item => item.id === game.id);
  if (!existingItem) {
    cart.push({ ...game });
    saveCart();
    updateCartBadge();
    showNotification(`${game.title} добавлен в корзину!`);
  } else {
    showNotification(`${game.title} уже в корзине`);
  }
}

function removeFromCart(gameId) {
  cart = cart.filter(item => item.id !== gameId);
  saveCart();
  updateCartBadge();
  renderCartModal();
}

function updateCartBadge() {
  cartBadge.textContent = cart.length;
  cartBadge.classList.toggle('icon-button__badge--visible', cart.length > 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// Wishlist
function toggleWishlist(gameId) {
  if (wishlist.has(gameId)) {
    wishlist.delete(gameId);
    showNotification('Удалено из избранного');
  } else {
    wishlist.add(gameId);
    showNotification('Добавлено в избранное');
  }
  saveWishlist();
  renderRecommendations();
  renderGames();
}

// Уведомления
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('notification--hide');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Рендер модального окна корзины
function renderCartModal() {
  const cartBody = document.getElementById('cartBody');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart__empty">
        <span class="material-symbols-outlined">shopping_cart</span>
        <p>Корзина пуста</p>
      </div>
    `;
  } else {
    cartBody.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item__image">
        <div class="cart-item__info">
          <div class="cart-item__title">${item.title}</div>
          <div class="cart-item__price">${formatPrice(item.price)}</div>
        </div>
        <button class="cart-item__remove" data-remove="${item.id}">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
    `).join('');
    
    // Обработчики удаления
    cartBody.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.dataset.remove);
      });
    });
  }
  
  cartCount.textContent = `${cart.length} ${getItemsWord(cart.length)}`;
  cartTotal.textContent = formatPrice(getCartTotal());
}

function getItemsWord(count) {
  if (count === 1) return 'товар';
  if (count >= 2 && count <= 4) return 'товара';
  return 'товаров';
}

// Инициализация обработчиков событий
function initEventListeners() {
  // Burger меню
  const burgerBtn = document.getElementById('burgerBtn');
  const nav = document.getElementById('nav');
  
  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    const icon = burgerBtn.querySelector('.material-symbols-outlined');
    icon.textContent = nav.classList.contains('nav--open') ? 'close' : 'menu';
  });
  
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      burgerBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
    });
  });
  
  // Селектор валют
  currencyButton.addEventListener('click', (e) => {
    e.stopPropagation();
    currencySelector.classList.toggle('currency-selector--open');
  });
  
  document.addEventListener('click', (e) => {
    if (!currencySelector.contains(e.target)) {
      currencySelector.classList.remove('currency-selector--open');
    }
  });
  
  document.querySelectorAll('.currency-selector__option').forEach(option => {
    option.addEventListener('click', () => {
      const newCurrency = option.dataset.currency;
      if (newCurrency !== currentCurrency) {
        currentCurrency = newCurrency;
        localStorage.setItem('currency', newCurrency);
        
        const symbol = currencies[newCurrency]?.symbol || '$';
        currencyButton.querySelector('.currency-selector__code').textContent = symbol;
        
        document.querySelectorAll('.currency-selector__option').forEach(opt => {
          opt.classList.remove('currency-selector__option--active');
        });
        option.classList.add('currency-selector__option--active');
        
        renderRecommendations();
        renderGames();
        updateHeroPrice();
        renderCartModal();
      }
      currencySelector.classList.remove('currency-selector--open');
    });
  });
  
  // Фильтры игр
  const filterContainer = document.getElementById('gamesFilter');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const button = e.target.closest('.filter__button');
      if (!button) return;
      
      filterContainer.querySelectorAll('.filter__button').forEach(btn => {
        btn.classList.remove('filter__button--active');
      });
      button.classList.add('filter__button--active');
      
      renderGames(button.dataset.filter);
    });
  }
  
  // Скролл рекомендаций
  if (recommendationsPrev) {
    recommendationsPrev.addEventListener('click', () => scrollRecommendations('prev'));
  }
  if (recommendationsNext) {
    recommendationsNext.addEventListener('click', () => scrollRecommendations('next'));
  }
  
  // Hero кнопка покупки
  const heroCartBtn = document.getElementById('heroCartBtn');
  if (heroCartBtn) {
    heroCartBtn.addEventListener('click', () => {
      const heroGame = gamesData.find(g => g.id === 'hero-cyberpunk');
      if (heroGame) addToCart(heroGame);
    });
  }
  
  // Поиск
  initSearch();
  
  // Корзина
  initCartModal();
  
  // AI ассистент
  initAIAssistant();
  
  // Видео модал
  initVideoModal();
  
  // Промо кнопка
  const promoBtn = document.getElementById('promoBtn');
  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      showNotification('Страница акций недоступна в этой версии');
    });
  }
  
  // Форма подписки
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('Спасибо за подписку!');
      newsletterForm.reset();
    });
  }
  
  // Кнопка оформления заказа
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showNotification('Корзина пуста');
      } else {
        showNotification('Оформление заказа недоступно в этой версии');
      }
    });
  }
}

// Скролл рекомендаций
function scrollRecommendations(direction) {
  const container = recommendationsScroll.querySelector('.games-scroll__container');
  const scrollAmount = 300;
  
  container.scrollBy({
    left: direction === 'next' ? scrollAmount : -scrollAmount,
    behavior: 'smooth'
  });
}


// Поиск
function initSearch() {
  const searchButton = document.getElementById('searchButton');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  searchButton.addEventListener('click', () => {
    searchOverlay.classList.add('search-overlay--open');
    searchInput.focus();
  });
  
  searchClose.addEventListener('click', closeSearch);
  
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('search-overlay--open')) {
      closeSearch();
    }
  });
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    const results = gamesData.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">Ничего не найдено</div>';
    } else {
      searchResults.innerHTML = results.map(game => `
        <div class="search-result" data-id="${game.id}">
          <img src="${game.image}" alt="${game.title}" class="search-result__image">
          <div class="search-result__info">
            <div class="search-result__title">${game.title}</div>
            <div class="search-result__price">${formatPrice(game.price)}</div>
          </div>
        </div>
      `).join('');
      
      searchResults.querySelectorAll('.search-result').forEach(result => {
        result.addEventListener('click', () => {
          const game = gamesData.find(g => g.id === result.dataset.id);
          if (game && !game.upcoming) {
            addToCart(game);
          } else if (game?.upcoming) {
            showNotification('Эта игра ещё не вышла');
          }
          closeSearch();
        });
      });
    }
  });
  
  function closeSearch() {
    searchOverlay.classList.remove('search-overlay--open');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
}

// Модальное окно корзины
function initCartModal() {
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const cartClose = document.getElementById('cartClose');
  
  cartButton.addEventListener('click', () => {
    renderCartModal();
    cartModal.classList.add('cart-modal--open');
  });
  
  cartClose.addEventListener('click', () => {
    cartModal.classList.remove('cart-modal--open');
  });
  
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove('cart-modal--open');
    }
  });
}

// AI Ассистент
function initAIAssistant() {
  const aiChat = document.getElementById('aiChat');
  const aiToggle = document.getElementById('aiToggle');
  const aiClose = document.getElementById('aiClose');
  const aiMessages = document.getElementById('aiMessages');
  const aiInput = document.getElementById('aiInput');
  const aiSend = document.getElementById('aiSend');
  
  aiToggle.addEventListener('click', () => {
    aiChat.classList.toggle('ai-assistant__chat--open');
  });
  
  aiClose.addEventListener('click', () => {
    aiChat.classList.remove('ai-assistant__chat--open');
  });
  
  aiSend.addEventListener('click', sendAIMessage);
  aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendAIMessage();
  });
  
  function sendAIMessage() {
    const message = aiInput.value.trim();
    if (!message) return;
    
    addAIMessage(message, 'user');
    aiInput.value = '';
    
    showTyping();
    
    setTimeout(() => {
      hideTyping();
      const response = getAIResponse(message);
      addAIMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
  }
  
  function addAIMessage(text, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message--${role}`;
    messageDiv.innerHTML = `<div class="message__bubble">${text}</div>`;
    aiMessages.appendChild(messageDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }
  
  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'message message--bot';
    typing.id = 'typingIndicator';
    typing.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-indicator__dot"></span>
        <span class="typing-indicator__dot"></span>
        <span class="typing-indicator__dot"></span>
      </div>
    `;
    aiMessages.appendChild(typing);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }
  
  function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }
  
  function getAIResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('rpg') || msg.includes('рпг')) {
      return "Для любителей RPG рекомендую Elden Ring или Baldur's Gate 3! Обе игры получили высочайшие оценки — 4.9/5";
    }
    
    if (msg.includes('экшен') || msg.includes('action')) {
      return "Попробуйте Black Myth: Wukong или God of War Ragnarök — отличные экшен-игры с потрясающей графикой!";
    }
    
    if (msg.includes('скидк') || msg.includes('распродаж')) {
      return "Cyberpunk 2077 сейчас со скидкой — было " + formatPrice(59.99) + ", теперь " + formatPrice(41.38) + "!";
    }
    
    if (msg.includes('лучш') || msg.includes('топ')) {
      return "Наши топовые игры: Elden Ring (4.9★), Baldur's Gate 3 (4.9★) и Ghost of Tsushima (4.9★)!";
    }
    
    if (msg.includes('привет') || msg.includes('hello')) {
      return "Привет! Я помогу найти вашу следующую любимую игру. Какие жанры вам нравятся?";
    }
    
    if (msg.includes('корзин') || msg.includes('cart')) {
      return "Нажмите на иконку корзины в правом верхнем углу, чтобы посмотреть добавленные игры!";
    }
    
    const responses = [
      "Интересно! Расскажите подробнее, какие игры вам нравятся?",
      "С удовольствием помогу! Ищете что-то конкретное?",
      "Найду идеальную игру для вас! Какое у вас настроение?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Видео модал
function initVideoModal() {
  const trailerBtn = document.getElementById('trailerBtn');
  const videoModal = document.getElementById('videoModal');
  const videoModalOverlay = document.getElementById('videoModalOverlay');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoPlayer = document.getElementById('videoPlayer');
  
  trailerBtn.addEventListener('click', () => {
    videoModal.classList.add('video-modal--open');
    videoPlayer.play();
  });
  
  function closeVideoModal() {
    videoModal.classList.remove('video-modal--open');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
  
  videoModalOverlay.addEventListener('click', closeVideoModal);
  videoModalClose.addEventListener('click', closeVideoModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('video-modal--open')) {
      closeVideoModal();
    }
  });
}