document.querySelector('.prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

document.querySelector('.next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});
document.querySelectorAll('.days li').forEach(day => {
    day.addEventListener('click', function() {
        alert(`You clicked on ${this.textContent}!`);
        // Add functionality here to show more details or interact with this day.
    });
});
