// Single Text input Effect placeholder.

const placeholderText = document.getElementById("Search");
const sentence = placeholderText.placeholder;
let inputWord = 0;
function wordTyping() {
  if (inputWord < sentence.length) {
    placeholderText.placeholder = sentence.substring(0, inputWord+1);
    inputWord++;
    setTimeout(wordTyping, 80);
  } else {
    inputWord = 0;
    placeholderText.placeholder = "";
    setTimeout(wordTyping, 500);
  }
}
wordTyping();
