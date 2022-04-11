'use strict';

// MOVIE TYPES
const MOVIE_TYPE = 'movie';
const TVSHOW_TYPE = 'tvShow';

// SELECT ELEMENTS
const movieEl = document.querySelector('#movies-container');
const basketEl = document.querySelector('.basket-items');
const basketTotalPriceEl = document.querySelector('.basket-total');
const basketCountEl = document.querySelector('#basket-count');
const basketIconEl = document.querySelector('.basket-icon');
const basketContainerEl = document.querySelector('.basket-container');
const basketPageBasketItemsEl = document.querySelector('#BASKET-items');
const basketPageSummaryEl = document.querySelector('#BASKET-summary');
const searchMovieEl = document.querySelector('#searchMovie');
const movieSearchQuery = document.querySelector('#searchMovie input');
const bannerSectionEl = document.querySelector('#banner');

if (!window.document.location.href.includes('about')) {
  basketIconEl.addEventListener('click', () => {
    basketContainerEl.classList.toggle('hidden');
  });
}

let basket = JSON.parse(localStorage.getItem('BASKET')) || [];
updateBasket();

// RENDER MOVIES
function renderMovies(type) {
  const movies = DUMMY_MOVIES.filter(mov => mov.type === type);
  movies.forEach(movie => {
    const { id, title, price, image, genres, actors, rating, year } = movie;
    movieEl.innerHTML += `
      <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <a href="details.html">
                <div class="movie-card">
                  <div class="movie-image-cont">
                    <img src="assets/img/${image}" alt="${title}" />
                    <div class="movie-description-backdrop">
                      <h4 class="movie-genres">${genres}</h4>
                      <p>${year}</p>
                      <p class="movie-actors">
                        ${actors}
                      </p>
                      <div class="movie-rating">
                        <span><i class="fa-brands fa-imdb"></i> ${rating}</span>
                      </div>
                    </div>
                  </div>
                  </a>
                  <div class="movie-content-container">
                    <div class="movie-title m-0">${title}  
                        <p class="m-0 small">$${price}</p>
                    </div>
                    <button id="addToBasketBtn" class="movie-buy btn btn-primary" onclick="addToBasket(${id})"
                      ><i class="bi bi-cart-plus-fill"></i
                    ></button>
                  </div>
                </div>
                
              </div>
        `;
  });
}

// BASKET REGION
//#region
// ADD TO BASKET
function addToBasket(id) {
  if (basket.some(movie => movie.id === id)) {
    changeQuantity('plus', id);
  } else {
    let foundMovie = DUMMY_MOVIES.find(movie => movie.id === id);
    basket.push({
      ...foundMovie,
      quantity: 1,
    });
  }
  basketContainerEl.classList.remove('hidden');

  updateBasket();
}

function changeQuantity(action, id) {
  basket = basket.map(movie => {
    let quantity = movie.quantity;

    if (movie.id === id) {
      if (action === 'minus' && quantity > 1) {
        quantity--;
      } else if (action === 'plus' && quantity < movie.inStock) {
        quantity++;
      }
    }
    return {
      ...movie,
      quantity,
    };
  });

  updateBasket();
}

// UPDATE BASKET
function updateBasket() {
  renderBasket();

  renderBasketSubtotal();

  // SAVE TO STORAGE
  localStorage.setItem('BASKET', JSON.stringify(basket));

  // BASKET PAGE
  if (window.document.location.href.includes('basket')) {
    renderBasketPageBasket();
  }
}

function renderBasketSubtotal() {
  let subTotalPrice = 0;
  let totalPrice = 0;
  let totalItems = 0;
  let discount = 0;
  let shipping = 0;

  basket.forEach(movie => {
    subTotalPrice += movie.price * movie.quantity;
    totalPrice += movie.price * movie.quantity + discount + shipping;
    totalItems += movie.quantity;
  });

  basketTotalPriceEl.innerHTML = `
  <h5 class="total-price-title m-0">Total (${totalItems} items) :</h5>
  <p class="total-price m-0">$${totalPrice.toFixed(2)}</p>
  `;
  basketCountEl.innerHTML = totalItems;

  // BASKET PAGE
  if (window.document.location.href.includes('basket')) {
    basketPageSummaryEl.innerHTML = `
    <div class="summary">
                    <h3>Summary</h3>
                    <div class="text-center"><h5>${totalItems} items</h5></div>
                    
                    <div class="summary-item">
                      <span class="text">Subtotal</span
                      ><span class="price">$${subTotalPrice}</span>
                    </div>
                    <div class="summary-item">
                      <span class="text">Discount</span
                      ><span class="price">$${discount}</span>
                    </div>
                    <div class="summary-item">
                      <span class="text">Shipping</span
                      ><span class="price">$${shipping}</span>
                    </div>
                    <div class="summary-item">
                      <span class="text">Total</span
                      ><span class="price">$${totalPrice}</span>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block w-100"
                    >
                      Checkout
                    </button>
                  </div>
    `;
  }
}

