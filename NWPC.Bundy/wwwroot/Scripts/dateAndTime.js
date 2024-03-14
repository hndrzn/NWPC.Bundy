function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' });
    var dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    var dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // concatenate day and date strings
    var dayDate = dayString + ", " + dateString;

    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-day-date').textContent = dayDate;
}

// call updateTime function every second to update the time dynamically
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();