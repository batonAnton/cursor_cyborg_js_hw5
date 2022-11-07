// Task 1
function getRandomArray(  min = 1 ,  max = 10) {
    let value = 0;
    let length = 20;
    let array = [ ];
   
        for (i = 0; i <= length; i++) {
            value = (Math.ceil(Math.random() * (max - min)) + min)
           array.push(value);
        
           }    
    
    console.log('task 1: ' +  array);
   
  }
  
//  console.log('task 1:' +   );
 getRandomArray(1,10); 



//  task 2

function getModa(...numbers){
    let findModa = numbers => numbers.filter((item,index) =>   numbers.indexOf(item ) !== index);
    let resModa = findModa(numbers);
    console.log('task 2: ' + resModa);   
}
 getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);


// task 3 
function getAverage(...numbers){
  let arrNew = numbers.filter((number) => {
    return Number.isInteger(number);
  });
  let total = 0;
  arrNew.forEach(number => total += number );
  let res = total / numbers.length;
  return  res;
}
  console.log('task 3: ' +  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// task 4

// function getMedian(...numbers){
//   // якщо числа у масиві непарні тоді (n+1) /2
//   let arrNew = numbers.filter((number) => {
//     return Number.isInteger(number);
//   });
// }
// console.log('task 4: ' + getMedian(1, 2, 3, 4) ); 

// let arr = [ 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// // метод сортує вміст arr
// arr.sort();

// console.log( arr );  // 1, 15, 2

// task 5 


function filterEvenNumbers(...numbers){
  let newArr = [1, 2, 3, 4, 5, 6,7,8,9,10];
  let res = newArr.filter(numbers => (!(numbers  % 2 === 0)))
  newArr.push(res);
  console.log('task 5: ' + res);
}
filterEvenNumbers();

// task 6 

function countPositiveNumbers(...numbers){
  let newArr = [1, -2, 3, -4, -5, 6];
  let res = newArr.filter(numbers => (numbers > 0 ))
  newArr.push(res);
  console.log('task 6: ' + res.length);
  }
  countPositiveNumbers();


// task 7 
function getDividedByFive(...numbers) {
  
  return  numbers.filter(numbers => numbers % 5 == 0 )
}

console.log('task 7: ' + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
