function add() {
    //read the red circle value
    currentItem = document.getElementById("cartItemQuantity").value
    //string to integer
    currentItem = parseInt(currentItem);
    currentItem += 1;
    document.getElementById("cartItemQuantity").value = currentItem;
}
