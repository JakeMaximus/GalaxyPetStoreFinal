function toggleBox(selected) {
    displayArray = document.getElementsByClassName("category");

    //only selected is chosen
    for (let i = 0; i < displayArray.length; i++) {
        displayArray[i].style.display = "none";
    }
    //display what you want
    displayArray[selected].style.display = "block";
}