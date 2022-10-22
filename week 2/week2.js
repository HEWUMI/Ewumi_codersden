let challenge='30 days of javascript'
console.log(challenge)

console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

console.log(challenge.substring(3,25))
console.log(challenge.substring(0,2))

console.log(challenge.includes('script'))

console.log(challenge.split())
console.log(challenge.split(' '))

let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(' '))

console.log(challenge.replace('javascript', 'python'))

console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))


let sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('javascript'))



console.log(challenge.match(/a/gi))

let string1='30 days of'
let string2=' javascript'
console.log(string1.concat(string2))


console.log(challenge.repeat(222))
