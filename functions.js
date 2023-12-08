// function printName(name, email){
//   console.log(name, email)
// } 

const printName = (name, email, validateEmail) => { 
  console.log(name, email); 
  validateEmail();
  return 'printed'
} 
//arrow function
const arrowFn = () => {

}

const arrowFnShort = p1 => console.log('this is short arrow function', p1)

const square = num => num * num;



//normal function 
function normalFn (p1, p2) {

}

const name = 'jane doe';

// const vEmail = () => {
//   console.log('validating email')
// }

const result = printName('john doe', 'karan@gmail.com', () => {console.log('annonymous function validating email')})
console.log(result)

const p = [1,2,3,false, {}, [], printName]
// First class citizen
console.log(p.length)

// for(let i = 0; i < p.length; i++) {
//   console.log(p[i])
// }


