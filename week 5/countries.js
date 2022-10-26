const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

if (countries.includes('Ethiopia')){console.log('ETHIOPIA');
}else (countries.push('Ethiopia'))



console.log(countries);


let half1=(countries.slice(0,6))
let half2=(countries.slice(6,12))


console.log(half1, half2);