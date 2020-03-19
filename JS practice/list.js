var arr = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

arr.push('fruit loops');



arr[4] = 'fair trade coffee';
arr[2] = 'rice';
arr[3] = 'beans';

arr.splice(2,2,'rice', 'beans');


var cart = [];

cart[0] = arr.pop();

cart.unshift(arr.shift());

while (arr.length > 0) {
    cart.push(arr.pop());

}

cart.reverse();
cart.join(' , ')
console.log(cart);






