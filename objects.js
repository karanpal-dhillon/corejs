let user = {
  name: "john",
  age: 23,
  "is admin": false,
};

user["is admin"];
user.email = "john@gmail.com";
delete user.email;

// console.log(user.name);
// console.log("cart" in user);
// console.log("name" in user);
// for (key in user) {
//   console.log(key, ":", user[key]); //name age is admin
// }
user["name"]; // obj.name

let obj1 = new Object();

const user1 = createUser("jane doe", 38);
function createUser(name, age) {
  return {
    name: name,
    age,
  };
}

user = { id: 1, name: "abc", username: "xyz", email: "email@example.com" };
const { username, name, email } = user;
console.log(username);
