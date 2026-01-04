function getToDo(){
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
}
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());
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
