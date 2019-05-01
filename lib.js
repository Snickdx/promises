const chalk = require('chalk');

 let users = [
      {
        "id": 1,
        "first_name": "Bastian",
        "last_name": "Lease",
        "email": "blease0@mit.edu"
      }, {
        "id": 2,
        "first_name": "Mora",
        "last_name": "Cocci",
        "email": "mcocci1@imgur.com"
      }, {
        "id": 3,
        "first_name": "Jo-anne",
        "last_name": "Kilian",
        "email": "jkilian2@imgur.com"
      }, {
        "id": 4,
        "first_name": "Ulrica",
        "last_name": "D'Souza",
        "email": "udsouza3@bloomberg.com"
      }, {
        "id": 5,
        "first_name": "Hugh",
        "last_name": "Farries",
        "email": "hfarries4@ebay.co.uk"
      }, {
        "id": 6,
        "first_name": "Alleen",
        "last_name": "Douce",
        "email": "adouce5@ycombinator.com"
      }, {
        "id": 7,
        "first_name": "Ronnie",
        "last_name": "Scambler",
        "email": "rscambler6@timesonline.co.uk"
      }, {
        "id": 8,
        "first_name": "Frederigo",
        "last_name": "MacCleod",
        "email": "fmaccleod7@booking.com"
      }
  ];

 let products = [
  {
    "id": 1,
    "name": "ea",
    "category": "dvd",
    "price": 99.89
  },
  {
    "id": 2,
    "name": "ad",
    "category": "dvd",
    "price": 78.20
  },
  {
    "id": 3,
    "name": "cupidatat",
    "category": "dvd",
    "price": 65.97
  },
  {
    "id": 4,
    "name": "laboris",
    "category": "music",
    "price": 67.55
  },
  {
    "id": 5,
    "name": "est",
    "category": "music",
    "price": 16.89
  }
]

 let purchases = [
	 {
		 "id":1,
		 "user":1,
		 "product":1,
		 "quantity":1,
		 "total":99.89
	 }
 ];

function createAsyncFun(timeout, fun){
  return function(...args){
    return new Promise(resolve=>{
      setTimeout(_=>{
        resolve(fun(...args));
      }, timeout);
    });
  }
}

function syncSetTimeout(cb, timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      cb ? resolve(cb()) : resolve("resolved");
    }, timeout);
  });
}

let printGreen = createAsyncFun(200, (str, cb)=>{console.log(chalk.green(str)); if(cb)cb();});
let printRed = createAsyncFun(300, (str, cb)=>{console.log(chalk.red(str)); if(cb)cb();});
let printBlue = createAsyncFun(400, (str, cb)=>{console.log(chalk.blue(str)); if(cb)cb();});
let printYellow = createAsyncFun(500, (str, cb)=>{console.log(chalk.yellow(str)); if(cb)cb();});
let getUsers = createAsyncFun(300, cb=>{
  if(cb)cb(users);
  return users;
})

let getUser = createAsyncFun(100, (id, cb)=>{
  let user = users.filter(user => user.id === id);
  user.length > 0 ? user[0] : null; 
	if(cb)cb(user[0]);
	return user[0];
});

let addUser = createAsyncFun(
	200, 
	(first_name='null', last_name='null', email='null@mail.com', cb)=>{ 
		  let newid = users.push({id:(users.length+1)  ,first_name, last_name, email})
			if(cb)cb(newid);
			return newid;
	});

let getPurchases = createAsyncFun(200, (cb)=>{
  if(cb)cb(purchases);
  return purchases;
});

let addPurchase = createAsyncFun(200, (user, product, quantity, total, cb)=>{
	let res;
	if(!(user && product && quantity && total))res = -1;
	res = purchases.push({id:(purchases.length + 1), produce, quantity, total});
  if(cb)cb(res);
  return res;
});

let add = createAsyncFun(200, (a, b, cb)=>{
  let res = a + b;
  if(cb)cb(res);
  return res;
});

module.exports = {
  printGreen,
  printRed,
  printYellow,
  printBlue,
  getUsers,
  getUser,
  getPurchases,
  getPurchase,
  addUser,
  add
}
