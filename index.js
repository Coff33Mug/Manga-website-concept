const filterElement = document.getElementById('filterElement');
let filterElementState = 0;

filterElement.addEventListener("click", function() {
    // Hidden state -> unhidden
    if (filterElementState == 0) {
        filterElement.className = "filterElement";
        filterElementState = 1;
    } else {
        // Unhidden -> hidden
        filterElement.className = "filterElementHidden";
        filterElementState = 0;
    }

});