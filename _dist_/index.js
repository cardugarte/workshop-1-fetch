/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlBase = 'https://platzi-avo.vercel.app';
const urlApi = '/api/avo';
const allItems = [];
const appNode = document.querySelector('#container');

//petición con promesas
window.fetch( `${ urlBase }${ urlApi }` )
 .then( ( avocados ) => avocados.json()
 .then( ( res ) => {
  res.data.forEach( element => {
    //Image
  const image = document.createElement('img');
  image.src = `${ urlBase }${ element.image }`;
  image.className = 'img';
  //Title
  const title = document.createElement('h2');
  title.textContent = element.name;
  // title.style.fontSize = '3rem';
  title.className = 'title';
  //Price
  const price = document.createElement('span');
  price.textContent = element.price;
  price.className = 'price'
  //Container
  const container = document.createElement('div')
  container.append( image, title, price );
  allItems.push( container );
  container.className = 'container__avocado';
 });

 appNode.append( ...allItems );
}))
