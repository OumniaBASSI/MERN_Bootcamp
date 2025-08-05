const books = require("./books.json");

function priceOfBook(bookName) {
  let price;
  let l =books.length;
  for (let i = 0; i < l; i++) {
    if (books[i].title === bookName) {
      price = books[i].price;
    }
  }
  return price; 
}

function affordableBooks(budget) {
    const affordable = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].price <= budget) {
            affordable.push(books[i].title);
        }
    }

    return affordable;
}

function findBookByGenre(genre) { 
  let result = [];
  for (const book of books) {
    for (const g of book.genres) {
      if (g === genre) {
        result.push(book);
        break;
      }
    }
  }
  return result;
}

function groupByGenre() {
  const grouped = {};
  for(let i = 0; i < books.length; i++){
    const book = books[i];

    for(let j = 0; j < book.genres.length; j++){
      const genre = book.genres[j];
      
       if (!grouped[genre]) {
        grouped[genre] = [];
      }
      grouped[genre].push(book);
    }
  }
  return grouped;
}

function sortBooksByPrice() {
    let l = books.length;
    for (let i = 0; i < l - 1; i++) {
      
        let minIndex = i;
        for (let j = i + 1; j < l; j++) {
            if (books[j].price < books[minIndex].price) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [books[i], books[minIndex]] = [books[minIndex], books[i]];
        }
    }
    return books;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
