//day 5
let emptyArray=Array()
console.log(emptyArray);

let element5 =Array(1,2,3,4,5,6)
console.log(element5.length);

console.log(element5[0], element5[2],  element5[5]);

let mixedDataTypes=Array(23,'hello', 'hi', true, null, 7)
console.log(mixedDataTypes.length);


let itCompanies = Array('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
console.log(itCompanies.join(', '));
console.log(itCompanies[0].
    toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].
    toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].
    toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())



console.log(itCompanies.toString());


if (itCompanies.includes('Google')){console.log('google exist');
}else{console.log('does not exist');}


console.log(itCompanies.sort());

console.log(itCompanies.reverse());


console.log(itCompanies.slice(0,3));

console.log(itCompanies.slice(4,7));

console.log(itCompanies.slice(3,4));

console.log(itCompanies.shift());

console.log(itCompanies);


console.log(itCompanies.splice(0,1));

console.log(itCompanies);

console.log(itCompanies.splice(3,1));

console.log(itCompanies.pop());
//remove all
console.log(itCompanies.splice(0,itCompanies.length));


let text =
'I love teaching and empowering people I teach HTML CSS JS React Python'

let words=text.split(' ')

console.log(words)
console.log(words.length)


//shoppingCart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4)
shoppingCart[3]='Green tea'


console.log(shoppingCart);


//concat
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = (frontEnd.concat(backEnd))



console.log(fullStack)


/*   
 lvl 3
ages  
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort());

let minAge=(ages[0])
let maxAge=(ages[ages.length-1])
let medianAge=((ages[4]+ages[5])/2)
let averageAge=((ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/ages.length)
let ageRange=(maxAge-minAge)




console.log(minAge, maxAge, medianAge, averageAge, ageRange);













