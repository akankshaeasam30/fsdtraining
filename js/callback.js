//callbacks
// function display(callback){
//     console.log("display function called");
//     callback();
// }
// function hello(){
//     console.log("hello function");
// }
// display(hello);
//arrow functions..
// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4));
// let add = (a,b) =>{
//     return a+b;
// }
// console.log(add(3,4));
// let add = (a,b) => a+b;
// console.log(add(4,6))
// let sq=num => num*num;
// console.log(sq(3))
//no arrow
// setTimeout(function(){
//     console.log("hello");
// },4000);
//arow

// setTimeout(()=>{
//     console.log("hello");
// },4000);
//call stack
// function one() {
//     console.log("One");
// }

// function two() {
//     console.log("Two");
// }

// one();
// two();
//asynchronous callback
// function getData(callback){
//     setTimeout(()=>{
//         console.log("data recieved");
//     },4000)
// }

// getData((data)=>{
//     alert(data);
// })
// // // getData();
// function placeOrder(callback){
//     setTimeout(()=>{
//     console.log("Order placed by the customer");
//     callback();
//     },2000)
    
// }
// function acceptOrder(callback){
//     setTimeout(()=>{
//     console.log("Accepted Order");
//     callback();
//     },3000);
    
// }
// function watchTV(callback){
//     setTimeout(()=>{
//     console.log("Watching TV");
//     callback();
// },4000);
    
// }
// function prepareFood(callback){
//     setTimeout(()=>{
//     console.log("preparing Food");
//     callback();
//     },5000);
    
// }
// function deliverFood(callback){
//     setTimeout(()=>{
//     console.log("Delivering Food");
//     callback();
//     },6000);
    
// }
// function payCash(callback){
//     setTimeout(()=>{
//     console.log("pay cash");
//     callback();
//     },7000);
    
// }
// deliverFood();
// prepareFood();
// watchTV();
// acceptOrder();
// placeOrder();
// payCash();
// placeOrder(()=>{
//     acceptOrder(()=>{
//         watchTV(()=>{
//             prepareFood(()=>{
//                 payCash(()=>{
//                     console.log("enjoy your meal");
//                 })
//             })
//         })
//     })
// })
// deliverFood(()=>{
//     prepareFood(()=>{
//         watchTV(()=>{
//             acceptOrder(()=>{
//                 placeOrder(()=>{
//                     payCash(()=>{
//                         console.log("Welcome to 5star");
//                     })
                    
//                 })
//             })
//         })
//     })
// })
//promises
// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Success");
//     }
//     else{
//         reject("Error");
//     }
// });
// promise
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));
//promises resolving with the problem of callback hell
function placeOrder(){
    return new Promise((resolve)=>{
        console.log("place order");
        resolve();
    });
}
function acceptOrder(){
    return new Promise((resolve)=>{
        console.log("accept order");
        resolve();
    })
}
function 