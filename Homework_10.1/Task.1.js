class Book {
    constructor(name, author, published) {
        this.name = name;
        this.author = author;
        this.published = published;
    }

    printInfo() {
        console.log(
            `Book name is ${this.name}, written by ${this.author}, firstly published ${this.published}`
        );
    }

    static olderBooks(books) {
        let oldest = books[0];
        for (const currentBook of books) {
            if (currentBook.published < oldest.published) {
                oldest = currentBook;
            }
        }
        return oldest;
    }
}

class Ebook extends Book {
    constructor(name, author, published, fileFormat) {
        super(name, author, published);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (value === "text") {
            this._fileFormat = "UNKNOWN";
            return;
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `Book name is ${this.name}, written by ${this.author}, firstly published ${this.published} read in ${this.fileFormat}`
        );
    }

    static objectEbook(paperBook, fileFormat) {
        return new Ebook(
            paperBook.name,
            paperBook.author,
            paperBook.published,
            fileFormat
        );
    }
}

const book1 = new Book("Harry Potter", "J.K.Rowling", 1997);
const book2 = new Book("Gone with the wind", "M. Mitchell", 1936);

const ebook1 = new Ebook("Harry Potter", "J.K.Rowling", 1997, "PDF");
const ebook2 = new Ebook("Gone with the wind", "M. Mitchell", 1936, "Epub");
const ebook3 = new Ebook("Gone with the wind", "M. Mitchell", 1936, "text");

const books = [book1, book2, ebook1, ebook2, ebook3];

const oldestBook = Book.olderBooks(books);
oldestBook.printInfo();

const ebookFromBook = Ebook.objectEbook(book1, "PDF");
ebookFromBook.printInfo();
