
 var b = 5;
 let a = 15;
if(true){
    let a = 10;
    const c = 30;
    console.log("Inner Block:" , a); //this will print 10 which is from inner block
}
// console.log(b); 
console.log(a); // this will print 15 which is from outer/globle block
// console.log(c); 