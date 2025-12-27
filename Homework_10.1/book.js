
class Book {
    constructor(name, author, published) {
        this.name = name;
        this.author = author;
        this.published = published;
    }
    printInfo () {
        console.log(`Book name is ${this.name}, written by ${this.author}, firstly published ${this.published}`);
     } 
}

const book1 = new Book("Harry Potter", "J.K.Rowling", 1997);
const book2 = new Book("Gone with the wind", "M. Mitchell", 1936);
book1.printInfo();
book2.printInfo();
export default Book;
