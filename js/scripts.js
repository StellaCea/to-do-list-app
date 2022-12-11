// Add a new item to the list of items
let li = $('<li></li>');
let inputValue = $('#input').val();
list.append(inputValue);

if (inputValue==='') {
    alert("You must write something!");
}else{
    $('#list').append(li);
}

//Cross out an item from the list of items
function crossOut (){
    li.toggleClass("strike");
}

li.on("dbclick", crossOut);

//Add the delete button X
let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);

//Add CLASS DELETE (DISPLAY: NONE) from the css
crossOutButton.on("click", deleteListItem);

function deleteListItem(){
    li.addClass("delete");
}

//Reorder the list
$('#list').sortable();