// RENDER BASKET
function renderBasket() {
  basketEl.innerHTML = '';
  basket.forEach(movie => {
    const { id, image, title, price, quantity, inStock } = movie;
    basketEl.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="basket-item p-1">
                <div class="basket-item-img"  onclick="removeItemFromBasket(${id})">
                  <img src="assets/img/${image}" alt="${title}" />
                </div>
                <div class="basket-item-title">
                  <div class="m-0 basket-movie-title">${title}</div>
                  <p class="basket-item-price m-0">$${price}</p>
                </div>
                <div class="basket-item-count">
                  <input type="number" disabled value="${quantity}" min="1" max="${inStock}" step="1" />
                  <div class="counter">
                    <button onclick="changeQuantity('minus', ${id})"><i class="fa-solid fa-minus"></i></button>
                    <button onclick="changeQuantity('plus', ${id})"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
              </div>`
    );
  });
}
function renderBasketPageBasket() {
  basketPageBasketItemsEl.innerHTML = '';
  basket.forEach(movie => {
    const { id, image, title, description, price, quantity, inStock } = movie;
    basketPageBasketItemsEl.innerHTML += `
        <div class="product">
                      <div class="row">
                        <div class="col-md-3">
                        <a href="details.html">
                        <img
                            class="img-fluid mx-auto d-block image"
                            src="assets/img/${image}"
                          />
                        </a>
                        </div>
                        <div class="col-md-8">
                          <div class="info">
                            <div class="row">
                              <div class="col-md-5 product-name">
                                <div class="product-name">
                                  <a href="#">${title}</a>
                                  <div class="product-info">
                                    <div class="BASKET-movie-description">
                                      ${description}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 quantity">
                                <label for="quantity">Quantity:</label>
                                <input
                                disabled
                                  id="quantity"
                                  type="number"
                                  value="${quantity}"
                                  class="form-control quantity-input"
                                />
                                <div class="BASKET-buttons">
                                <button onclick="changeQuantity('minus', ${id})"><i class="fa-solid fa-minus"></i></button>
                                <button onclick="changeQuantity('plus', ${id})"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                
                              </div>
                              <div class="col-md-2 price">
                                <span>$${price}</span>
                              </div>
                              <div onclick="removeItemFromBasket(${id})" class="col-md-2 price">
                                <i role="button" class="fa-solid fa-trash-can"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
  });
}

function removeItemFromBasket(id) {
  basket = basket.filter(movie => movie.id !== id);
  updateBasket();
}
//#endregion

function movieSearch(query) {
  if (bannerSectionEl) bannerSectionEl.innerHTML = '';
  renderMovies(query, '', document.querySelector('main'));
}

// HOME PAGE
if (window.document.location.href.includes('index')) {
  $(function () {
    $(document).scroll(function () {
      let $nav = $('.navbar');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 4);
    });
  });
  renderMovies(MOVIE_TYPE);
}

// TV SHOWS PAGE
if (window.document.location.href.includes('tv-shows')) {
  $(function () {
    $(document).scroll(function () {
      let $nav = $('.navbar');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 4);
    });
  });
  renderMovies(TVSHOW_TYPE);
}

// BASKET PAGE
if (window.document.location.href.includes('basket')) {
  $('.navbar').addClass('scrolled');
  renderBasketPageBasket();
}

// ABOUT PAGE
if (window.document.location.href.includes('about')) {
  $('.navbar').addClass('scrolled');
}

// DETAILS PAGE
if (window.document.location.href.includes('details')) {
  $('.navbar').addClass('scrolled');
}
