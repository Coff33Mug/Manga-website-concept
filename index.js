document.addEventListener("DOMContentLoaded", () => {
    const filterElement = document.getElementById("filterElement");
    let filterElementState = 0;

    document.getElementById("filterButton").addEventListener('click', () => {
        // Hidden state -> unhidden
        if (filterElementState == 0) {
            filterElement.className = "filterElement";
            filterElementState = 1;
            console.log("first");
        } else {
            // Unhidden -> hidden
            filterElement.className = "filterElement hidden";
            filterElementState = 0;
            console.log("second");
        }

    });
});