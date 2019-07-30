//Simple Todo
//1. Within the HTML page, change the text to refer to todo buttons of your own
//2. Complete code for adding a todo element to when todo button 1 is clicked.
//3. Repeat the process for your 3 remaining todo buttons.
//4. Complete Code for the delete last todo button.

var todoButton1 = document.getElementById("todoButton1");
var todoButton2 = document.getElementById("todoButton2");
var todoButton3 = document.getElementById("todoButton3");
var todoButton4 = document.getElementById("todoButton4");

var deleteButton = document.getElementById("deleteButton");

var todoItems = document.getElementById("todoItems");

todoButton1.addEventListener('click', function () {
  //a. Create a new todo dom element
  //b. Set the text of the todo element to the text of your todoButton
  //c. Set the class of the new elment to "todo" to add in styles.
  //d. Append the child to todoItems
});

deleteButton.addEventListener('click', function () {
  //a. Get ALL todo items (hint: you can use "query" for all items with a common class)
  //b. Get the last todo item (hint: how do you get the last item in an array)
  //c. Remove that last item from the DOM
  //d. Bonus. How can we make sure we only delete items that are still avalible.
});