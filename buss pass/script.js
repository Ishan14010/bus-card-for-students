document.addEventListener('DOMContentLoaded', () => {

    const currentDateTimeElement = document.getElementById('current-date-time');
    const expiryStatusElement = document.getElementById('expiry-status');
    const userIdElement = document.getElementById('user-id');

    // Function to update the date and time
    function updateDateTime() {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();

        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'

        const formattedDate = `${dayName} ${monthName} ${day} ${year}`;
        const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

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