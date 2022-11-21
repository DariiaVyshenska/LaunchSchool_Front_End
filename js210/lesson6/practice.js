// 1.
let bookTitle = 'The Three-Body Problem;'

// 2.
let [title, author, pageCount] = ['The Three-Body Problem', 'Cixin Liu', 400];
// or
let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let page_count = 400;

// 3.
let completed = lastPageRead === 400;

// 4.
if (finishedBook()) console.log('You have finished reading this book');

// 5.
const read = function logReadPagesToConsole(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = `You read page ${page}`;
    console.log(message);
  }
}

read(400);
