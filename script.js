// script.js

function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    
    // Get current date and time
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    // Format the date and time
    const formattedDateTime = currentDate.toLocaleString('en-US', options);

    // Display the date and time in the footer
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the date and time when the page loads
updateDateTime();
