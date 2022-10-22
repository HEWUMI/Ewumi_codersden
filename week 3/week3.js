//day 3
let firstName='bam', lastName='jiggy', country='canada ijn',city='man city', age=4, isMarried='soon', year=null

console.log(typeof city,age,year)

console.log(typeof '10'===10);
console.log(parseInt ('9.9')==10);




console.log(4 > 3); 
console.log(4 >= 3); 
console.log(4 > 3); 
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//Find the length of python and jargon and make a falsy comparison statement.

let a='python', b='jargon'
console.log(!(a.length==b.length))

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))


let drg ='Dragon'
pth='Python'

console.log(drg.includes('on')==pth.includes('on'))


let date=new Date()
console.log(date);
console.log(`the year is ${date.getFullYear()}`);
console.log(`the month is ${date.getMonth()}`);
console.log(`the date is ${date.getDate()}`);
console.log(`the day is ${date.getDay()}`);
console.log(`the hour is ${date.getHours()}`);
console.log(`the day is ${date.getMinutes()}`);
console.log(`the day is ${date.getSeconds()}`);
console.log(`the day is ${date.getDay()}`);


//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());


//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).


let base=+prompt('enter value of base','base')
let height=+prompt('enter height here', 'height')
let triArea=(0.5*base*height)
console.log(`The area of your tiangle is ${triArea}`)


let sideA=+prompt('Enter side a')
let sideB=+prompt('Enter side b')
let sideC=+prompt('Enter side c')
let periM=(sideA+sideB+sideC)


console.log(`The perimeter of the triangle is ${periM}`
)



let length=+prompt('enter length')
let breadth=+prompt('enter breadth')

let recArea=(length*breadth)
let recPeri=(2*(length+breadth))

console.log(`the area of the rectangle is ${recArea}, and the perimeter is ${recPeri}`);


let rightNow=new Date()
console.log(`the date is ${rightNow.getFullYear()}-${rightNow.getMonth()}-${rightNow.getDate()} ${rightNow.getHours()}:${rightNow.getMinutes()}`) 

