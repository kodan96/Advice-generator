document.addEventListener("DOMContentLoaded", function() {
    const adviceElement = document.getElementById('advice');
    const randomIdElement = document.getElementById('randomid');
    const diceIcon = document.querySelector('.dice');

    const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                adviceElement.textContent = `"${data.slip.advice}"`;
                randomIdElement.textContent = `Advice #${data.slip.id}`;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    // Fetch advice initially
    fetchAdvice();

    // Add event listener to the dice icon
    diceIcon.addEventListener('click', fetchAdvice);
});