const burgerr = document.querySelector('.navimage');
const nav = document.querySelector('.nav-links');

burgerr.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burgerr.classList.toggle('toggle');
});

var total_price, product;
function update_product() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_name = document.getElementById('name');
  let new_div = document.createElement('div');
  new_div.innerText = product.shift();

  element_name.appendChild(new_div);
  let element_quantity = document.getElementById('quantity');
  let new_div2 = document.createElement('div');
  new_div2.innerText = product.shift();

  element_quantity.appendChild(new_div2);
  let element_price = document.getElementById('price');
  let new_div3 = document.createElement('div');
  new_div3.innerText = product.shift();

  element_price.appendChild(new_div3);
  product = [];
}

function totalcast() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_totalcart = document.getElementById('totalcart');
  element_totalcart.innerText = total_price.reduce((a,b) => a+b, 0);
}


total_price = [];
product = [];
document.getElementById('biryani').addEventListener('click', (event) => {
  product.push('delicious Biryani');
  product.push(1);
  product.push('8,00€');
  total_price.push(8);
  update_product();
  totalcast();
});
document.getElementById('mutton').addEventListener('click', (event) => {
    product.push('Mutton Karahi');
    product.push(1);
    product.push('12,00€');
    total_price.push(12);
    update_product();
    totalcast();
  });
  document.getElementById('fish').addEventListener('click', (event) => {
    product.push('Fried Fish');
    product.push(1);
    product.push('8,50€');
    total_price.push(8.50);
    update_product();
    totalcast();
  });

  document.getElementById('nugets').addEventListener('click', (event) => {
    product.push('Chicken Nuguets');
    product.push(1);
    product.push('7,00€');
    total_price.push(7);
    update_product();
    totalcast();
  });
  document.getElementById('wings').addEventListener('click', (event) => {
    product.push('Chicken Wings');
    product.push(1);
    product.push('5,00€');
    total_price.push(5);
    update_product();
    totalcast();
  });
  document.getElementById('sekhkabab').addEventListener('click', (event) => {
    product.push('Sekh Kabab');
    product.push(1);
    product.push('7,70€');
    total_price.push(7.70);
    update_product();
    totalcast();
  });
  document.getElementById('samosa').addEventListener('click', (event) => {
    product.push('Yummy Samosa');
    product.push(1);
    product.push('3,50€');
    total_price.push(3.50);
    update_product();
    totalcast();
  });
  document.getElementById('paya').addEventListener('click', (event) => {
    product.push('Mutton Paya');
    product.push(1);
    product.push('9,50€');
    total_price.push(9.50);
    update_product();
    totalcast();
  });
  
  document.getElementById('clearbtn').addEventListener('click', (event) => {
    let element_name2 = document.getElementById('name');
    element_name2.replaceChildren();
    let element_quantity2 = document.getElementById('quantity');
    element_quantity2.replaceChildren();
    let element_price2 = document.getElementById('price');
    element_price2.replaceChildren();
    let element_totalcart2 = document.getElementById('totalcart');
    element_totalcart2.innerText = 0;
    total_price = [];
    product = [];
  });


