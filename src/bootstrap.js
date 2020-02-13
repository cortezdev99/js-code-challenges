// FOR LOOP

// function suming(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]
//   }
//   console.log(sum)
// }

// suming([1, 2, 3])

// WHILE LOOP

// i stands for incrementor
// i is basically your index. its how you add new values to the new variable sum
// function suming(arr) {
//   let i = 0;
//   let sum = 0
//   while ( arr.length > [i] ) {
//     sum += arr[i]
//     i++
//   }
//   return sum
// }

// console.log(suming([1, 2, 3]))

// DO WHILE LOOP
function suming(arr) {
  let i = 0;
  let sum = 0
  do {
    sum += arr[i]
      i++
  } while ( arr.length > [i] )
 return sum 
}

console.log(suming([1, 2, 3]))