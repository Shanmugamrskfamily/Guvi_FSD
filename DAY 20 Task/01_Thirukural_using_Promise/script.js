
let form = document.querySelector('.kuralForm');
let noInput = document.querySelector('.noInput');
let kuralInfo = document.querySelector('.kuralInfo');
let searchButton = document.querySelector('.searchButton');

// Function to fetch and display information about a specific Kural (poem)
async function getKural(no) {
    try {
        // Make a fetch request to the API endpoint with the provided Kural number
        let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${no}`);
        let data = await response.json(); // Parse the response as JSON
        console.log(data); // Log the fetched data for debugging purposes

        // Extract the relevant data from the response
        let sect_tam = data.sect_tam; // Tamil name of the section
        let sect_eng = data.sect_eng; // English name of the section
        let chapgrp_tam = data.chapgrp_tam; // Tamil name of the chapter group
        let chapgrp_eng = data.chapgrp_eng; // English name of the chapter group
        let chap_tam = data.chap_tam; // Tamil name of the chapter
        let chap_eng = data.chap_eng; // English name of the chapter
        let line1 = data.line1; // First line of the Kural in Tamil
        let line2 = data.line2; // Second line of the Kural in Tamil
        let tam_exp = data.tam_exp; // Tamil explanation of the Kural
        let eng_exp = data.eng_exp; // English explanation of the Kural
        let eng = data.eng; // English translation of the Kural

        kuralInfo.innerHTML = ''; // Clear the previous Kural information

        // Create a container box to hold the Kural information and style it
        let box = document.createElement('div');
        box.setAttribute('class', 'container text-white mt-5 border border-5 text-center p-3 fs-3');
        box.setAttribute('style', 'background: linear-gradient(90deg, rgba(195,194,81,1) 0%, rgba(228,69,115,1) 35%, rgba(232,100,156,1) 62%, rgba(76,194,224,1) 81%)');
        box.innerHTML = `<em><b>பால்/SECTION : ${sect_tam}/ ${sect_eng}</em></b>`;

        // Create the header section with chapter and chapter group information
        let header = document.createElement('div');
        header.setAttribute('class', 'row');
        header.setAttribute('style', 'background-color:blue; color:white');

        let headerLeft = document.createElement('p');
        headerLeft.setAttribute('class', 'col-6 text-left');
        headerLeft.innerHTML = `அதிகாரம் / CHAPTOR : ${chap_tam} / ${chap_eng}`;

        let headerRight = document.createElement('p');
        headerRight.setAttribute('class', 'col-6 text-right');
        headerRight.innerHTML = `இயல்கள் / CHAPTOR GROUPS : ${chapgrp_tam} / ${chapgrp_eng}`;

        // Create the body section with Kural and explanation
        let body = document.createElement('div');
        body.setAttribute('class', 'row justify-content-center text-black mt-5');
        body.setAttribute('style', 'background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(122,47,76,1) 28%, rgba(232,78,110,1) 50%, rgba(65,60,28,1) 70%, rgba(16,177,75,1) 92%, rgba(252,176,69,1) 100%)');

        // Append the Kural and explanation to the body section
        body.innerHTML = `குறள்${no}:<br>`;
        body.innerHTML += `${line1}<br>${line2}<br><br>`;
        body.innerHTML += `KURAL ${no}:<br>${eng}<br><br><br>`;
        body.innerHTML += `விளக்கம்:<br>`;
        body.innerHTML += `${tam_exp}<br><br>EXPLANATION:<br>${eng_exp}`;

        // Append the header and body sections to the container box
        kuralInfo.appendChild(box);
        box.append(header, body);
        header.append(headerLeft, headerRight);
    } catch (error) {
        console.log('Error fetching the data:', error);
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let no = noInput.value; // Get the Kural number entered by the user
    getKural(no); // Fetch and display the information for the provided Kural number
}

// Add event listeners to the form submission and search button click
form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);
