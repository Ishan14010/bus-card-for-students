document.addEventListener('DOMContentLoaded', () => {

    const currentDateTimeElement = document.getElementById('current-date-time');
    const expiryStatusElement = document.getElementById('expiry-status');
    const userIdElement = document.getElementById('user-id');

    // Function to update the date and time
    function updateDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        currentDateTimeElement.innerHTML = `${formattedDate} <br> ${formattedTime}`;
    }

    // Function to generate a random user ID
    function generateRandomId(length = 15) {
        const characters = '0123456789ABCDEF';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Function to set random expiry and user ID
    function setDynamicContent() {
        const randomMinutes = Math.floor(Math.random() * (120 - 30 + 1)) + 30;
        expiryStatusElement.textContent = `This pass expires after ${randomMinutes} minutes`;
        
        userIdElement.textContent = generateRandomId();
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // Call functions on page load
    updateDateTime();
    setDynamicContent();
});