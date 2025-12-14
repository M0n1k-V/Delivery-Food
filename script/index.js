const modalFunc = () => {
  const modal = document.querySelector(".cart-modal-overlay");
  const cartBtn = document.querySelector("#cart-btn");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    console.log(event.target);
    if (
      event.target.classList.contains("cart-modal-overlay") ||
      event.target.closest(".cart-modal-header-close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца Плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizzaPluse.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "tanuki.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "foodBand.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "jadinaPizza.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pointOfFood.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "PizzaBurger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style='width: 100%; text-align: center;'>Загрузка</p>";
  };

  const renderRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card_image">
                      <img src="./images/rests/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card_description">
                      <div class="products-card_description-row">
                        <h4 class="products-card_description-title">${card.title}</h4>
                        <div class="products-card_description-badge">${card.time} мин</div>
                      </div>
                      <div class="products-card_description-row">
                        <div class="products-card_description-info">
                        <div class="products-card_description-info-rating">
                          <img src="./images/items/star.svg" alt="star">
                          ${card.rating}
                        </div>
                            <div class="products-card_description-info-price">
                              От ${card.price} ₽
                            </div>
                            <div class="products-card_description-info-group">
                              ${card.type}
                            </div>
                        </div>
                      </div>
                    </div>
          </a>
        `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
