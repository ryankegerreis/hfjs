//While Loops
// let scoops = 5

// while (scoops > 0) {
//   console.log("Another scoops")
//   if (scoops < 3) {
//     console.log("Ice cream  is getting low")
//   }
//   scoops--
// }

//Pass by value (pass by copy!)
//JS copies the values from a variable, and does not alter the original variables value
let age = 7

let addYear = (currentAge) => {
  currentAge++
  console.log(currentAge, age)
}

addYear(age)

