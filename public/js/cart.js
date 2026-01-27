const cartSubmit = document.querySelectorAll('.cart-btn');
const quanbtn = document.querySelectorAll('.quantity-content');
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn = document.querySelectorAll('.decrease-btn');
const imageCard = document.querySelectorAll('.product-image');
const imgCard = document.querySelectorAll('.product-image-tablet');
const cardImage = document.querySelectorAll('.product-image-desktop');
const cartImageHolder = document.querySelector('.cart-placeholder-content');
const carbonImage = document.querySelector('.cart-cta');


let cartProducts = [
     {
       image: {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       name: "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50,
       "inCart": 0
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00,
        "imCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
        "inCart": 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        "inCart": 0
     }
]

// this function sends the item to the cart
function addItemToCart(cartProduct,[i]) {
  const output = document.querySelectorAll('#quantity-output')[i];
  const result = Number(output.innerText) + 1;
  let productItems = localStorage.getItem('addItemToCart')
  productItems = parseInt(productItems)

  if (result > 10) {
    result = 0
  }

  output.innerText = result

  quanbtn[i].style.display = 'block'
  cartImageHolder.style.display = 'none'
  imageCard[i].style.border = '3px solid #C73B0F'
  imgCard[i].style.border = '3px solid #C73B0F'
  cardImage[i].style.border = '3px solid #C73B0F'

  if (productItems) {
    localStorage.setItem('addItemToCart', productItems + 1)
    document.getElementById('cart-output').textContent = productItems + 1;
  } else {
    localStorage.setItem('addItemToCart', 1)
    document.getElementById('cart-output').textContent = 1
  }

  addProduct(cartProduct)
}



// this function removes an item from the cart
function RemoveItemFromCart(i) {
  const output = document.querySelectorAll('#quantity-output')[i];
  const result = Number(output.innerText) - 1

  if (result < 0) {
    result = 0
  }

  output.innerText = result

  if (result === 0) {
    quanbtn[i].style.display = 'none'
    imageCard[i].style.border = 'none'
  }

  const cartTitle = document.createElement('h2');
  cartTitle.textContent = `$${cartprice}`

}




// this function is for when the cart is being updated
function updateCart() {
  let productItems = localStorage.getItem('addItemToCart');
  let items = localStorage.getItem('cartProductsInCart');
  let cartContainer = document.querySelector('.cart-content');
  let cartprice = localStorage.getItem('totalPrice')

 items = JSON.parse(items)
  console.log(items)

  if (items && cartContainer) {
    cartContainer.innerHTML = ''
    Object.values(items).forEach(function(product){

      const productTtem = document.createElement('div');
      productTtem.classList.add('product-item');

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      
      removeBtn.innerHTML = '<i class="bi bi-x-circle"></i>'

      const PriceContainer = document.createElement('div');
      PriceContainer.classList.add('product-price-container');

      const productName = document.createElement('p');
      productName.textContent = product.name;

      const productQuan = document.createElement('div');
      productQuan.classList.add('product-quantity');

      const cartQuan = document.createElement('span')
      cartQuan.textContent = `x${product.inCart}`

      const priceContent = document.createElement('h4');
      priceContent.textContent = `@ $${product.inCart * product.price}`;

      const productPrice = document.createElement('h4');
      productPrice.textContent = `$${product.price}`

      productQuan.append(cartQuan,priceContent, productPrice );
      PriceContainer.append(productName, productQuan);

      removeBtn.addEventListener('click', function(){
        productTtem.remove(removeBtn,PriceContainer)
      })
      productTtem.append(removeBtn, PriceContainer)
      cartContainer.append(productTtem)
      
    })

 

      const cartTotal = document.createElement('div')
      cartTotal.classList.add('cart-total-content')

      const cartHd = document.createElement('h4')
      cartHd.classList.add('Order-total-text')
      cartHd.textContent = 'orderTotal'

      const cartTitle = document.createElement('h2');
      cartTitle.textContent = `$${cartprice}`

      cartTotal.append(cartHd,cartTitle)
      cartContainer.append(cartTotal)

  }

  if (productItems) {
    document.getElementById('cart-output').textContent = productItems
  }

  cartImageHolder.style.display = 'none'

  if (items === 0) {
    carbonImage.style.display = 'block'
  } else {
    carbonImage.style.display ='flex'
  }
  

}

updateCart()



//  this function is for adding multiple products to the cart
function addProduct(cartProduct) {
  let items = localStorage.getItem('cartProductsInCart')
  items = JSON.parse(items)

   if (items != null) {
    if (items[cartProduct.category] === undefined) {
      items = {
        ...items,
        [cartProduct.category]:cartProduct
      }
    }
    items[cartProduct.category].inCart += 1
   } else {
      cartProduct.inCart = 1
    items = {
      [cartProduct.category]: cartProduct
    }
   }
 
  localStorage.setItem('cartProductsInCart',JSON.stringify(items))
}



// this function is for when the quantity button is clicked its shows the total prices
function totalPrice(cartProduct) {
  // console.log('the cartprice is', cartProduct.price )
  
  let cartprice = localStorage.getItem('totalPrice')

  console.log('my cart price is', cartprice)

  if (cartprice != null ) {
    cartprice = parseInt(cartprice)
    localStorage.setItem('totalPrice', cartprice + cartProduct.price)
  } else {
     localStorage.setItem('totalPrice', cartProduct.price)
  }

 
}







for (let i = 0; i < cartSubmit.length; i++) {
    cartSubmit[i].addEventListener('click' , function(){
    addItemToCart(cartProducts[i],[i])
  })
}



for (let i = 0; i < insertBtn.length; i++) {
    insertBtn[i].addEventListener('click', function(){
    addItemToCart(cartProducts[i],[i])
    totalPrice(cartProducts[i],[i])
    updateCart(cartProducts[i],[i])
  })
}

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function(){
    RemoveItemFromCart(i)
    updateCart(cartProducts[i],[i])
  })  
}
