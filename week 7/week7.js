//1
function fullname(){
    return(`hilllary ewumi `)
   }
   console.log(fullname())
   
   //2
   function fullname(firstname,lastname){
    return(`${firstname} ${lastname} `)
   }
   console.log(fullname('hillary','ewumi'))
   
   //3
   function addNumbers(num1,num2){
     return num1+num2
   }
   console.log(addNumbers(5,9))
   
   //4
   function areaOfRectengle(length,width){
     return length*width
   }
   console.log(`Area is ${areaOfRectengle(4,7)}`)
   
   //5
   function perimeter(length,width){
     return (2*(length+width))
   }
   console.log(perimeter(4,8))
   
   //6
   function volume(l,w,h){
     return l*w*h
   }
   console.log(volume(2,3,4))
   
   //7
   function areaOfCircle(r){
     return Math.PI*(r**2)
   }
   console.log(areaOfCircle(3))
   
   
   //8
   function circum(r){
     return Math.PI*(r*2)
   }
   console.log(circum(3))
   
   
   //9
   function density(m,v){
     return m/v
   }
   console.log(density(12,3))
   */
   //10
   function speed(d,t){
     return d/t
   }
   console.log(speed(25,6))


   //excercise 2
//2
function quad(a, b, c) {
    console.log((-b + (Math.sqrt((b ** 2) - (4 * a * c)))) / (2 * a))
   
    console.log((-b - (Math.sqrt((b ** 2) - (4 * a * c)))) / (2 * a))
   
         
                 
  }
  
  console.log(quad(1, 4, 4))
  console.log(quad(1, -1, -2))
  console.log(quad(1, 7, 12))
  console.log(quad(1, 0, -4))
  console.log(quad(1, -1, 0))
  
  
  //3
  function printArray(apr){
    let i=0
    for(const elements of apr){
      console.log(apr[i])
      i+=1
  
    }
  }
  
  console.log(printArray([1,2,3,4,5,6,7,8,9]))
  
  */
  
  
  //personak
  function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
  
  