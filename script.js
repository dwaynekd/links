document.addEventListener('DOMContentLoaded', (event) => {
    currentTab();
});

async function currentTab() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        let url = tabs[0].url;
        // Create a new anchor element
        let link = document.createElement('a');
        link.href = '#'; // This will be overridden by the click event listener
        link.textContent = 'Click';
        // Add an event listener for 'click' events
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action
            window.open(url); // Open the URL from the current tab
            window.open('http://yahoo.com'); // Open Yahoo in a new tab
        });

        // Replace the content of the 'link' cell with the new anchor element
        let linkCell = document.getElementById("link");
        linkCell.innerHTML = ''; // Clear the existing content
        linkCell.appendChild(link); // Add the new anchor element
    });
}
