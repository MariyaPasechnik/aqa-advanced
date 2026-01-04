async function getToDo() {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
return data;
}
async function getUser() {
const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
const data = await response.json();
return data;
}
const promisesCollection = Promise.all([getToDo(), getUser()]);
promisesCollection
.then(results => {
    console.log(results);
})
.catch(error => console.error(error));

const promisesRace = Promise.race([getToDo(), getUser()]);
promisesRace
.then(result => {
    console.log(result);
})
.catch(error => console.error(error));