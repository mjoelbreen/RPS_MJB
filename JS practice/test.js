/*function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function doMath(operation1, operation2, num1, num2) {
    var op1 = operation(num1, num2);
    return operation2(op1, num1);
}

var sum = doMath(add, multiply, 1, 2);

var superHeroes = [["Batman", "Bruce Wayne"], ["Spiderman", "Peter Parker"], ["The Flash", "Barry Allen"]];

var secretIdentity = superHeroes.map(function (revealArray){
    return revealArray.join(" is ");

});
console.log(secretIdentity.join("\n"));*/

var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var findMike = players.find(function (player) {
    return player.firstName == 'Mike';
});

var findRB = players.filter(function (player) {
    return player.position == 'RB';
});

var getLastNames = players.map(function (player) {
    return player.lastName;
});

var getTD = players.filter(function(player) {
    return player.touchdowns > 5;
}).map(function (player) {
    return player.firstName + " " + player.lastName;
});

var rbTD = findRB.reduce(function (sum, current) {
    return sum + current.touchdowns;
},0 );

console.log(findMike);
console.log(findRB);
console.log(getLastNames);
console.log(getTD);
console.log(rbTD);
