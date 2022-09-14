/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = "https://platzi-avo.vercel.app/api/avo";
const allItems = [];

//petición con promesas

window.fetch( url )
 .then( ( avocados ) => avocados.json()
 .then( ( res ) => {
  res.data.forEach( element => {
  const image = document.createElement('img');
  const title = document.createElement('h2');
  const price = document.createElement('span');
  const container = document.createElement('div')
  container.append( image, title, price );
  allItems.push(container);
 });

 document.body.append(...allItems);
}))
