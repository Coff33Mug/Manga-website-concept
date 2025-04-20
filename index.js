document.addEventListener("DOMContentLoaded", () => {
    const filterElement = document.getElementById("filterElement");
    const accountElementDropDown = document.getElementById("accountElementDropDown");
    // Card formatting elements
    const cardContainer = document.getElementById("cardContainer");
    const cardContainerChildren = cardContainer.children;
    const denseFormatButton = document.getElementById("denseFormatButton");
    const defaultFormatButton = document.getElementById("defaultFormatButton");
    const compactFormatButton = document.getElementById("compactFormatButton");
    const tagsButton = document.getElementById("tagsButton");
    const tagFilterContainer = document.getElementById("tagFilterContainer");

    /*  Drop down elements for filters and profile
        Initial hidden keeps the fade out animation from happening 
        when the page loads in. 
    */
    document.getElementById("filterButton").addEventListener('click', () => {
        // Hidden state -> unhidden
        filterElement.classList.toggle("hidden");

        // Closes filter popup if it's open when you press the filter button
        if (!tagFilterContainer.classList.contains("hidden")) {
            tagFilterContainer.classList.add("hidden");
        }
    });

    // Toggle for tags window
    tagsButton.addEventListener('click', (event) => {
        // Stop propogation to prevent parent event listener (event window)
        // below from activating, preventing the opening of filters
        event.stopPropagation();
        // Initial hidden keeps the fade out animation from happening 
        // when the page loads in.
        tagFilterContainer.classList.remove("initialHidden");
        tagFilterContainer.classList.toggle("hidden");
    });

    // Prevents filter element from closing when clicking inside of it.
    tagFilterContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Hides filter element if you click off it.
    window.addEventListener('click', () => {
        if (!tagFilterContainer.classList.contains("hidden")) {
            tagFilterContainer.classList.add("hidden");
        }
    });

    setTimeout(() => {
        tagFilterContainer.classList.remove("noanimation");
    }, 150);
    
    document.getElementById("accountProfilePictureButton").addEventListener('click', () => {
        // Hidden state -> unhidden
        accountElementDropDown.classList.toggle("hidden");
    });

    // Events for format buttons
    denseFormatButton.addEventListener('click', () => {
        
        // Cards are formatted to dense

        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in compact format, remove it.
            if (card.classList.contains("compact")) {
                card.classList.remove("compact");
                cardContainer.classList.remove("compact");
            }
            card.classList.add("dense");
            cardContainer.classList.add("dense");
        }

        // Sets dense to active
        denseFormatButton.classList.add("active");
        defaultFormatButton.classList.remove("active");
        compactFormatButton.classList.remove("active");
    });

    defaultFormatButton.addEventListener('click', () => {
        console.log("Default button pressed");
        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in dense or compact format, remove it.
            if (card.classList.contains("dense")) {
                card.classList.remove("dense");
                cardContainer.classList.remove("dense");
            } else if (card.classList.contains("compact")) {
                card.classList.remove("compact");
                cardContainer.classList.remove("compact");
            }
            
            card.classList.remove("dense");
            cardContainer.classList.remove("dense");
        }

        // Sets default to active
        defaultFormatButton.classList.add("active");
        denseFormatButton.classList.remove("active");
        compactFormatButton.classList.remove("active");
    });

    compactFormatButton.addEventListener('click', () => {
        console.log("Compact button pressed");
        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in dense format, remove it.
            if (card.classList.contains("dense")) {
                card.classList.remove("dense");
                cardContainer.classList.remove("dense");
            }
            card.classList.add("compact");
            cardContainer.classList.add("compact");
        }

        // Sets compact to active
        compactFormatButton.classList.add("active");
        denseFormatButton.classList.remove("active");
        defaultFormatButton.classList.remove("active");
    });

    document.getElementById("closeTagFilterContainerButton").addEventListener('click', () => {
        tagFilterContainer.classList.add("hidden");
    });
});

