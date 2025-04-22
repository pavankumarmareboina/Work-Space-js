// console.log('hello js')

// const obj1 = {first: 20, second: 30, first: 50};
// console.log(obj1);

// let a = [1, 2, 3, 4, 5, 6];
// let target = 5;

// if (a.includes(target)) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// for (var i = 3; i <= 20; i++) {

//      if (i%2 !=0){
//         console.log(i)
//      }
//   }

// const marks = prompt("enter your marks");
// let student = marks
// switch (true) {
//   case marks > 90 && marks <= 100:
//     score = "you will finist marks in class";
//     break;
//   case marks > 80 && marks <= 90:
//     score = "you second rank in class marks";
//     break;
//   case marks > 70 && marks <=80:
//     score = "you pass very good";
//     break;
//   case marks > 60 && marks <= 70:
//     score = "you will pass good ";
//     break;
//   case marks > 50 && marks <= 70:
//     score = "nice pass good ";
//     break;
//   case marks > 35 && marks <= 50:
//     score = "you will pass improve ";
//     break;
//     case marks>10 && marks <=34:
//         score = 'you will fail !!!!'
//         break ;
//         default:
//             score = 'enter proper up 100 are there'
// }
// document.writeln(score)

// function printPrimes(limit) {
//     for (let num = 2; num <= limit; num++) {
//       if (isPrime(num)) {
//         console.log(num);
//       }
//     }
//   }
  
//   function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
  
//   // Example:
//   printPrimes(800);
  

// let fNmaes = ['apple','bannana','mango','pappaya','orange',]
// console.log(fNmaes)

// let mixe = ['pavan','pollard','pooran','hetmiyar','joshoph','russel','bratwet']
// let all = mixe.concat(fNmaes)
// console.log(all) 
 


// let fNmaes = ['apple','bannana','mango','pappaya','orange',]
// let addNmes = 'A grade'
// let add = []

// for (i=0; i<fNmaes.length; i++){
//     let adding = ` ${addNmes} ${fNmaes[i]}`
//     add.push(adding)
// }
// console.log(add)


// let func = ()=>{
//     let num = [1,2,3,4,5,6,7,8,9]
// let num2 = 'e number'
// let adds = []
// for (i=0; i<num.length; i++){
//     let chnage = `${num2} ${num}`
//     adds.push(chnage)
// }
// console.log(adds)
// }
// func()


// let houseExp = [100,23,123,44,56,121,79]
// let food = [122,32,45,223,45,4]

// let expenses = (arr)=>{
//     let total = 0
//     for (i= 0; i<arr.length; i++){
//         total += arr[i]
//     }
//     return total
// }
//  let hx = expenses(houseExp)
//  let fexp = expenses(food)
//  console.log({
//     houseExp : hx,
//     food : fexp
//  })

// let normal = (val)=>{
//   for (i=0; i<=10; i++){
//     console.log(i)
//   }
//   val(i)
// }
// let callback = ()=>{
//     console.log('im callback function')
// }
// normal(callback)




// let btnb = document.querySelector('.btn')
// let message = document.querySelector('.replace')
// btnb.addEventListener('click',()=>{
//    btnb.innerText = 'hello'
//   btnb=message
// })

let button = document.querySelector('.btn')
let mess = document.querySelector('.replace')
button.addEventListener('click',()=>{
   let come = mess.innerHTML= 'click event'
   button.come
})




 let validform = ()=>{
  let password =document.querySelector('.password').value
  let confirm = document.querySelector('#btn').value
  if (password === ''){
   alert('dcfvgbv')
   return false
  }
  if(confirm === password){
   alert('sdfg')
   return false
  }
  
}
