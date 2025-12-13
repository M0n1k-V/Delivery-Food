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
                        <div class="products-card_description-badge">${card.time}</div>
                      </div>
                      <div class="products-card_description-row">
                        <div class="products-card_description-info">
                          <img src="./images/items/star.svg" alt="star">
                          ${card.rating}
                        </div>
                          <div class="products-card_description-info-rating">
                            <div class="products-card_description-info-price">
                              От ${card.price} Р
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
