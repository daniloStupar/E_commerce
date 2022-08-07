"use strict";

////////////////////////////////////////// HAMBURGER//////////////////////////////////
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".hamburgerMobile").classList.toggle("hidden");
});


////////////////////////////////////////// KARTICA//////////////////////////////////

function closeCart() {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
}

const openShopCart = document.querySelector(".shoppingCartButton");
openShopCart.addEventListener("click", () => {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
});

const closeShopCart = document.querySelector("#closeButton");
const overlay = document.querySelector(".overlay");
closeShopCart.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

/////////////////////////////////////GALERIJA ///////////////////////////////////////////
const modal = document.querySelector(".modal .main-img");
const mainPhoto = document.querySelector(".main-img");
const mainImageEl = document.querySelector(".main-img");
const modalEl = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");
const addToCartEl = document.querySelector(".add-to-cart");

for (let i = 1; i <= 4; i++) {
  const imgEl = document.querySelector(`.img-${i}`);
  imgEl.addEventListener("click", () => {
    mainPhoto.src = imgEl.src;
  });
////////////////////////////////////////////////////////////// MODAL////////////////////////////////////////////////////

  const modalImgEl = document.querySelector(`.modal-img-${i}`);
  modalImgEl.addEventListener("click", () => {
    modal.src = modalImgEl.src;
    currentImgIndex = i;
  });
}

function openModal() {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
}
mainImageEl.addEventListener("click", openModal);

function closeModal() {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);

/////////////////////////////////////////////////KOLICINA I CIJENA///////////////////////////////////

const price = document.querySelector(".price");
const totalPrice = document.querySelector(".sumprice");
let quantity = 0;

document.querySelector(".btn-plus").addEventListener("click", function () {
  quantity++;
  document.querySelector(".quantity").value = quantity;
  totalPrice.textContent = `$${quantity * Number(price.textContent)}`;
});

document.querySelector(".btn-minus").addEventListener("click", function () {
  quantity--;
  if (quantity >= 1) {
    document.querySelector(".quantity").value = quantity;
    totalPrice.textContent = `$${quantity * Number(price.textContent)}`;
  } else {
    quantity = 0;
    document.querySelector(".quantity").value = quantity;
    totalPrice.textContent = "";
  }
});

//////////////////////////////////// DODAVANJE NA KARTICU/////////////////////////////////////////

const AddButton = document.querySelector(".add");

AddButton.addEventListener("click", function () {
  const priceCart = document.querySelector(".price").textContent;
  const quantityCart = document.querySelector(".quantity").value;
  const totalCart = document.querySelector(".sumprice").textContent;

  localStorage.setItem("Name", "Sneakers");
  localStorage.setItem("Quantity", quantityCart);
  localStorage.setItem("Price", priceCart);
  localStorage.setItem("Total price", totalCart);

  localStorage.getItem("Price");
  localStorage.getItem("Quantaty");
  localStorage.getItem("Total price");

  console.log(localStorage);
});

const NameCartPrint = `<div class="cartElement"><div>Product :</div><div>${localStorage.getItem(
  "Name"
)}</div>           </div>`;
console.log(localStorage);
document
  .querySelector("#buyItems")
  .insertAdjacentHTML("beforeend", NameCartPrint);

const PriceCartPrint = `<div class="cartElement"><div>Price :</div><div>$${localStorage.getItem(
  "Price"
)}</div></div>`;
console.log(localStorage);
document
  .querySelector("#buyItems")
  .insertAdjacentHTML("beforeend", PriceCartPrint);

const QuantityCartPrint = `<div class="cartElement"><div>Quantity :</div><div>${localStorage.getItem(
  "Quantity"
)}</div></div>`;
console.log(localStorage);
document
  .querySelector("#buyItems")
  .insertAdjacentHTML("beforeend", QuantityCartPrint);

const TotalPricePrint = `<div class="cartElement"><div>Total price :</div><div>${localStorage.getItem(
  "Total price"
)}</div></div>`;
console.log(localStorage);
document
  .querySelector("#buyItems")
  .insertAdjacentHTML("beforeend", TotalPricePrint);



  ///////////////////////////////////////   SLIDER /////////////////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
