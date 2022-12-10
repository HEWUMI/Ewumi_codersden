//day 6
const coutries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < coutries.length; i++){
  newArr.push(coutries[i].toUpperCase())
}

console.log(newArr);
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


//while

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
console.log(i)


//do while
let it = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5

//NUMBER 1

for(let i = 1; i<11; i++){console.log(i);}



/*let j=0
while(j<10){j++
  console.log(j);}

console.log(j);
*/


let k = 0
do{k++
  console.log(k)}
while(k<10)


for(let i = 10; i>0; i--){console.log(i);}


let j=11
while(j>1){j--;
  console.log(j);}

console.log(j);


let l = 11
do{l--
  console.log(l)}
while(l>1)



let m = 11
do{m--
  console.log(m)}
while(m>1)



//for (let numfor = 0; numfor<n; numfor++ ){console.log(numfor);}


console.log('####');



let ana= 0
b = ''
while (ana<10){
  ana++
  b=b+'#'
console.log(b);}



for(inn=0; inn<11; inn++){
  console.log(`${inn}*${inn} = ${inn*inn}`);
console.log(`${inn}    ${inn**2}    ${inn**3}}`)}


for (i=0; i<101; i++){
i%2==0
? console.log(i);
: console.log('');
  
 // console.log(i);}