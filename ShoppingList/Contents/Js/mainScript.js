currentList = {}
function createShoppingList() {
    currentList.name = $('#txtList').val();
    currentList.items = new Array();

    if ($('#txtList').val().length > 0) {
        //web Service Call
        $('#shoppingListTitle').html(currentList.name);
        $('ul#shoppingList').empty();
        $('#NewListDiv').removeClass('d-none');
        $('#createListDiv').addClass('d-none');
    }
} const drawItems = (data) => {
    var list = $('#shoppingList').empty();
}
const addItem = () => {
    var newItem = {};
    newItem.name= $('#txtListItem').val();
    currentList.items.push(newItem);
    console.log('data', currentList);
}

$(document).ready(() => {    
})
