const person = {
    firstName: "Severus",
    lastName: "Snape",
    age: 31
};
person.email = "severus.snape@hogwats.com";
delete person.age;
console.log(person);