// Function to change the title and favicon when the tab becomes visible
function changeTitleAndFavicon() {
    document.title = "Veteran Media LLP | Full Service Digital Agency That Drives Revenue";
    document.querySelector("link[rel*='icon']").href = "../media/png/favicon.ico";
}

// Function to restore the original title and favicon when the tab becomes hidden
function restoreTitleAndFavicon() {
    document.title = "Missing you already";
    document.querySelector("link[rel*='icon']").href = "../media/svg/sad.ico";
}

// Check if the Page Visibility API is supported
if (document.hidden !== undefined) {
    // Add event listeners for visibility changes
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            restoreTitleAndFavicon(); // Tab is hidden
        } else {
            changeTitleAndFavicon(); // Tab is visible again
        }
    });
} else {
    console.log("Page Visibility API not supported.");
}