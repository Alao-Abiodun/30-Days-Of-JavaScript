const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1
// console.log("For Llop");
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;

// console.log("While Loop");
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 0;
// console.log("Do While Loop");
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// 2

// console.log("For Llop");
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;

// console.log("While Loop");
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let j = 10;
// console.log("Do While Loop");
// do {
//   console.log(j);
//   j--;
// } while (j >= 0);

// // Iterate 0 to n using for loop iteration
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let i = 0; i < 2; i++) {
//   // switch (i) {
//   //   case 1:
//   //     console.log("#");
//   //     continue;
//   //   case 2:
//   //     console.log("##");
//   //     break;
//   //   case 3:
//   //     console.log("###");
//   //     break;
//   // }
//   if (i === 1) {
//     console.log("#");
//   } else if (i === 2) {
//     console.log("##");
//   } else if (i === 3) {
//     console.log("###");
//   }
// }

// 5
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// 6
// console.log(`i i^2 i^3`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
// }

// 7
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // 8
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum = evenSum + i;
  }
  oddSum = oddSum + i;
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`
);

console.log([evenSum, oddSum]);

const generateFiveRandomNumbers = () => {
  let randomNumbers = "";
  for (let i = 1; i <= 5; i++) {
    randomNumbers += Math.floor(Math.random() * 10);
  }
  return Number(randomNumbers);
};
console.log(typeof generateFiveRandomNumbers());
