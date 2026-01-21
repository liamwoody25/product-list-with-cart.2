const cartSubmit = document.querySelectorAll('.cart-btn');
const quanbtn = document.querySelector('.quantity-content');
const insertBtn = document.querySelectorAll('.increase-btn');

function addItemToCart(i) {
  const output = document.querySelectorAll('#quantity-output')[i];
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0
  }
  console.log('this function works')

  output.innerText = result

}

for (let i = 0; i < cartSubmit.length; i++) {
    cartSubmit[i].addEventListener('click' , function(){
    addItemToCart(i)
  })
}

for (let i = 0; i < insertBtn.length; i++) {
    insertBtn[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}


