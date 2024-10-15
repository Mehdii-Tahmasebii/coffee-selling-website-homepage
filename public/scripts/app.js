const $ = document;
const themeBtn = $.querySelectorAll("[data-theme-btn]");
const subMenuDropdownBtn = $.querySelector("[data-submenu-btn]");
const subMenuDropdown = $.querySelector("[data-submenu]");
const nav = $.querySelector("[data-nav]");
const navOpenBtn = $.querySelector("[data-nav-open-btn]");
const navCloseBtn = $.querySelector("[data-nav-close-btn]");
const shoppingBasket = $.querySelector("[data-shoppingbasket]");
const shoppingBasketOpenBtn = $.querySelector("[data-shoppingbasket-open-btn]");
const shoppingBasketCloseBtn = $.querySelector(
  "[data-shoppingbasket-close-btn]"
);
const overlay = $.querySelector("[data-overlay]");

// const subMenuItem = $.querySelectorAll("[data-submenu-item]");

// theme

themeBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

// nav btns

navOpenBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.remove("opacity-0");
  overlay.classList.remove("invisible");
  overlay.classList.add("opacity-100");
  overlay.classList.add("ivisible");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("opacity-100");
  overlay.classList.remove("ivisible");
  overlay.classList.add("opacity-0");
  overlay.classList.add("invisible");
});
overlay.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("opacity-100");
  overlay.classList.remove("ivisible");
  overlay.classList.add("opacity-0");
  overlay.classList.add("invisible");
});

// basket btns

shoppingBasketOpenBtn.addEventListener("click", () => {
  shoppingBasket.classList.remove("-left-64");
  shoppingBasket.classList.add("left-0");
  overlay.classList.remove("opacity-0");
  overlay.classList.remove("invisible");
  overlay.classList.add("opacity-100");
  overlay.classList.add("ivisible");
});
shoppingBasketCloseBtn.addEventListener("click", () => {
  shoppingBasket.classList.remove("left-0");
  shoppingBasket.classList.add("-left-64");
  overlay.classList.remove("opacity-100");
  overlay.classList.remove("ivisible");
  overlay.classList.add("opacity-0");
  overlay.classList.add("invisible");
});
overlay.addEventListener("click", () => {
  shoppingBasket.classList.remove("left-0");
  shoppingBasket.classList.add("-left-64");
  overlay.classList.remove("opacity-100");
  overlay.classList.remove("ivisible");
  overlay.classList.add("opacity-0");
  overlay.classList.add("invisible");
});

// submenue dropdown

subMenuDropdownBtn.addEventListener("click", () => {
  subMenuDropdown.classList.toggle("submenu__open");
  subMenuDropdownBtn.parentElement.classList.toggle("text-orange-300");
  subMenuDropdownBtn.classList.toggle("rotate-180");
});

/////////////////////////////////////////////////////////////////////

