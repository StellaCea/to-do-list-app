// Add a new item to the list of items
function newItem(){
    let list = $('#list')
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(inputValue);

    if (inputValue==='') {
        alert("You must write something!");
    }else{
        list.append(li);
    }

    //Cross out an item from the list of items
    function crossOut (){
        li.toggleClass('strike');
    }

    li.on("dblclick", function crossOut(){
        li.toggleClass('strike');
    });

    //Add the delete button X
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //Add CLASS DELETE (DISPLAY: NONE) from the css
    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass("delete");
    }

    //Reorder the list
    list.sortable();
}

