import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

let productsList = {};
app.use('/products', (req, res) => {
	fetch('https://dummyjson.com/products?limit=10')
		.then((res) => res.json())
		.then((json) => {
			productsList = json;
			console.log(productsList.products);
		});
	res.render('products', productsList);
});
app.use('/product', (req, res) => {
	fetch('https://dummyjson.com/products?limit=10')
		.then((res) => res.json())
		.then((json) => {
			productsList = json;
			console.log(productsList.product);
		});
	res.render('product', productsList);
});


app.get('/login', function(req, res) {
	res.render('login');
  });
app.get('/reg', function(req, res) {
	res.render('reg');
  });
  
// {
//   images: productsList.images,
//   title: productsList.title,
//   price: productsList.price,
//   rating: productsList.rating,
//   rating: productsList.rating,
// }

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000);
