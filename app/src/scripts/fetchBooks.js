

let app = document.getElementById("app");

var xhr = new XMLHttpRequest()

xhr.open("GET", "./src/book.xml", true);

function renderBooks(books) {
    for (let i = 0; i < books.length; i++) {

        if (books[i].nodeType === Node.ELEMENT_NODE) {
            let book = document.createElement("div");
            book.className = "book";
            app.appendChild(book)
            let childs = books[i].childNodes;
            console.log(childs)
            for (const child of childs) {

                if (child.nodeType === Node.ELEMENT_NODE) {

                    let el = document.createElement("div");
                    el.className = child.nodeName;
                    el.innerHTML = child.textContent;
                    book.appendChild(el)
                }
            }
        }
    }
}


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDocument = xhr.responseXML;
        data = xmlDocument.documentElement;
        let books = data.childNodes;
        renderBooks(books)
    }
}

xhr.send()
