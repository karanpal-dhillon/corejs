const users = [
  {
    id: 1,
    username: "john",
    role: "user",
  },
  {
    id: 2,
    username: "jane",
    role: "admin",
  },
  {
    id: 3,
    username: "smith",
    role: "sub-admin",
  },
];

const johnRoles = [
  {
    id: 1,
    roleName: "user",
  },
  {
    id: 2,
    roleName: "admin",
  },
];

console.log(users.find((user) => user.role === "admin"));
let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.slice(2, 3));
console.log(nums);
// const nums2 = [8,9,0];
// const sqaures = nums.map(el => el * el)
// const cleanArr = nums.filter(el => el !==  3)

// nums.push(10);
// nums.push(...nums2)
// console.log(nums)

// delete value = 3;
// num-> 0 = 1 === 3 // false
// num-> 1 = 2 === 3 // false
// num-> 2 = 3 === 3 // true

// console.log(sqaures)
// console.log(cleanArr)
