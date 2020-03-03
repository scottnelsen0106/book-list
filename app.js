class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '12121212'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '1324244'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
}

//Display Book
document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#book-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if(title === '' ||author === '' ||isbn ==='') {
        alert('Please fill in all fields');
    } else {
        
    const book = new Book(title, author, isbn);
    
    UI.addBookToList(book);

    UI.clearFields();
    }

});

document.querySelector('#book-list').addEventListener('click', (event)=> {
    UI.deleteBook(event.target);
})