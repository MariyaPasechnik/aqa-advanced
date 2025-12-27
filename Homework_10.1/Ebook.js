import Book from "./book.js";
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
        console.log(`Book name is ${this.name}, written by ${this.author}, firstly published ${this.published} read in ${this.fileFormat}`);
    }
}
const ebook1 = new Ebook("Harry Potter", "J.K.Rowling", 1997, "PDF");
const ebook2 = new Ebook("Gone with the wind", "M. Mitchell", 1936, "Epub");
const ebook3 = new Ebook("Gone with the wind", "M. Mitchell", 1936, "text");
ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();
export default Ebook;