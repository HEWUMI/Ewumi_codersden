// ex 1

const dog = {
 
}

console.log(dog)


dog.name='bruno'
dog.legs=3
dog.age=8
dog.bark=function(){
  return 'woof woof'
}


//4
console.log(dog)
console.log(dog.bark())


console.log(dog.name)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark())
//console.log()

dog.breed='german'
dog.getDogInfo = function(){
  return dog
}

console.log(dog.getDogInfo())