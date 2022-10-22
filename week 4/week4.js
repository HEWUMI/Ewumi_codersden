//day4

let userAge=+prompt('Enter your age')
if(userAge>=18){console.log('You are old enough to drive')
}else{`sorry, you\'ll have to chill for ${18-userAge} more year(s)`}


let myAge=prompt('How old am i')
let yourAge=prompt('How old are you?')
if(myAge>yourAge){console.log(`Im ${myAge-yourAge} years older than you`)}
else if(yourAge>myAge){console.log(`you are ${yourAge-myAge} years older than me`)}
else{console.log(`same age bro`)}


let a = 4
let b = 3
if(a>b){`a is greater than b`}
else{`a is not greater`}

a>b
? console.log(`a is greater than b`)
: console.log(`a is not greater`)


//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let numCheck=+prompt(`etrer a number`)
if(numCheck%2===0){`${numCheck} is an even number.`}
else{`${numCheck} is odd`}



//Write a code which can give grades to students according to theirs scores: 
let studentScore=+prompt(`enter student score`)

switch(true)
{case studentScore>=80&&studentScore<=100:
    console.log(`student grade is A`)
    break
case studentScore>=70 && studentScore<=89:
    console.log(`student grade is B`)
    break
case studentScore>=60 && studentScore<=79:
    console.log(`student grade is C`)
    break
case studentScore>=50 &&studentScore<=59:
    console.log(`student grade is D`)
    break
case studentScore<=49:
    console.log(`student grade is F`)
    break
case studentScore>100:
    console.log(`student grade is NOT REAL`)
    break
case studentScore<=49:
    console.log(`student grade is F`)
    break;
default:
    console.log(`not a score`)
}



//Check if the season is Autumn, Winter, Spring or Summer. If the user input is
let season = (prompt(`input month`).toLowerCase())
switch(season){
    case 'september':
    case 'october':
    case 'november':
        console.log(`the season is autumn`)
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log(`the season is winter  `)
        break
    case 'march':
    case 'april':
    case 'may':
        console.log(`the seasom is spring ` )
        break
    case 'june':
    case 'july':
    case 'august':
        console.log(`the season is summer `)
        break
    default:
        console.log(`not a month`)



}




//Check if a day is weekend day or a working day. Your script will take day as an input.
let dayInput=(prompt(`what day is it todya? `).toLowerCase())

switch(dayInput){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${dayInput} is a work day`);
        break
    case 'saturday':
    case 'sunday':
        console.log(`${dayInput} is a weekend.`);
        break
    default:
        console.log(`not a week day`)
    
}
//level 3
//Write a program which tells the number of days in a month.

let monthInput=(prompt(`what month is it? `).toLowerCase())

switch(monthInput){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthInput} has 31 days`);
        break
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${monthInput} has 30 days.`);
        break
    case 'february':
        console.log(`${monthInput} has 28 days.`);
        break
    default:
        console.log(`not a month`)
    
}


