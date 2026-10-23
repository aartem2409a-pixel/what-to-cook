// База данных продуктов
const products = [
  { id: 1, name: 'Курица', emoji: '🍗' },
  { id: 2, name: 'Говядина', emoji: '🥩' },
  { id: 3, name: 'Свинина', emoji: '🥓' },
  { id: 4, name: 'Рыба', emoji: '🐟' },
  { id: 5, name: 'Яйца', emoji: '🥚' },
  { id: 6, name: 'Молоко', emoji: '🥛' },
  { id: 7, name: 'Сыр', emoji: '🧀' },
  { id: 8, name: 'Картофель', emoji: '🥔' },
  { id: 9, name: 'Морковь', emoji: '🥕' },
  { id: 10, name: 'Лук', emoji: '🧅' },
  { id: 11, name: 'Чеснок', emoji: '🧄' },
  { id: 12, name: 'Помидоры', emoji: '🍅' },
  { id: 13, name: 'Огурцы', emoji: '🥒' },
  { id: 14, name: 'Перец', emoji: '🫑' },
  { id: 15, name: 'Грибы', emoji: '🍄' },
  { id: 16, name: 'Рис', emoji: '🍚' },
  { id: 17, name: 'Макароны', emoji: '🍝' },
  { id: 18, name: 'Хлеб', emoji: '🍞' },
  { id: 19, name: 'Масло', emoji: '🧈' },
  { id: 20, name: 'Зелень', emoji: '🌿' }
];

// База данных рецептов
const recipes = [
  {
    id: 1,
    name: 'Куриный суп',
    time: '60 мин',
    difficulty: 'Легко',
    ingredients: [1, 8, 9, 10, 11, 20],
    steps: [
      'Отварите курицу в течение 40 минут',
      'Добавьте нарезанный картофель',
      'Обжарьте лук, морковь и чеснок',
      'Добавьте зажарку в суп',
      'Варите еще 15 минут',
      'Посыпьте зеленью перед подачей'
    ]
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    time: '25 мин',
    difficulty: 'Средне',
    ingredients: [17, 3, 5, 7, 11],
    steps: [
      'Отварите макароны до al dente',
      'Нарежьте бекон кубиками',
      'Обжарьте бекон до хрустящей корочки',
      'Смешайте яйца с тертым сыром',
      'Добавьте горячие макароны к бекону',
      'Снимите с огня и быстро вмешайте яичную смесь',
      'Подавайте немедленно'
    ]
  },
  {
    id: 3,
    name: 'Омлет с овощами',
    time: '15 мин',
    difficulty: 'Легко',
    ingredients: [5, 6, 12, 14, 20],
    steps: [
      'Взбейте яйца с молоком',
      'Нарежьте овощи кубиками',
      'Обжарьте овощи 3 минуты',
      'Залейте яичной смесью',
      'Готовьте под крышкой 5-7 минут',
      'Посыпьте зеленью'
    ]
  },
  {
    id: 4,
    name: 'Картофельное пюре',
    time: '30 мин',
    difficulty: 'Легко',
    ingredients: [8, 6, 19],
    steps: [
      'Очистите и нарежьте картофель',
      'Отварите до мягкости',
      'Слейте воду',
      'Добавьте горячее молоко и масло',
      'Разомните до однородности',
      'Посолите по вкусу'
    ]
  },
  {
    id: 5,
    name: 'Салат Цезарь',
    time: '20 мин',
    difficulty: 'Легко',
    ingredients: [1, 5, 7, 18, 20],
    steps: [
      'Обжарьте куриное филе',
      'Нарежьте листья салата',
      'Приготовьте крутоны из хлеба',
      'Сделайте соус из яиц, сыра и чеснока',
      'Смешайте все ингредиенты',
      'Полейте соусом и подавайте'
    ]
  },
  {
    id: 6,
    name: 'Грибной суп-пюре',
    time: '40 мин',
    difficulty: 'Средне',
    ingredients: [15, 8, 10, 6, 19],
    steps: [
      'Обжарьте лук до прозрачности',
      'Добавьте нарезанные грибы',
      'Добавьте нарезанный картофель',
      'Залейте водой и варите 20 минут',
      'Пюрируйте блендером',
      'Добавьте молоко и масло',
      'Подавайте с зеленью'
    ]
  },
  {
    id: 7,
    name: 'Рыба запеченная',
    time: '35 мин',
    difficulty: 'Легко',
    ingredients: [4, 10, 11, 12, 20],
    steps: [
      'Разогрейте духовку до 200°C',
      'Натрите рыбу специями',
      'Выложите на противень',
      'Добавьте нарезанные овощи',
      'Запекайте 25-30 минут',
      'Подавайте с зеленью'
    ]
  },
  {
    id: 8,
    name: 'Сырники',
    time: '25 мин',
    difficulty: 'Легко',
    ingredients: [5, 7, 19],
    steps: [
      'Смешайте творог с яйцом',
      'Добавьте сахар и муку',
      'Сформируйте сырники',
      'Обжарьте на сливочном масле',
      'Подавайте со сметаной'
    ]
  },
  {
    id: 9,
    name: 'Плов',
    time: '90 мин',
    difficulty: 'Сложно',
    ingredients: [2, 16, 9, 10, 11],
    steps: [
      'Обжарьте мясо до корочки',
      'Добавьте лук и морковь',
      'Добавьте специи и чеснок',
      'Залейте водой и тушите 30 минут',
      'Добавьте промытый рис',
      'Залейте водой на 2 см выше риса',
      'Готовьте под крышкой 30 минут'
    ]
  },
  {
    id: 10,
    name: 'Бутерброды',
    time: '10 мин',
    difficulty: 'Легко',
    ingredients: [18, 7, 12, 13],
    steps: [
      'Нарежьте хлеб',
      'Выложите сыр',
      'Добавьте нарезанные овощи',
      'Украсьте зеленью'
    ]
  }
];

