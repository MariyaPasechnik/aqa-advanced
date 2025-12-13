const users = [
    {name: "Harry", age: 11, email: "harry.potter@hogwarts.com"},
    {name: "Hermione", age: 12, email: "hermione.granger@hhogwarts.com"},
    {name: "Ron", age: 10, email: "ronald.weasley@hogwarts.com"}
];
for (const {name, age, email} of users){
    console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
}
