// DOM Elements
const bookNameInput = document.getElementById('bookName');
const authorNameInput = document.getElementById('authorName');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

// load from Local Storage 
let books = JSON.parse(localStorage.getItem('books')) || [];

// table update
function renderBooks() {
    bookList.innerHTML = ''; 

    books.forEach((book, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;

        bookList.appendChild(tr);
    });
}

// save to local storage
function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Add button event
addBtn.addEventListener('click', () => {
    const name = bookNameInput.value.trim();
    const author = authorNameInput.value.trim();

    if (name === '' || author === '') {
        alert('দয়া করে বইয়ের নাম এবং লেখকের নাম লিখুন!');
        return;
    }

    books.push({ name, author });
    saveToLocalStorage();
    renderBooks();

    bookNameInput.value = '';
    authorNameInput.value = '';
    bookNameInput.focus();
});

// Delete button event
bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        books.splice(index, 1); // অ্যারেতে থেকে রিমুভ
        saveToLocalStorage();
        renderBooks();
    }
});

// load data
renderBooks();