// Состояние приложения
let selectedProducts = new Set();

// Инициализация
function init() {
  renderProducts();
  loadSelectedProducts();
  
  // Регистрация Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker registration failed'));
  }
}

// Отрисовка продуктов
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(product => `
    <div class="product-item ${selectedProducts.has(product.id) ? 'selected' : ''}" 
         onclick="toggleProduct(${product.id})">
      <span class="emoji">${product.emoji}</span>
      <span class="name">${product.name}</span>
    </div>
  `).join('');
}

// Переключение продукта
function toggleProduct(productId) {
  if (selectedProducts.has(productId)) {
    selectedProducts.delete(productId);
  } else {
    selectedProducts.add(productId);
  }
  
  saveSelectedProducts();
  renderProducts();
  updateStats();
}

// Сохранение выбранных продуктов
function saveSelectedProducts() {
  localStorage.setItem('selectedProducts', JSON.stringify([...selectedProducts]));
}

// Загрузка выбранных продуктов
function loadSelectedProducts() {
  const saved = localStorage.getItem('selectedProducts');
  if (saved) {
    selectedProducts = new Set(JSON.parse(saved));
  }
  updateStats();
}

// Обновление статистики
function updateStats() {
  document.getElementById('selectedCount').textContent = selectedProducts.size;
  document.getElementById('recipesCount').textContent = recipes.length;
}

// Поиск рецептов
function findRecipes() {
  if (selectedProducts.size === 0) {
    alert('Выберите хотя бы один продукт!');
    return;
  }
  
  // Фильтруем рецепты - показываем те, где есть хотя бы 2 совпадения
  const matchingRecipes = recipes.filter(recipe => {
    const matches = recipe.ingredients.filter(ing => selectedProducts.has(ing));
    return matches.length >= 2;
  }).sort((a, b) => {
    // Сортируем по количеству совпадений
    const aMatches = a.ingredients.filter(ing => selectedProducts.has(ing)).length;
    const bMatches = b.ingredients.filter(ing => selectedProducts.has(ing)).length;
    return bMatches - aMatches;
  });
  
  renderRecipes(matchingRecipes);
}

// Отрисовка рецептов
function renderRecipes(recipesToShow) {
  const container = document.getElementById('recipesContainer');
  const recipesList = document.getElementById('recipesList');
  
  if (recipesToShow.length === 0) {
    recipesList.innerHTML = `
      <div class="no-recipes">
        <div class="emoji">😕</div>
        <h3>Рецепты не найдены</h3>
        <p>Попробуйте выбрать больше продуктов</p>
      </div>
    `;
  } else {
    recipesList.innerHTML = recipesToShow.map(recipe => {
      const availableIngredients = recipe.ingredients.filter(ing => selectedProducts.has(ing));
      const missingIngredients = recipe.ingredients.filter(ing => !selectedProducts.has(ing));
      
      return `
        <div class="recipe-card">
          <h3>${recipe.name}</h3>
          <div class="recipe-meta">
            <span>⏱️ ${recipe.time}</span>
            <span>📊 ${recipe.difficulty}</span>
            <span>✅ ${availableIngredients.length}/${recipe.ingredients.length} продуктов</span>
          </div>
          <div class="recipe-ingredients">
            <h4>Ингредиенты:</h4>
            <div class="ingredient-list">
              ${recipe.ingredients.map(ingId => {
                const product = products.find(p => p.id === ingId);
                const isAvailable = selectedProducts.has(ingId);
                return `<span class="ingredient-tag ${isAvailable ? 'available' : ''}">${product.emoji} ${product.name}</span>`;
              }).join('')}
            </div>
          </div>
          <div class="recipe-steps">
            <h4>Приготовление:</h4>
            <ol>
              ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        </div>
      `;
    }).join('');
  }
  
  container.classList.add('active');
  container.scrollIntoView({ behavior: 'smooth' });
}

// Запуск приложения
init();