// product boxes
let allProduct = [
  {
    id: 1,
    image: `./images/products/p1.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 150000,
    productStatusInStock: true,
    offPercentage: 0,
  },
  {
    id: 2,
    image: `./images/products/p2.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 320000,
    productStatusInStock: true,
    offPercentage: 0,
  },
  {
    id: 3,
    image: `./images/products/p3.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 470000,
    productStatusInStock: true,
    offPercentage: 10,
  },
  {
    id: 4,
    image: `./images/products/p4.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 399000,
    productStatusInStock: false,
    offPercentage: 0,
  },
  {
    id: 5,
    image: `./images/products/p3.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 277000,
    productStatusInStock: true,
    offPercentage: 0,
  },
  {
    id: 6,
    image: `./images/products/p1.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 450000,
    productStatusInStock: true,
    offPercentage: 20,
  },
  {
    id: 7,
    image: `./images/products/p4.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 299000,
    productStatusInStock: false,
    offPercentage: 0,
  },
  {
    id: 8,
    image: `./images/products/p2.png`,
    title: `قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی `,
    price: 360000,
    productStatusInStock: true,
    offPercentage: 0,
  },
];
let basketMobile = $.querySelector("[data-basket-wrapper]");
const productWrapper = $.querySelector("[data-product-wrapper]");
let onBasketProducts = []
// functions
// product box generaiter
const productBoxGeneraiter = () => {
  allProduct.forEach((product) => {
    if (!product.productStatusInStock) {
      product.price = null;
    }
    let prevPrice = priceInOffGenerator(product);


    productWrapper.insertAdjacentHTML(
      "beforeend",
      `   
      <!-- product--box -->

      <div class="">
              <!-- product--image -->

              <div class="flex justify-center items-center relative">
                <div
                  class="max-w-[128px] max-h-[128px] sm:max-w-[260px] sm:max-h-[260px]"
                >
                  <img
                    src="${product.image}"
                    alt="product pic"
                    class=""
                  />
                </div>
                <span data-off-percentage-sign class="off-percentage-sign hidden">%${product.offPercentage}</span>
              </div>
              <!-- product--name -->

              <h3 class="product-names">
               <a href="#"> ${product.title}</a>
              </h3>

              <!-- product--price -->

              <div
                class="flex justify-start items-center gap-x-2 md:gap-x-2.5 mt-2.5"
              >
                <div class="">
                  <span data-price class="price-now">
                  ${product.price}
                    <span  class="font-Dana text-xs lg:text-sm tracking-tighter"
                      >تومان</span
                    >
                  </span>
                </div>
                 <!-- price before off -->

                <div  class="hidden">
                  <span data-price-before-off class="price-in-off ">
                    ${prevPrice}
                    <span
                      class="font-Dana hidden md:inline text-xs lg:text-sm tracking-tighter"
                      >تومان</span
                    >
                  </span>
                </div>


                <!-- ran out -->
                <span
                data-ran-out  class="text-red-400 text-base md:text-lg lg:text-xl font-Dana hidden"
                  >فعلا موجود نیست</span
                >
              </div>

              <!-- product--rating and cart -->

              <div
                class="flex justify-between items-center mt-2.5 sm:mt-3.5 md:mt-5"
              >
                <div
                  class="flex gap-x-2.5 md:gap-x-3 justify-center items-center"
                >
                  <!-- basket -->

                  <div onClick="addToShoppingCartHandler(${product.id})" class="basket-svg group">
                    <svg
                      class="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] text-gray-400 group-hover:text-white" 
                    >
                      <use href="#shopping-cart"></use>
                    </svg>
                  </div>

                  <!-- arrow -->
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 inline hover:text-teal-600 dark:hover:text-emerald-500 transition-all cursor-pointer"
                  >
                    <use href="#arrow-right-left"></use>
                  </svg>
                </div>

                <!-- stars -->

                <div class="flex">
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 inline"
                  >
                    <use href="#star"></use>
                  </svg>
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 inline"
                  >
                    <use href="#star"></use>
                  </svg>
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 inline"
                  >
                    <use href="#star"></use>
                  </svg>
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 inline"
                  >
                    <use href="#star"></use>
                  </svg>
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 inline"
                  >
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>

              <!-- // -->
            </div>
`
    );
  });

  let prices = $.querySelectorAll("[data-price]");
  let ranOutTag = $.querySelectorAll("[data-ran-out]");
  let priceBeforeOff = $.querySelectorAll("[data-price-before-off]");
  let offPercentageSign = $.querySelectorAll("[data-off-percentage-sign]");
  priceBeforeOff.forEach((x) => {
    if (!x.innerHTML.includes("null")) {
      x.parentElement.classList.remove("hidden");
      x.parentElement.classList.add("block");
    }
  });

  offPercentageSign.forEach((x) => {
    if (x.innerHTML != "%0") {
      x.classList.remove("hidden");
      x.classList.add("block");
    }
  });

  ranOutHandler(prices, ranOutTag);
};

const priceInOffGenerator = (product) => {
  if (product.offPercentage !== 0) {
    let prevPrice = product.price;
    product.price = prevPrice * (1 - product.offPercentage / 100);

    return prevPrice;
  } else {
    return null;
  }
};

const ranOutHandler = (prices, ranOutTag) => {
  prices.forEach((price) => {
    if (price.innerHTML.includes("null")) {
      price.parentElement.classList.add("hidden");
      price.parentElement.nextElementSibling.nextElementSibling.classList.remove(
        "hidden"
      );
      price.parentElement.nextElementSibling.nextElementSibling.classList.add(
        "block"
      );
    }
  });
};
const addToShoppingCartHandler = (productId) => {
 let targetetProduct = allProduct.find((product)=>{
  return product.id === productId
 })
 onBasketProducts.push(targetetProduct);
}
const shoppingCartBoxGenerator = ()=>{
  onBasketProducts.forEach((product)=>{
    basketMobile.insertAdjacentHTML('beforeend',`
      
            <div
              class="flex min-h-[133px] py-4 gap-x-1 border-b-[1px] border-gray-100 dark:border-white/10"
            >
              <!-- product image -->

              <div class="">
                <img
                  class="min-w-[90px] h-[90px]"
                  src="./images/products/p1.png"
                  alt=""
                />
              </div>

              <!-- title and price -->
              <!-- title -->

              <div class="flex flex-col justify-between h-[90px]">
                <div>
                  <h4
                    class="text-zinc-700 text-sm font-Dana dark:text-white cursor-pointer"
                  >
                    قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                  </h4>
                </div>

                <!-- price -->

                <div class="">
                  <span
                    class="text-xs font-DanaMedium text-teal-600 tracking-tighter dark:text-emerald-500"
                    >14.500 تومان تخفیف</span
                  >
                  <div
                    class="text-zinc-700 text-base dark:text-white font-DanaDemiBold"
                  >
                    175.000
                    <span class="text-xs font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>

      `)
  })
}
productBoxGeneraiter();
// cart adding



// functions

// adding events
// addToBasketBtn.forEach((x)=>{
//   x.addEventListener('click', addToBasketHandler)
// })


let [p1, p2, p3] = allProduct

let {id:num, image,price} = p1



/////////////////////////////////////////////////////

